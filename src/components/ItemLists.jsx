import ItemList from './ItemList';
import propTypes from 'prop-types';

const ItemLists = ({ items, deleteBtnClick, doneBtnClick }) => {
  return (
    <ul className="list-group">
      {
        items.length === 0 ? <li className="list-group-item text-center"><h5>No items</h5></li>
        : 
        items.map(item => (
        <ItemList
          key={item.id}
          item={item}
          deleteBtnClick={deleteBtnClick}
          doneBtnClick={doneBtnClick}
        />
      ))}
    </ul>
  );
};

ItemLists.propTypes = {
  items: propTypes.array.isRequired,
  deleteBtnClick: propTypes.func.isRequired,
  doneBtnClick: propTypes.func.isRequired,
};

export default ItemLists;