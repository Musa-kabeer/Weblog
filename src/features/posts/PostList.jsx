/* eslint-disable react/prop-types */
import { formatDistance } from 'date-fns';
import { parseISO } from 'date-fns';
import { styled } from 'styled-components';
import { formatDate } from '../../utils/formatDate';
import Image from '../../ui/Image';
import PostType from '../../ui/PostType';
import PostHeader from '../../ui/PostHeader';
import PostParagraph from '../../ui/PostParagraph';
import { NavLink } from 'react-router-dom';

const StyledPost = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 400px;
  border: 1px solid var(--color-grey-200);
  padding: 5px;
  border-radius: 7px;
  color: var(--color-grey-800);
  box-shadow: 3px 4px 15px var(--color-grey-300);
`;

const PostImage = styled.div`
  width: 100%;
  height: 180px;
`;

const StyledContent = styled.div`
  padding: 4px 0;
`;

const PostTime = styled.time`
  font-size: 12px;
  font-weight: 500;
  padding: 8px 0;
`;

const PostUserInfo = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const PostUserImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 50%;
  background: var(--color-grey-800);
`;

function Post({ post }) {
  const { image, title, type, id, created_at, content } = post;

  return (
    <StyledPost>
      <PostImage>
        <Image src={image} alt={title} />
      </PostImage>

      <StyledContent>
        <PostType>{type.toUpperCase()}</PostType>

        <PostHeader type="sm">
          <NavLink to={`/post/${id}`}>{post.title}</NavLink>
        </PostHeader>

        <PostTime>
          {formatDate(created_at)}
          {', '}
          {formatDistance(parseISO(created_at), Date.now(), [
            { includeSeconds: true },
          ])}
        </PostTime>
        <PostParagraph>{content.split('.')[0]}.</PostParagraph>
      </StyledContent>

      <PostUserInfo>
        <PostUserImage src="/public/user.png" />
        <h4>Musa Abdulkabir</h4>
      </PostUserInfo>
    </StyledPost>
  );
}

export default Post;
