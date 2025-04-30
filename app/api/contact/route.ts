import { NextResponse } from 'next/server';
import { submitContactForm } from '../../../lib/supabase/client';
import { sendContactEmail } from '../../../lib/email/resend';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Input validation
    if (!body.firstName || !body.lastName || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Submit form data to Supabase
    await submitContactForm(body);
    
    // Send email to appropriate department
    if (process.env.RESEND_API_KEY) {
      try {
        await sendContactEmail(body);
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // Continue execution - we still want to return success if Supabase saved the data
        // The data is safely stored in the database even if email fails
      }
    }
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit form' },
      { status: 500 }
    );
  }
}
