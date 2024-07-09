import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

import propTypes from 'prop-types';

const ItemLists = ({items, deleteBtnClick, doneBtnClick}) => {

  return (
    <ul className="list-group">
        {items.map((item) =>{
            return (
                    <li className="list-group-item" key={item.id}>
                        <div className="d-flex justify-content-between align-items-center w-100">
                        <span className="">{item.name}</span>
                        <div className="d-flex align-items-center">
                            <div className="vr me-2 ms-2"></div>
                            <button className="btn btn-xs btn-danger" onClick={()=> deleteBtnClick(item.id)}>
                            <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <div className="vr me-2 ms-2"></div>
                            <button className={`btn btn-xs ${item.status? 'btn-warning disabled':'btn-success'}`} onClick={() => doneBtnClick(item.id)}>
                            <FontAwesomeIcon icon={faCheck} />
                            </button>
                        </div>
                        </div>
                    </li>
                )
            })}
    </ul>
  )
}

ItemLists.propTypes = {
    items: propTypes.array.isRequired,
    deleteBtnClick: propTypes.func.isRequired,
    doneBtnClick: propTypes.func.isRequired
}


export default ItemLists