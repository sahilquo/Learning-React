import './App.css';
import Navbar from './Navbar';
import Home from "./Home";

function App() {
  const title = 'Welcome to the new Blog';
  const likes = 50;
  //const person = { name: 'Sahil', age: 27 };
  const value = true;
  const link = 'http://www.google.com';

  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{value}</p>

        <p>{Math.random()}</p>
        <a href={link}>Google Site Link</a>
      </div>
    </div>
  );
}

export default App;
