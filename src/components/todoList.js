import React , {Component} from 'react'
import TodoItem from './todoItems'

class TodoList extends Component{
    render(){
        const {items , clearList , handleDelete ,handleEdit} = this.props
        return(
            <div>
                <ul className="list-group my-5">

                    <h3 className="text-capitalize text-center mb-4">Todo List</h3>
                    {
                        items.map((item)=>
                            <TodoItem key={item.id} 
                            title={item.title}
                            handleDelete={()=>handleDelete(item.id)}
                            handleEdit={()=>{handleEdit(item.id)}
                            }
                            />
                        )
                    }

                    <button type="button" onClick={clearList} className="btn btn-danger btn-block text-capitalize mt-4">Clear list</button>
                </ul>
            </div>
        )
    }
}

export default TodoList