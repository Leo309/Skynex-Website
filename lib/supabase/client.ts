import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Contact form specific functions
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  createdAt?: string;
}

export async function submitContactForm(formData: ContactFormData) {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        created_at: new Date().toISOString(),
      },
    ]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
