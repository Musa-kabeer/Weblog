import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPostFn } from '../../services/apiPosts';
import { useNavigate } from 'react-router-dom';

function useCreatePost() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate: createPost } = useMutation({
    mutationFn: createPostFn,
    onSuccess: () => {
      navigate('/');
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  return { isCreating, createPost };
}

export default useCreatePost;
