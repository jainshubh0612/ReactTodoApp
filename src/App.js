import React ,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import uuid from 'uuid'

import TodoInput from './components/todoInput'
import TodoList from './components/todoList'

class App extends Component{
  constructor(){
    super()
    this.state={
      items : [],
      item:'',
      type:'',
      date:'',
      time:'',
      id:uuid(),
      
    }
  }

handleChange = (e) => {
    this.setState({
      item:e.target.value
    })
  }

  handleTypeChange = (e) => {
    this.setState({
      type:e.target.value
    })
  }

  handleDateChange = (e) => {
    this.setState({
      date:e.target.value
    })
  }

  handleTimeChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      time:e.target.value
    })
    // console.log(this.state.time)
  }

handleSubmit = (e) => {
  e.preventDefault();

    const newItem ={
      id:this.state.id,
      title:this.state.item,
      type:this.state.type,
      date:this.state.date,
      time:this.state.time
     }

    const updatedItems = [...this.state.items,newItem]
  
    this.setState({
      items:updatedItems,
      item:"",
      id:uuid(),
      date:'',
      type:'',
      time:''
    })
}

clearList = () => {
  this.setState({
    items:[]
  })
}

handleDelete = (id) => {
    const filteredItems = this.state.items.filter((item)=>
      item.id !== id
    )

    this.setState({
      items:filteredItems
    })
}


  
  render(){
    return (
     
      <div className="container">
        <h2 className="text capitalized text-center"><i>Event Scheduling App</i></h2>
        <div className="row">
          <div className="col col-10 mx-auto col-md-8 mt-4">
              <TodoInput 
                item={this.state.item}
                type = {this.state.type}
                date={this.state.date}  
                time={this.state.time}
                handleChange={this.handleChange}
                handleTypeChange={this.handleTypeChange}
                handleDateChange={this.handleDateChange}
                handleTimeChange={this.handleTimeChange}
                handleSubmit={this.handleSubmit}
                />

              <TodoList items={this.state.items}
                clearList={this.clearList}
                handleDelete ={this.handleDelete}
              />
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
