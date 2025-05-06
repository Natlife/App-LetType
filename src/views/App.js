import './App.scss';
import logo from "../assets/images/logo.png"
import MyComponent from './TestComponent/myComponent';
const App = () => {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ scale: 0.7 }} />
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
