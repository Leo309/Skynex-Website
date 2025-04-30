import { Resend } from 'resend';

// Email mapping for different subject types
const EMAIL_DESTINATIONS = {
  general: 'hello@skynexdigital.com',
  feedback: 'feedback@skynexdigital.com',
  support: 'support@skynexdigital.com',
  sales: 'sales@skynexdigital.com',
};

type SubjectType = keyof typeof EMAIL_DESTINATIONS;

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  subject: SubjectType;
  message: string;
}

export async function sendContactEmail(data: EmailData) {
  const { firstName, lastName, email, company, subject, message } = data;
  
  // Determine recipient email based on subject
  const toEmail = EMAIL_DESTINATIONS[subject];
  
  if (!toEmail) {
    throw new Error('Invalid subject type');
  }
  
  // Format the email
  const emailContent = {
    from: 'contact@skynexdigital.com', // Use your verified sender
    to: toEmail,
    subject: `Contact Form: ${subject.charAt(0).toUpperCase() + subject.slice(1)} Inquiry`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Category:</strong> ${subject}</p>
        <p><strong>From:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
          ${message.replace(/\n/g, '<br />')}
        </div>
        <hr style="margin-top: 20px; margin-bottom: 20px; border: 0; border-top: 1px solid #eee;" />
        <p style="font-size: 12px; color: #777;">
          This email was sent via the contact form on skynexdigital.com
        </p>
      </div>
    `,
  };

  try {
    const { data: emailResponse, error } = await resend.emails.send(emailContent);
    
    if (error) {
      throw new Error(error.message);
    }
    
    return { success: true, id: emailResponse?.id };
  } catch (error: any) {
    console.error('Error sending email with Resend:', error);
    throw new Error(error.message || 'Failed to send email');
  }
}
