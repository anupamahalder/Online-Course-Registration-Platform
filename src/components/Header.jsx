import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";
const Header = () => {

    //Declare a state
    const [card, setCard] = useState([]);
    console.log(card);
    //Fetch data
    useEffect(()=>{
        fetch('../../public/course_data.json')
        .then(res => res.json())
        .then(data => setCard(data));
    },[]);
    return (
        <div>
            <h1 className="5xl max-auto p-5">Course Registration</h1>
            <Card></Card>
        </div>
    );
};

export default Header;