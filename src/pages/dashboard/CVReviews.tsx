
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Eye, MoreHorizontal } from 'lucide-react';
import { useCVReview } from '@/hooks/useCVReview';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { format } from 'date-fns';

const StatusBadge = ({ status }: { status: string }) => {
  let colorClass = '';
  
  switch (status) {
    case 'Completed':
      colorClass = 'bg-green-100 text-green-800';
      break;
    case 'In Review':
      colorClass = 'bg-blue-100 text-blue-800';
      break;
    case 'Pending':
      colorClass = 'bg-yellow-100 text-yellow-800';
      break;
    default:
      colorClass = 'bg-gray-100 text-gray-800';
  }
  
  return <Badge className={colorClass}>{status}</Badge>;
};

interface ReviewWithUser {
  id: string;
  user_id: string;
  submitted_at: string;
  deadline: string;
  status: string;
  reviewer_id: string | null;
  cv_url: string;
  feedback: string | null;
  updated_at: string;
  profiles: {
    name: string | null;
    email: string | null;
  };
}

const CVReviews = () => {
  const { fetchAllCVReviews, updateCVReviewStatus, provideFeedback, assignReviewer } = useCVReview();
  const [reviews, setReviews] = useState<ReviewWithUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    pending: 0,
    inReview: 0,
    completedThisWeek: 0
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  const [selectedReview, setSelectedReview] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadCVReviews();
  }, []);

  const loadCVReviews = async () => {
    setLoading(true);
    const data = await fetchAllCVReviews();
    if (data) {
      setReviews(data as ReviewWithUser[]);
      calculateStats(data as ReviewWithUser[]);
    }
    setLoading(false);
  };

  const calculateStats = (data: ReviewWithUser[]) => {
    const pending = data.filter(r => r.status === 'Pending').length;
    const inReview = data.filter(r => r.status === 'In Review').length;
    
    // Calculate completed this week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    const completedThisWeek = data.filter(r => {
      return r.status === 'Completed' && new Date(r.updated_at) >= oneWeekAgo;
    }).length;

    setStats({ pending, inReview, completedThisWeek });
  };

  const handleStatusChange = async (id: string, status: 'Pending' | 'In Review' | 'Completed') => {
    const success = await updateCVReviewStatus(id, status);
    if (success) {
      loadCVReviews();
    }
  };

  const handleAssignReviewer = async (id: string) => {
    // In a real application, you would show a UI to select a reviewer
    // For this example, we'll just use the current user as the reviewer
    const success = await assignReviewer(id, 'current-user-id');
    if (success) {
      loadCVReviews();
    }
  };

  const openFeedbackDialog = (id: string) => {
    setSelectedReview(id);
    const review = reviews.find(r => r.id === id);
    setFeedbackText(review?.feedback || '');
    setDialogOpen(true);
  };

  const submitFeedback = async () => {
    if (selectedReview) {
      const success = await provideFeedback(selectedReview, feedbackText);
      if (success) {
        setDialogOpen(false);
        loadCVReviews();
      }
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Pending Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.inReview}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Completed This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedThisWeek}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>CV Reviews</CardTitle>
          <Button variant="outline" onClick={() => loadCVReviews()}>Refresh</Button>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center p-8">
              <p>Loading CV reviews...</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reviews.map((review) => (
                  <TableRow key={review.id}>
                    <TableCell>{review.id.substring(0, 8)}</TableCell>
                    <TableCell>{review.profiles?.name || 'Unknown'}</TableCell>
                    <TableCell>{formatDate(review.submitted_at)}</TableCell>
                    <TableCell>{formatDate(review.deadline)}</TableCell>
                    <TableCell>
                      <StatusBadge status={review.status} />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          title="View CV"
                          onClick={() => window.open(review.cv_url, '_blank')}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          title="Download CV"
                          onClick={() => window.open(review.cv_url, '_blank')}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" title="More Options">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {review.status === 'Pending' && (
                              <DropdownMenuItem onClick={() => handleAssignReviewer(review.id)}>
                                Assign to Me
                              </DropdownMenuItem>
                            )}
                            {review.status === 'Pending' && (
                              <DropdownMenuItem onClick={() => handleStatusChange(review.id, 'In Review')}>
                                Mark as In Review
                              </DropdownMenuItem>
                            )}
                            {review.status === 'In Review' && (
                              <DropdownMenuItem onClick={() => openFeedbackDialog(review.id)}>
                                Provide Feedback
                              </DropdownMenuItem>
                            )}
                            {review.status === 'In Review' && (
                              <DropdownMenuItem onClick={() => handleStatusChange(review.id, 'Completed')}>
                                Mark as Completed
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Provide CV Review Feedback</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              placeholder="Enter your detailed feedback for this CV..."
              className="min-h-[200px]"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button type="button" onClick={submitFeedback}>
              Submit Feedback
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CVReviews;
