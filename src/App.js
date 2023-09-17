//Import Area
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';
import Section from './components/Section';

//Function Area
function App() {
  return (
    <>
      <Header/>
      <main>
        <Aside/>
        <Section/>
      </main>
      <Footer/>
    </>
  );
}

//Export Area
export default App;
