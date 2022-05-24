import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderidPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  
};

export default PostsList;
