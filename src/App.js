
import './App.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post'
//import '../node_modules/font-awesome/css/font-awesome.min.css'; 
function App() {
  return (
    <div className="App">
      <Header/>
      <hr/>
      <Post></Post>
    </div>
  );
}

export default App;
