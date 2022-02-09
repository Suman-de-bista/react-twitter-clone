import './App.css';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Trending from './components/trending';

function App() {
  return (
    <div className="twitter">
      <Sidebar />
      <Content />
      <Trending />
    </div>
  );
}

export default App;
