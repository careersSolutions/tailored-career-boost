
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Eye, MoreHorizontal } from 'lucide-react';

const reviewData = [
  { id: 'CV001', customer: 'John Smith', submitted: '2023-10-15', deadline: '2023-10-18', status: 'Completed', reviewer: 'Alice Johnson' },
  { id: 'CV002', customer: 'Jane Doe', submitted: '2023-10-16', deadline: '2023-10-19', status: 'In Review', reviewer: 'Bob Williams' },
  { id: 'CV003', customer: 'Michael Johnson', submitted: '2023-10-17', deadline: '2023-10-20', status: 'Pending', reviewer: 'Unassigned' },
  { id: 'CV004', customer: 'Emily Wilson', submitted: '2023-10-18', deadline: '2023-10-21', status: 'Completed', reviewer: 'Carol Davis' },
  { id: 'CV005', customer: 'David Brown', submitted: '2023-10-19', deadline: '2023-10-22', status: 'In Review', reviewer: 'Alice Johnson' },
  { id: 'CV006', customer: 'Sarah Miller', submitted: '2023-10-20', deadline: '2023-10-23', status: 'Pending', reviewer: 'Unassigned' },
  { id: 'CV007', customer: 'Robert Davis', submitted: '2023-10-21', deadline: '2023-10-24', status: 'Completed', reviewer: 'Bob Williams' },
  { id: 'CV008', customer: 'Jennifer Garcia', submitted: '2023-10-22', deadline: '2023-10-25', status: 'In Review', reviewer: 'Carol Davis' },
];

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

const CVReviews = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Pending Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Completed This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>CV Reviews</CardTitle>
          <Button variant="outline">Assign Reviewers</Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reviewer</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reviewData.map((review) => (
                <TableRow key={review.id}>
                  <TableCell>{review.id}</TableCell>
                  <TableCell>{review.customer}</TableCell>
                  <TableCell>{review.submitted}</TableCell>
                  <TableCell>{review.deadline}</TableCell>
                  <TableCell>
                    <StatusBadge status={review.status} />
                  </TableCell>
                  <TableCell>{review.reviewer}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" title="View CV">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Download CV">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="More Options">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CVReviews;
