import Header from "./components/Header";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
function App() {
  //Declare a state
  const [cards, setCards] = useState([]);
  //Declare a state to store selected course name 
  const [courseNames, setCourseNames] = useState([]); 

  //Fetch data
  useEffect(()=>{
      fetch('../../public/course_data.json')
      .then(res => res.json())
      .then(data => setCards(data));
  },[]);

  //Handle select button
  const handleSelectBtn = (data)=>{
    if(!courseNames.includes(data)){
      const newCourseName = [...courseNames,data];
      setCourseNames(newCourseName);
    }
  };
  console.log(courseNames);
  return (
    <>
    {/* Header section  */}
    <div className="bg-gray-100">
      <Header></Header>
      {/* body seciton of cards  */}
      <div className="flex gap-2">
        <div className="w-3/4 pb-16">
          <Cards key={cards} cards={cards} handleSelectBtn={handleSelectBtn}></Cards>
        </div>
        <div className="w-1/4">
          <Cart courseNames={courseNames}></Cart>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
