import Card from '../components/cards';
import Header from '../components/header';
import Footer from '../components/footer'
import Cart from '../components/cart'
import '../components/header.css'


function MainPage() {
  return (
    <>
    <header className='header'>
      <Header/>
      <Cart />
    </header>
      <Card />
    <Footer />
    </>
  );
}

export default MainPage;