import NavBar from './components/Navbar';
import Header from './components/Header';
import MainSection from './components/MainSection';
import RealatedDeals from './components/RelatedDeal';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <MainSection/>
      <RealatedDeals/>
      <Footer/>
    </div>
  );
}

export default App;
