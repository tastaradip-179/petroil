import Banner from './components/Banner';
import Blog from './components/Blog';
import Client from './components/Client';
import Footer from './components/Footer';
import Header from './components/Header';
import LearnMore from './components/LearnMore';
import Member from './components/Member';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Supplier from './components/Supplier';

function App() {
  return (
    <div className="App bg-white">
      <Header/>
      <Navbar/>
      <Banner/>
      <Supplier/>
      <Service/>
      <LearnMore/>
      <Client/>
      <Blog/>
      <Member/>
      <Footer/>
    </div>
  );
}

export default App;
