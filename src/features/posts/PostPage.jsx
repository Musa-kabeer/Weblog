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
import {
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import { MdOutlineDateRange } from 'react-icons/md';
import usePost from './usePost';
import Image from '../../ui/Image';
import PostHeader from '../../ui/PostHeader';
import PostParagraph from '../../ui/PostParagraph';
import PostType from '../../ui/PostType';
import Spinner from '../../ui/Spinner';

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
  font-size: 11px;
`;

const StyledIcons = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

function PostPage() {
  const { id } = useParams();
  const { isLoading, post } = usePost(id);

  if (isLoading) return <Spinner />;

  const {
    content,
    created_at,
    id: postId,
    image,
    title,
    type,
  } = post;

  const url = `weblog-v1.vercel.app/post/${postId}`;

  return (
    <StyledPost>
      <Image src={image} alt={title} />

      <PostType type="lg">{type}</PostType>

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
        <FacebookShareButton url={url}>
          <FacebookIcon
            size={40}
            round={true}
            iconFillColor="#111827"
          />
        </FacebookShareButton>

        <Link>
          <TwitterShareButton url={url}>
            <TwitterIcon
              size={40}
              round={true}
              iconFillColor="#111827"
            />
          </TwitterShareButton>
        </Link>

        <Link>
          <LinkedinShareButton url={url}>
            <LinkedinIcon
              size={40}
              round={true}
              iconFillColor="#111827"
            />
          </LinkedinShareButton>
        </Link>

        <Link>
          <WhatsappShareButton url={url}>
            <WhatsappIcon
              size={40}
              round={true}
              iconFillColor="#111827"
            />
          </WhatsappShareButton>
        </Link>
      </StyledIcons>
    </StyledPost>
  );
}

export default PostPage;
