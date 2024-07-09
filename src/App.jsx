import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [items,setItems] = useState([
    {id: 1, name: 'Task 1', status: false},
    {id: 2, name: 'Task 2', status: true},
  ]);

  function handleAddItemClick(){
    let newItem = {id: items.length + 1, name: document.getElementById('task').value, status: false};
    setItems([...items, newItem]);
    document.getElementById('task').value = '';
  }

  function handleDeleteBtnClick(id){
    let selectedItem = {id: id};
    setItems(items.filter(item => item.id !== selectedItem.id));
  }

  function handleDoneBtnClick(id){
    setItems(items.map((item)=>{
      if(item.id === id){
        return {...item, status: !item.status}
      }
      return item;
    }))
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className="col-md-12">
            <h4 className="text-center mt-5 mb-1">Todo List</h4>
          </div>
          <div className="col-md-12">
            <hr className="border border-muted opacity-50"></hr>
          </div>
          <div className="col-md-12">
            <div className="input-group mb-3">
              <input type="text"  className="form-control" id="task" placeholder='Add a new task' />
              <div className="input-group-append">
                <button className="btn btn-primary" onClick={handleAddItemClick} type="button">Add Task</button>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <hr className="border border-muted opacity-50"></hr>
          </div>
          <div className="col-md-12">
            <ul className="list-group">
                {items.map((item) =>{
                    return (<li className="list-group-item" key={item.id}>
                                <div className="d-flex justify-content-between align-items-center w-100">
                                <span className="">{item.name}</span>
                                <div className="d-flex align-items-center">
                                    <div className="vr me-2 ms-2"></div>
                                    <button className="btn btn-xs btn-danger" onClick={()=> handleDeleteBtnClick(item.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                    <div className="vr me-2 ms-2"></div>
                                    <button className={`btn btn-xs ${item.status? 'btn-warning disabled':'btn-success'}`} onClick={()=>handleDoneBtnClick(item.id)}>
                                    <FontAwesomeIcon icon={faCheck} />
                                    </button>
                                </div>
                                </div>
                            </li>
                        )
                  })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
