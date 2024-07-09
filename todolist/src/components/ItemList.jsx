

import {PropTypes} from 'prop-types';

export const ItemList = ({item}) => {
  return (
        <li className="list-group-item" key={item.id}>
            <div className="d-flex justify-content-between align-items-center w-100">
            <span className="">{item.name}</span>
            <div className="d-flex align-items-center">
                <div className="vr me-2 ms-2"></div>
                <button className="btn btn-xs btn-danger">
                <FontAwesomeIcon icon={faTrash} />
                </button>
                <div className="vr me-2 ms-2"></div>
                <button className="btn btn-xs btn-success">
                <FontAwesomeIcon icon={faCheck} />
                </button>
            </div>
            </div>
        </li>
        )
}

