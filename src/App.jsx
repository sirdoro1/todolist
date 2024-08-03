import { useState } from 'react';

import Header from './components/Header';
import ItemLists from './components/ItemLists';
import AddItem from './components/AddItem';

function App() {

  const [items,setItems] = useState([]);
  let [item, setItem] = useState(null);

  const handleValueChange = (e) => {
    setItem((previous)=>{
      return {
      id : previous?.id || undefined,
      name: e.target.value,
      status: false
    }});
  }

  const addItemClick = () => {
    if(item === null || item.name === ''){
        return;
    }


    console.log(items);
    // return;
    
    if(item.id){
      const otherItems = items.filter((i)=> i.id !== item.id);
      setItems([...otherItems, item].sort((a,b)=> a.id - b.id));
      setItem(null);
      return;
    }

    let newItemId;
    if(items.length === 0){
      newItemId = 1;
    } else {
      newItemId = Math.max(...items.map(item => item.id)) + 1;
    }

    let newItem = {
      id: newItemId,
      name: item.name,
      status: false,
    }
    setItems([...items, newItem].sort((a,b) => a.id - b.id));
    setItem(null);
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

  const editBtnClick = (item) =>{
    setItem(item);
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
              <AddItem value={item} onHandleChange={handleValueChange} onHandleAddItem={addItemClick} />
          </div>
          <div className="col-md-12">
            <hr className="border border-muted opacity-50"></hr>
          </div>
          <div className="col-md-12">
            <ul className="list-group">
                <ItemLists items={items} doneBtnClick={doneBtnClick} deleteBtnClick={deleteBtnClick} editBtnClick={editBtnClick} />
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
