import { createClient } from '@supabase/supabase-js';

// 创建一个Supabase客户端
export const createSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  
  return createClient(supabaseUrl, supabaseKey);
};

// 创建带有类型安全的客户端实例
const supabase = createSupabaseClient();

export default supabase;
