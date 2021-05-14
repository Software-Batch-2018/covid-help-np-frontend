import "./App.css";
import Dashboard from "./components/Dashboard";
import "./components/Header";
import Header from "./components/Header";
import ContentContainer from "./components/Content";
import Wrapper from "./containers/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <div className="home-container">
          <Dashboard />
          <ContentContainer />
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
