import './App.css';
import Header from './components/layout/Header';
import MessageContainer from './components/layout/MessageContainer';
import SideBar from './components/layout/SideBar';
import MainContainer from './components/layout/MainContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContainer/>

    </div>

    // <ComposeMessage />
  );
}

export default App;
