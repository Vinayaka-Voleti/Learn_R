// import './Components/Header'
// import ProductList from './Components/ProductList';
// import Main from './Components/Main'
// import Header from './Components/Header';
// import Footer from './Components/Footer'
// import WelcomeMessage from './WelcomeMessage'
// import Greetings from './Components/Greetings';
// import ProductInfo from './Components/ProductInfo';
// import UserList from './Components/UserList';
// import User from './Components/User'
// import Person from './Components/Person'
// import Product from './Components/Product'
// import Weather from './Components/Weather';
// import Passowrd from './Components/Password'
import UserStauts from './Components/UserStatus';
// import { FaBeer } from "react-icons/fa";
// import StyleCard from "./Components/StyleCard";

// import Weather from './Components/Weather';
function App() {

  return (
    <div className="App">
      {/* <Greetings morn={CurrentD.getHours()<12} noon="afternoon"/> */}
      {/* <Header/>
      <Main/>
    <Footer/> */}
      {/* <WelcomeMessage/> */}
      {/* <ProductInfo/> */}
      {/* <UserList/> */}
      {/* <ProductList/> */}
      {/* <User 
        img ="https://avatars.githubusercontent.com/u/148869371?s=400&v=4"
        name= "Vinayaka Voleti"
        age ={19}
        isMarried ={false}
        hobbies ={["coding", "chess", "sleeping"]}
        /> */}
        {/* <Person n = "Vinayaka Voleti" a = {20}/> */}
        {/* <Product names= "Pen" price= {10}/> */}
        {/* <Weather temp = {23}/> */}
        {/* <Passowrd isValid={false}/> */}
        {/* <Weather temp={26}/> */}
        <UserStauts loggedIn={true} isAdmin={true}/>
        {/* <StyleCard/> */}
        {/* <FaBeer style={{alignItems:"center",backgroundColor:"red"}}/> */}


    </div>
  );
}

export default App;