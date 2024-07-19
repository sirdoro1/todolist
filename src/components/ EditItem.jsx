import propTypes from 'prop-types'

const EditItem = ({addItemClick}) => {
  return (
    <div className="input-group mb-3">
        <input type="text"  className="form-control form-control-lg" id="task" placeholder='Add a new task' />
        <div className="input-group-append">
        <button className="btn btn-primary btn-lg" onClick={()=> addItemClick()} type="button">Add Task</button>
        </div>
    </div>
  )
}

AddItem.propTypes = {
    addItemClick : propTypes.func.isRequired
}

export default AddItem