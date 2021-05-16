import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentContainer from "./containers/ContentContainer";

function App() {
  return (
    <div className="App">
      <Header/>
      <p className="info">We Dont Own Any of The Content Posted Here. This is a Collection of Posts Found on Social Medias<br></br>&#10071;Please Report us at <a href="mailto:ecovidnpinfo22@gmail.com">covidnpinfo22@gmail.com</a> if any Frauds Found&#10071;</p>
      <div className="home-container">
        <ContentContainer />
      </div>
      <Footer/>
    </div>
  );
}

export default App;