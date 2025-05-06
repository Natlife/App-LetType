import logo from './logo.svg';
import './App.scss';
import MyComponent from './TestComponent/myComponent';
const App = () => {
  return (
    <div className="App">

      <header className="App-header">
        {/* testComponent */}
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
