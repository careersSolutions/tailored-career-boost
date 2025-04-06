
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Upload, Loader2 } from 'lucide-react';
import { useUser } from '@supabase/auth-helpers-react';
import { useNavigate } from 'react-router-dom';
import { useCVReview } from '@/hooks/useCVReview';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  message: z.string().optional(),
  cvFile: z.instanceof(File, { message: "Please upload your CV file." })
    .refine(file => file.size < 10 * 1024 * 1024, { message: "File must be less than 10MB." })
    .refine(
      file => ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type),
      { message: "Please upload a PDF or Word document." }
    )
});

type FormValues = z.infer<typeof formSchema>;

const CVUploadForm = () => {
  const { toast } = useToast();
  const user = useUser();
  const navigate = useNavigate();
  const { submitCVForReview, isSubmitting } = useCVReview();
  const [file, setFile] = useState<File | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.user_metadata?.name || '',
      email: user?.email || '',
      phone: '',
      message: '',
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      form.setValue('cvFile', selectedFile);
    }
  };

  const onSubmit = async (values: FormValues) => {
    if (!file) {
      form.setError('cvFile', { message: 'Please upload your CV file.' });
      return;
    }

    // If user is not logged in, redirect to sign in page
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to submit your CV for review",
        variant: "destructive",
      });
      navigate('/sign-in', { state: { from: '/cv-review' } });
      return;
    }

    const result = await submitCVForReview({
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
      cvFile: file
    });

    if (result.success) {
      form.reset();
      setFile(null);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number (Optional)</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+44 123 456 7890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cvFile"
          render={({ field: { onChange, value, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>Upload Your CV (PDF or Word)</FormLabel>
              <FormControl>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-cs-navy hover:text-cs-navy/80">
                        <span>Upload a file</span>
                        <Input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => {
                            handleFileChange(e);
                          }}
                          {...fieldProps}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF or Word up to 10MB</p>
                    {file && (
                      <p className="text-sm text-cs-navy font-medium mt-2">
                        {file.name}
                      </p>
                    )}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Comments (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your career goals or specific areas you'd like feedback on..."
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Button 
            type="submit" 
            className="w-full bg-cs-navy hover:bg-cs-navy/90" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                Submitting...
              </>
            ) : (
              "Submit for Free Review"
            )}
          </Button>
          <p className="text-sm text-cs-gray mt-3 text-center">
            By submitting, you agree to our <a href="/privacy-policy" className="text-cs-navy hover:underline">Privacy Policy</a> and <a href="/terms-of-service" className="text-cs-navy hover:underline">Terms of Service</a>.
          </p>
        </div>
      </form>
    </Form>
  );
};

export default CVUploadForm;
