import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Main />
      </main>
    </div>
  );
}

export default App;
