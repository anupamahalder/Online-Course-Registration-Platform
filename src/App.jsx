import Header from "./components/Header";
import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  //show toast message
  const handleToastMessage = () =>{
    toast("You already fulfilled your qouta!");
  }
  const handleSameData = () =>{
    toast("You already have added this course!");
  }
  //Fetch data
  useEffect(()=>{
      fetch('../../public/course_data.json')
      .then(res => res.json())
      .then(data => setCards(data));
  },[]);

  //Handle select button
  const handleSelectBtn = (data)=>{
    if(!courseNames.includes(data)){
      //seting values to remaining credit hours
      const remainingHoursLeft = remainingHours - data.credit;
      //checking for the remaining hours should not go less than 0
      if(remainingHoursLeft>=0){
        setRemainingHours(remainingHoursLeft);
      }
      else{
        handleToastMessage();
        return;
      }
      //setting values for credit hours
      const totalCreditHours = creditHours + parseFloat(data.credit);
      //checking for the total credit hours should not go greater than 20
      if(totalCreditHours <= 20){
        setCreditHours(totalCreditHours);
      }
      else{
        handleToastMessage();
        return;
      }
      //setting values for prices
      let newPrice = parseFloat(prices) + parseFloat(data.price);
      let totalPrice = parseFloat(newPrice).toFixed(2);
      setPrices(totalPrice);

      const newCourseName = [...courseNames,data];
      setCourseNames(newCourseName);
    }
    else{
      handleSameData();
      return;
    }
  };
  console.log(courseNames);
  return (
    <>
    {/* Header section  */}
    <div className="bg-gray-100">
      <Header></Header>
      {/* body seciton of cards  */}
      <div className="md:flex md:gap-2">
        <div className="md:1/2 lg:w-3/4 pb-16 mx-auto p-2 md:p-0">
          <ToastContainer></ToastContainer>
          <Cards key={cards} cards={cards} handleSelectBtn={handleSelectBtn}></Cards>
        </div>
        <div className="pb-4 md:1/2 lg:w-1/4">
          <Cart courseNames={courseNames} creditHours={creditHours} prices={prices} remainingHours={remainingHours} ></Cart>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
