import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";

function App() {
  return (
    <div className="home">
      <Header/>
        <HeroSection/>
    </div>
  );
}

export default App;
