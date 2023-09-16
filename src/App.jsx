import Header from "./components/Header";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
function App() {
  //Declare a state
  const [cards, setCards] = useState([]);
  //Declare a state to store selected course name 
  const [courseNames, setCourseNames] = useState([]); 
  //Declare a state to store the total credit hour
  const [creditHours, setCreditHours] = useState(0.0);
  //Declare a state to store the remaining hour
  const [remainingHours, setRemainingHours] = useState(20);
  //Declare a state to store the total prices
  const [prices, setPrices] = useState(0);

  //Fetch data
  useEffect(()=>{
      fetch('../../public/course_data.json')
      .then(res => res.json())
      .then(data => setCards(data));
  },[]);

  //Handle select button
  const handleSelectBtn = (data)=>{
    //seting values to remaining credit hours
    setRemainingHours(remainingHours - data.credit);
    //setting values for credit hours
    setCreditHours(creditHours + parseFloat(data.credit));
    //setting values for prices
    let newPrice = parseFloat(prices) + parseFloat(data.price);
    let totalPrice = parseFloat(newPrice).toFixed(2);
    setPrices(totalPrice);

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
          <Cart courseNames={courseNames} creditHours={creditHours} prices={prices} remainingHours={remainingHours} ></Cart>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
