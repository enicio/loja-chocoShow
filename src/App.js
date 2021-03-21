import Input from './components/input'
import './App.css';
import Card from './components/cards';
import Header from './components/header';
import Footer from './components/footer'
import './components/header.css'
import FilterSection from './components/fillterSection'

function App() {
  return (
    <>
    <header className='header'>
      <Header/>
      <Input />
    </header>
      <Card />
      <FilterSection />
    <Footer />
    </>
  );
}

export default App;
