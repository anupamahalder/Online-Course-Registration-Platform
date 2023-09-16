import Header from "./components/Header";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
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
        <div>
          <Cards key={cards} cards={cards}></Cards>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
