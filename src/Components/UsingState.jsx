import React from 'react'
import { useState} from 'react';

const UsingState = () => {

  // const [count, setCount] = useState(0);

  // const increment = ()=> setCount(count+1);
  // const decrement = ()=> setCount(count-1);


  const [name, setName] = useState(['Vinayaka', 'Vamsi', 'Kiran', 'Voleti']);
  const Addnew =()=> setName([ ...name, "Kanna"]);
  const RemoveSurname =()=> setName(name.filter((name)=>name !== "Voleti"));
  const update =()=>setName(name.map((n)=>n==="Vinayaka"? "Vinayaka Voleti":n));

  const [movie, setMovie] = useState({
    title: "Sita Raman",
    rate: 8
  });

  const handelOnClick = ()=>{
    // {
      //   const updateRating ={
        //     ...movie,
        //     rate: 10
        //   }
        //   setMovie(updateRating);
        // }
      
      setMovie({...movie, rate: 10});
  }

  return (
    <section>
        {/* <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button> */}
        {/* {name.map((name)=>(
          <li key={Math.random()}>{name}</li>
        ))}

        <button onClick={Addnew}>AddNew</button>
        <button onClick={RemoveSurname}>RemoveSurname</button>
        <button onClick={update}>Update</button> */}

        {/* <h1>{movie.title}</h1>
        <p>Rating- {movie.rate}</p>
        <button onClick={handelOnClick}>Update Rating</button> */}



    </section>
    )
}

export default UsingState