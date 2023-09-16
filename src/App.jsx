import Header from "./components/Header";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
function App() {
  //Declare a state
  const [cards, setCards] = useState([]);
  //Fetch data
  useEffect(()=>{
      fetch('../../public/course_data.json')
      .then(res => res.json())
      .then(data => setCards(data));
  },[]);
  return (
    <>
    {/* Header section  */}
    <div className="bg-gray-100">
      <Header></Header>
      {/* body seciton of cards  */}
      <div>
        <div className="w-3/4">
          <Cards key={cards} cards={cards}></Cards>
        </div>
        <div className="w-1/4">
          <Cart></Cart>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
