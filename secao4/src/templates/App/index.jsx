import './style.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/posts';

function App() {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  );
}

export default App;
