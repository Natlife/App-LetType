import './App.scss';
import '../styles/textComponent.scss';


import TypingComponent from '../components/typingComponent';
import SettingComponent from '../components/settingComponent';
import AboutComponent from '../components/aboutComponent';

import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className="App">

      <header className="App-header">

        <TypingComponent />
        {/* <SettingComponent /> */}
        {/* <AboutComponent /> */}
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
