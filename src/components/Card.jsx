import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import PropTypes from 'prop-types';
const Card = ({card}) => {
    const {image,course_name,credit,price,course_details}=card;
    return (
        <div className='w-70 p-4 m-4 bg-white rounded-xl '>
            <img className="w-64 h-40" src={image} alt="course image" />
            <h1 className="text-xl font-bold py-3">{course_name}</h1>
            <p className="text-gray-500 text-sm pb-3">{course_details}</p>
            <div className="flex justify-between py-2 text-gray-500 text-sm">
                <div className="flex gap-1">
                    <FiDollarSign className="text-black"></FiDollarSign>
                    <p className="-mt-1">Price: {price}</p>
                </div>
                <div className="flex gap-1">
                    <BsBook className="text-black"></BsBook>
                    <p className="-mt-1">Credit Hour: {credit}</p>
                </div>
            </div>
            <button className="bg-blue-400 rounded-2xl p-2 w-full">Select</button>
        </div>
    );
};

//Added proptypes
Card.propTypes ={
    card: PropTypes.object.isRequired,
}

export default Card;