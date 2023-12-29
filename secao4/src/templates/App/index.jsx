import './style.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/posts';
import { CounterProvider } from '../../contexts/CounterProvider';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
