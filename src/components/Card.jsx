import { FiDollarSign } from "react-icons/fi";
import { BsBook } from "react-icons/bs";
import PropTypes from 'prop-types';
const Card = ({card}) => {
    const {image,course_name,credit,price,course_details}=card;
    return (
        <div className='w-70 p-4 ml-2 mt-6 bg-white rounded-xl '>
            <img className="w-68 h-40 mx-auto" src={image} alt="course image" />
            <div className="h-20 py-3">
                <h1 className="text-xl font-bold">{course_name}</h1>
            </div>
            <div className="h-24 mb-3 overflow-hidden">
                <p className="text-gray-500 text-sm p-2">{course_details}</p>
            </div>
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
            <button className="bg-blue-500 mt-3 font-semibold hover:bg-blue-700 rounded-2xl p-2 w-full text-white">Select</button>
        </div>
    );
};

//Added proptypes
Card.propTypes ={
    card: PropTypes.object.isRequired,
}

export default Card;