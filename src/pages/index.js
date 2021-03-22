import Card from '../components/cards';
import Header from '../components/header';
import Input from '../components/input'
import Footer from '../components/footer'
import '../components/header.css'
import FilterSection from '../components/fillterSection'

function MainPage() {
  return (
    <>
    <header className='header'>
      <Header/>
      <Input />
    </header>
      <FilterSection />
      <Card />
    <Footer />
    </>
  );
}

export default MainPage;