import './App.css';
import Header from './components/layout/Header';
import MessageContainer from './components/layout/MessageContainer';
import SideBar from './components/layout/SideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <MessageContainer />
      <SideBar />
    </div>
  );
}

export default App;
