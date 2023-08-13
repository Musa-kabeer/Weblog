import supabase, { supabaseUrl } from './supabase';

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

// CREATE POST
export async function createPostFn(newPost) {
  const imageName = `${Math.random()}-${
    newPost.image.name
  }`.replaceAll('/', '');

  const imagePath = `${supabaseUrl}/storage/v1/object/public/posts-image/${imageName}`;

  const { data, error } = await supabase
    .from('Posts')
    .insert([{ ...newPost, image: imagePath }])
    .select()
    .single();

  if (error) {
    throw new Error('Post could not be created 😢');
  }

  // Uploading image
  const { error: storageError } = await supabase.storage
    .from('posts-image')
    .upload(imageName, newPost.image, {
      cacheControl: '3600',
      upsert: false,
    });

  // 3. Delete the post if there was an error uploading image
  if (storageError) {
    await supabase.from('Posts').delete().eq('id', data.id);

    throw new Error(
      'Post image could not be uploaded and the post was not created 😢'
    );
  }

  return data;
}
