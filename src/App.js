
import './style/index.scss'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Container from './container/Container.jsx';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Container/>
    </div>
  );
}

export default App;
