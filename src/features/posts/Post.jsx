/* eslint-disable react/prop-types */
import { formatDistance } from 'date-fns';
import { parseISO } from 'date-fns';
import { styled } from 'styled-components';
import { formatDate } from '../../utils/formatDate';

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

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px;
`;

const StyledContent = styled.div`
  padding: 4px 0;
`;

const PostType = styled.span`
  color: var(--color-brand-600);
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const PostHeader = styled.h2`
  font-size: 17px;
  font-weight: 800;
  line-height: 19px;
`;

const PostTime = styled.time`
  font-size: 12px;
  font-weight: 500;
`;

const Postparagraph = styled.p`
  font-size: 12px;
  margin: 2px 0;
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
  return (
    <StyledPost>
      <PostImage>
        <Image src={post.image} alt={post.title} />
      </PostImage>

      <StyledContent>
        <PostType>{post.type.toUpperCase()}</PostType>
        <PostHeader>{post.title}</PostHeader>
        <PostTime>
          {formatDate(post.created_at)}
          {', '}
          {formatDistance(parseISO(post.created_at), Date.now(), [
            { includeSeconds: true },
          ])}
        </PostTime>
        <Postparagraph>{post.content.split('.')[0]}</Postparagraph>
      </StyledContent>

      <PostUserInfo>
        <PostUserImage src="me.png" alt="" />
        <h4>Musa Abdulkabir</h4>
      </PostUserInfo>
    </StyledPost>
  );
}

export default Post;
