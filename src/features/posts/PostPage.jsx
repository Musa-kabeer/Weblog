import { Link, useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { styled } from 'styled-components';
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import { MdOutlineDateRange } from 'react-icons/md';
import usePost from './usePost';
import Image from '../../ui/Image';
import PostHeader from '../../ui/PostHeader';
import PostParagraph from '../../ui/PostParagraph';

const StyledPost = styled.div`
  margin: 2rem;
`;

function PostPage() {
  const { id } = useParams();
  const { isLoading, post, error } = usePost(id);

  if (isLoading) return <h2>Loading...</h2>;

  const {
    content,
    created_at,
    id: postId,
    image,
    title,
    type,
  } = post;

  return (
    <StyledPost>
      <Image src={image} alt={title} />

      <span>{type}</span>

      <div>
        <p>Musa Abdulkabir</p>
        <p>
          <span>
            <MdOutlineDateRange />
          </span>

          <span>{format(parseISO(created_at), 'MM/dd/yyyy')}</span>
        </p>
      </div>
      <PostHeader>{title}</PostHeader>
      <PostParagraph type="lg">{content}.</PostParagraph>

      <div>
        <Link>
          <AiOutlineFacebook />
        </Link>

        <Link>
          <AiOutlineTwitter />
        </Link>

        <Link>
          <AiOutlineInstagram />
        </Link>

        <Link>
          <AiOutlineLinkedin />
        </Link>
      </div>
    </StyledPost>
  );
}

export default PostPage;
