<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
=======
import CartNavbar from "./components/CartNavbar";
import Login from "./components/Login"; 
import Cart from "./components/Cart";
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
    <div >
      {/* <Login />
      <CartNavbar /> */}
      <Cart />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
