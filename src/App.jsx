import { useState } from 'react';

import Header from './components/Header';
import ItemLists from './components/ItemLists';
import AddItem from './components/AddItem';

function App() {

  const [items,setItems] = useState([]);

  const addItemClick = () => {
    let task = document.getElementById('task').value;
    if(task === '') return;
    let newItem = {id: items.length + 1, name: task, status: false};
    setItems([...items, newItem]);
    document.getElementById('task').value = '';
  }

  const deleteBtnClick  = (id) => {
    let selectedItem = {id: id};
    setItems(items.filter(item => item.id !== selectedItem.id));
  }

  const doneBtnClick = (id) => {
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
            <Header header='To-Do List' />
          </div>
          <div className="col-md-12">
            <hr className="border border-muted opacity-50"></hr>
          </div>
          <div className="col-md-12">
            <AddItem addItemClick={addItemClick} />
          </div>
          <div className="col-md-12">
            <hr className="border border-muted opacity-50"></hr>
          </div>
          <div className="col-md-12">
            <ul className="list-group">
                <ItemLists items={items} doneBtnClick={doneBtnClick} deleteBtnClick={deleteBtnClick} />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
