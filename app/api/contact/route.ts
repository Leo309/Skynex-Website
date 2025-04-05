import { NextResponse } from 'next/server';
import { submitContactForm } from '@/lib/supabase/client';

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
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit form' },
      { status: 500 }
    );
  }
}
