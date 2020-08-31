import React , {Component} from 'react'

class TodoItem extends Component{
    render(props){
        const {title,type,date,time,handleDelete} = this.props
        return(
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2" >
               <h4>{title}</h4>
               <h6>{type}</h6>
               <p><strong>{time}</strong></p>
               <p><strong>{date}</strong></p>
               <div className="todo-icon">
                    <span className="mx-2 text-danger" onClick={handleDelete}>
                        <i className="fa fa-trash"></i>
                    </span>
               </div>
            </li>
        )
    }
}

export default TodoItem