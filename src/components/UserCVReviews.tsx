
import { useEffect } from 'react';
import { useCVReview, CVReview } from '@/hooks/useCVReview';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Eye, Download, Clock } from 'lucide-react';
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

const formatDate = (dateString: string) => {
  try {
    return format(new Date(dateString), 'MMM dd, yyyy');
  } catch (e) {
    return dateString;
  }
};

const UserCVReviews = () => {
  const { reviews, loading, fetchUserCVReviews } = useCVReview();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserCVReviews();
  }, []);

  const viewCVReview = (review: CVReview) => {
    navigate(`/dashboard/cv-reviews/${review.id}`);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Your CV Reviews</CardTitle>
        <Button 
          variant="outline"
          onClick={() => navigate('/cv-review')}
        >
          Request New Review
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center p-8">
            <p>Loading your CV reviews...</p>
          </div>
        ) : reviews.length > 0 ? (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="p-4 border rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <StatusBadge status={review.status} />
                    <span className="text-sm text-gray-500">
                      Submitted on {formatDate(review.submitted_at)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Deadline: {formatDate(review.deadline)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => window.open(review.cv_url, '_blank')}
                  >
                    <Download className="h-4 w-4 mr-1" /> CV
                  </Button>
                  <Button 
                    variant="default" 
                    size="sm"
                    onClick={() => viewCVReview(review)}
                  >
                    <Eye className="h-4 w-4 mr-1" /> View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">You haven't submitted any CV reviews yet.</p>
            <Button 
              variant="default" 
              className="mt-4"
              onClick={() => navigate('/cv-review')}
            >
              Submit Your CV for Review
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UserCVReviews;
