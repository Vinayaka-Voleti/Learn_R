import './App.css';
import './Components/Header'
import Header from './Components/Header';
function App() {

  const Greetings = () =>{
    const name = ['Vinayaka', 'Vamsi', 'Kiran', 'Voleti'];
    let index = Math.floor(Math.random()*4);
    return name[index];
  }
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
