import './App.scss';
import '../styles/textComponent.scss';

import HomeComponent from '../components/homeComponent';
import TypingComponent from '../components/typingComponent';
import SettingComponent from '../components/settingComponent';
import AboutComponent from '../components/aboutComponent';

import { ToastContainer } from 'react-toastify';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <Router>
      <div className="App">

        <header className="App-header">

          {/* <TypingComponent /> */}
          {/* <SettingComponent /> */}
          {/* <AboutComponent /> */}
          <HomeComponent />
          <Routes>
            <Route path="/start"
              element={<TypingComponent />} />
            <Route path="/about"
              element={<AboutComponent />} />
          </Routes>
        </header>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
