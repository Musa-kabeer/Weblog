import { Link, useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { styled } from 'styled-components';
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineUser,
} from 'react-icons/ai';
import { MdOutlineDateRange } from 'react-icons/md';
import usePost from './usePost';
import Image from '../../ui/Image';
import PostHeader from '../../ui/PostHeader';
import PostParagraph from '../../ui/PostParagraph';
import PostType from '../../ui/PostType';

const StyledPost = styled.div`
  margin: 2rem;
`;

const PostDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  padding: 10px 0;
`;

const PostDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

const StyledIcons = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & svg {
    font-size: 24px;
  }
`;

function PostPage() {
  const { id } = useParams();
  const { isLoading, post } = usePost(id);

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

      <PostType>{type.toUpperCase()}</PostType>

      <PostDetails>
        <PostDetail>
          <span>
            <AiOutlineUser />
          </span>
          Musa Abdulkabir
        </PostDetail>

        <PostDetail>
          <span>
            <MdOutlineDateRange />
          </span>

          {format(parseISO(created_at), 'MM/dd/yyyy')}
        </PostDetail>
      </PostDetails>

      <PostHeader type="lg">{title}</PostHeader>
      <PostParagraph type="lg">{content}.</PostParagraph>

      <StyledIcons>
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
      </StyledIcons>
    </StyledPost>
  );
}

export default PostPage;
