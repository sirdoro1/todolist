import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faEdit} from '@fortawesome/free-solid-svg-icons';

import propTypes from 'prop-types';

const ItemList = ({item, deleteBtnClick, doneBtnClick}) => {
    return (
        <li className="list-group-item" key={item.id}>
            <div className="d-flex justify-content-between align-items-center w-100">
                <span className="">{item.name}</span>
                <div className="d-flex align-items-center">
                    <div className="vr me-2 ms-2"></div>
                    <button className="btn btn-xs btn-secondary">
                        <FontAwesomeIcon icon={faEdit}>
                    </button>
                    <div className="vr me-2 ms-2"></div>
                    <button className="btn btn-xs btn-danger" onClick={() => deleteBtnClick(item.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <div className="vr me-2 ms-2"></div>
                    <button className={`btn btn-xs ${item.status ? 'btn-warning disabled' : 'btn-success'}`} onClick={() => doneBtnClick(item.id)}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    
                </div>
            </div>
        </li>
    )
}

ItemList.propTypes = {
    item: propTypes.shape({
        id: propTypes.number.isRequired,
        name: propTypes.string.isRequired,
        status: propTypes.bool.isRequired
    }).isRequired,
    deleteBtnClick: propTypes.func.isRequired,
    doneBtnClick: propTypes.func.isRequired
}

export default ItemList

