import supabase from './supabase';

// GET ALL POSTS
export async function getPosts() {
  const { data, error } = await supabase.from('Posts').select('*');

  if (error) {
    throw new Error('Cannot find posts');
  }

  return data;
}

export async function getPost(id) {
  let { data, error } = await supabase
    .from('Posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error('Cannot find post');
  }

  return data;
}
