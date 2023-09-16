import PropTypes from 'prop-types';
const Cart = ({courseNames}) => {
    console.log(courseNames);
    return (
        <div className='w-70 p-4 mx-2 mt-6 bg-white rounded-xl '>
            <h1 className="text-xl border-b-2 pb-4 text-blue-700 font-bold">Credit Hour Remaining <span>20</span> hr</h1>
            <div className="border-b-2 py-4">
                <h1 className="text-xl text-black font-bold py-1">Course Name</h1>
                {/* Showing selected course names  */}
                {
                    // Map through the courseName array 
                    courseNames.map((courseName,index) => <li className='list-none text-gray-500' key={courseName.id}>{index+1}. {courseName.course_name}</li>)
                }
            </div>
            <h1 className="border-b-2 pb-4 pt-2 text-gray-600 font-semibold"> Total Credit Hour : <span>0</span> hr</h1>
            <h1 className="pb-4 pt-2 text-gray-600 font-semibold">Total Price : <span>0</span> USD</h1>
        </div>
    );
};
//Adding proptypes
Cart.propTypes = {
    courseNames: PropTypes.array.isRequired,
}

export default Cart;