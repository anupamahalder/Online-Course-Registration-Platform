
import PropTypes from 'prop-types';
const Card = ({card}) => {
    const {image,course_name,credit,price,course_details}=card;
    return (
        <div className='w-80 p-4 m-4 bg-white rounded-xl'>
            <img src={image} alt="course image" />
            <h1 className='text-2xl font-bold'>{course_name}</h1>
            <p className='text-gray-500'>{course_details}</p>
            <div className='text-gray-500 flex flex-1'>
                <p><img src="../images/dollar-sign.png"></img>Price: {price}</p>
                <p><img src="../images/Frame.png"></img>Credit Hour: {credit}</p>
            </div>
        </div>
    );
};

//Added proptypes
Card.propTypes ={
    card: PropTypes.object,
}

export default Card;