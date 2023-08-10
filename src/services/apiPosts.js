import supabase from './supabase';

// GET ALL POSTS
export const getPosts = async () => {
  const { data, error } = await supabase.from('Posts').select('*');

  if (error) {
    throw new Error('Cannot find posts');
  }

  return data;
};

export const getPost = async (id) => {
  let { data, error } = await supabase
    .from('Posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error('Cannot find post');
  }

  return data;
};
