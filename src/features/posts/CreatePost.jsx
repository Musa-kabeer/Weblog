import { useForm } from 'react-hook-form';
import Heading from '../../ui/Heading';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import FileInput from '../../ui/FileInput';
import Select from '../../ui/Select';
import TextArea from '../../ui/TextArea';
import Option from '../../ui/Option';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import useCreatePost from './useCreatePost';

function CreatePost() {
  const { isCreating, createPost } = useCreatePost();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    createPost(
      {
        ...data,
        image: data.image[0],
      },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading>Add New Post</Heading>

      <FormRow label="Title:" error={errors?.title?.message}>
        <Input
          type="text"
          id="title"
          disabled={isCreating}
          {...register('title', {
            required: 'Title is field required! 📛',
          })}
        />
      </FormRow>

      <FormRow label="Image:" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          disabled={isCreating}
          {...register('image', {
            required: 'Image field required! 📛',
          })}
        />
      </FormRow>

      <FormRow label="Post Category:">
        <Select
          id="type"
          disabled={isCreating}
          {...register('type', {
            required: 'Select field required! 📛',
          })}
        >
          <Option value="AI">AI</Option>
          <Option value="WEB DEVELOPMENT">Web Developments</Option>
        </Select>
      </FormRow>

      <FormRow label="Content:" error={errors?.content?.message}>
        <TextArea
          id="content"
          rows="2"
          disabled={isCreating}
          {...register('content', {
            required: 'Content field required! 📛',

            min: {
              value: 200,
              message: "Content can't below 200 in length 📛",
            },

            max: {
              value: 1000,
              message: "Content can't exceed 1000 in length 📛",
            },
          })}
        ></TextArea>
      </FormRow>

      <Button disabled={isCreating}>Add Post</Button>
    </Form>
  );
}
export default CreatePost;
