import React , {Component} from 'react'
import TodoItem from './todoItems'

class TodoList extends Component{
    render(){
        const {items , clearList , handleDelete} = this.props
        return(
            <div>
                <ul className="list-group my-5">

                    <h3 className="text-capitalize text-center mb-4"><i>Events List</i></h3>
                    {
                        items.map((item)=>
                            <TodoItem key={item.id} 
                            title={item.title}
                            type={item.type}
                            date={item.date}
                            handleDelete={()=>handleDelete(item.id)}
                            
                            />
                        )
                    }

                    <button type="button" onClick={clearList} className="btn btn-danger btn-block text-capitalize mt-4">Clear All Events</button>
                </ul>
            </div>
        )
    }
}

export default TodoList