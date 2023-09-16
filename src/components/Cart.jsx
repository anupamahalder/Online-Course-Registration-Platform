
const Cart = () => {
    return (
        <div className='w-70 p-4 ml-2 mt-6 bg-white rounded-xl '>
            <h1 className="text-xl text-blue-700 font-bold">Credit Hour Remaining <span>20</span> hr</h1>
            <div className="flex justify-between py-2 text-gray-500 text-sm">
                <div className="flex gap-1">
                    <p className="-mt-1">Price: </p>
                </div>
                <div className="flex gap-1">
                    <p className="-mt-1">Credit Hour:</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;