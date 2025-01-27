import './Components/Header'
import Main from './Components/Main'
import Header from './Components/Header';
import Footer from './Components/Footer'
import WelcomeMessage from './WelcomeMessage'
import Greetings from './Components/Greetings';
import ProductInfo from './Components/ProductInfo';
function App() {

  
  return (
    <div className="App">
      <Greetings/>
      {/* <Header/>
      <Main/>
      <Footer/> */}
      {/* <WelcomeMessage/> */}
      <ProductInfo/>
    </div>
  );
}

export default App;