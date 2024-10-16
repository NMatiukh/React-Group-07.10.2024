import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import SeaBattle from "./components/SeaBattle/SeaBattle";
import Test from "./components/Test/Test";
import UserList from "./components/UserList/UserList";

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <UserList />
      <SeaBattle />
      <Test />
    </div>
  );
}

export default App;
