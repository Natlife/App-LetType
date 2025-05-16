import './App.scss';
import '../styles/textComponent.scss';

import logo from "../assets/images/logo.png"
import TypingComponent from '../components/typingComponent';
import SettingComponent from '../components/settingComponent';

import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TypingComponent />
        {/* <SettingComponent /> */}
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
