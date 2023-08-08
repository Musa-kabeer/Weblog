import supabase from './supabase';

// GET ALL POSTS
export const getPosts = async () => {
  const { data, error } = await supabase.from('Posts').select('*');

  if (error) {
    console.log(error.message);
    throw new Error('Cannot find posts');
  }

  return data;
};
