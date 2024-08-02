import propTypes from 'prop-types'

const AddItem = ({onHandleChange,onHandleAddItem,value}) => {
  return (
    <div className="input-group mb-3">
        <input type="text"  className="form-control form-control-lg" value={value?.name || ''}  onChange={onHandleChange}  id="task" placeholder='Add a new task' />
        <div className="input-group-append">
        <button className="btn btn-primary btn-lg" onClick={onHandleAddItem} type="button">Add Task</button>
        </div>
    </div>
  )
}

AddItem.propTypes = {
    onHandleAddItem : propTypes.func.isRequired,
    onHandleChange : propTypes.func.isRequired,
    value: propTypes.object
}

export default AddItem