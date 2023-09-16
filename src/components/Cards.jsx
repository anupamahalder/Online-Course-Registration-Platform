import PropTypes from 'prop-types';
import Card from "./Card";
const Cards = ({cards}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

//Added proptypes
Cards.propTypes ={
    card: PropTypes.array.isRequired
}

export default Cards;