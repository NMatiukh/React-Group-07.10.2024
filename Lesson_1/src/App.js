import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Info from './components/Info';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is my header</p>
      </header>
      <Button />
      <Info />
      <UserList list={['Ann', 'Bett', 'Cate', 'Dory']} />
    </div>
  );
}

export default App;
