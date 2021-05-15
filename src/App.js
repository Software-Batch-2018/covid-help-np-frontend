import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentContainer from "./containers/ContentContainer";

function App() {
  return (
    <div className="App">
      <Header/>
      <p className="info">We Dont Own Any of The Content Posted Here. This is a Collection of Posts Found on Social Medias<br></br>&#10071;Please Report us at ..... if any Frauds Found&#10071;</p>
      <div className="home-container">
        <Dashboard />
        <ContentContainer />
      </div>
      <Footer/>
    </div>
  );
}

export default App;