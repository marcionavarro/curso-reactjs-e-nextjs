import './style.css';
import { PostsProvider } from '../../contexts/PostsProvider';
import { Posts } from '../../components/posts';
import { CounterProvider } from '../../contexts/CounterProvider';
import { Home } from './Home';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Home />
          {/* <Posts /> */}
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}

export default App;
