import "./App.css";
import Dashboard from "./components/Dashboard";
import "./components/Header";
import Header from "./components/Header";
import ContentContainer from "./containers/ContentContainer";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="home-container">
        <Dashboard />
        <ContentContainer />
      </div>
    </div>
  );
}

export default App;