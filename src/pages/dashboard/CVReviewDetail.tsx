
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCVReview, CVReview } from '@/hooks/useCVReview';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Download, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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

const CVReviewDetail = () => {
  const { reviewId } = useParams<{ reviewId: string }>();
  const { fetchCVReviewById } = useCVReview();
  const [review, setReview] = useState<CVReview | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadReview = async () => {
      if (reviewId) {
        setLoading(true);
        const data = await fetchCVReviewById(reviewId);
        if (data) {
          setReview(data);
        }
        setLoading(false);
      }
    };

    loadReview();
  }, [reviewId]);

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'MMMM dd, yyyy');
    } catch (e) {
      return dateString;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Loading review details...</p>
      </div>
    );
  }

  if (!review) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-lg text-gray-600">Review not found</p>
        <Button 
          variant="link" 
          className="mt-4" 
          onClick={() => navigate('/dashboard/cv-reviews')}
        >
          <ChevronLeft className="h-4 w-4 mr-1" /> 
          Back to CV Reviews
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            className="mr-4" 
            onClick={() => navigate('/dashboard/cv-reviews')}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> 
            Back
          </Button>
          <h1 className="text-2xl font-bold">CV Review Details</h1>
        </div>
        <StatusBadge status={review.status} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Review Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-500 mb-1">Submission Date</h3>
              <p>{formatDate(review.submitted_at)}</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-500 mb-1">Deadline</h3>
              <p className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-gray-500" />
                {formatDate(review.deadline)}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Button 
              variant="outline" 
              onClick={() => window.open(review.cv_url, '_blank')}
            >
              <Download className="h-4 w-4 mr-2" />
              Download Your CV
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="feedback" className="w-full">
        <TabsList>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="status">Status History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="feedback">
          <Card>
            <CardContent className="pt-6">
              {review.status === 'Completed' && review.feedback ? (
                <div className="prose max-w-none">
                  <h3 className="text-lg font-semibold mb-4">Expert Feedback</h3>
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    {review.feedback.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4">{paragraph}</p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">
                    {review.status === 'Pending' 
                      ? 'Your CV is pending review. Our experts will provide feedback soon.'
                      : 'Your CV is currently being reviewed by our experts.'}
                  </p>
                  <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    Expected completion by {formatDate(review.deadline)}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="status">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${review.status === 'Pending' || review.status === 'In Review' || review.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                    1
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">CV Submitted</h4>
                    <p className="text-sm text-gray-500">{formatDate(review.submitted_at)}</p>
                  </div>
                </div>
                
                <div className="w-0.5 h-6 bg-gray-200 ml-4"></div>
                
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${review.status === 'In Review' || review.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                    2
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">In Review</h4>
                    <p className="text-sm text-gray-500">
                      {review.status === 'In Review' || review.status === 'Completed' 
                        ? 'Your CV is being reviewed by our experts' 
                        : 'Pending'}
                    </p>
                  </div>
                </div>
                
                <div className="w-0.5 h-6 bg-gray-200 ml-4"></div>
                
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${review.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium">Review Completed</h4>
                    <p className="text-sm text-gray-500">
                      {review.status === 'Completed' 
                        ? 'Your CV review is complete and feedback is available' 
                        : 'Pending'}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CVReviewDetail;
