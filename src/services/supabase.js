import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ziufmpsamcffpiocifeb.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppdWZtcHNhbWNmZnBpb2NpZmViIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0OTU0ODYsImV4cCI6MjAwNzA3MTQ4Nn0.RcYsKdYEQWgLgdwKwB4Cy-o7xgAQzSW-j2nDe5gddWI';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
