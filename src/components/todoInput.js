import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TodoInput  = (props) => {
    

  const [modal, setModal] = useState(false);
  const {item ,type ,date ,time, handleChange,handleTimeChange ,handleDateChange,handleTypeChange, handleSubmit} = props

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" className="btn btn-block" onClick={toggle}>Click to add event</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add an event</ModalHeader>
        <ModalBody>
            <div className="card card-body my-3">
                <form onSubmit ={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book"></i>
                            </div>
                        </div>
                        <input type="text" required
                            className="form-control text-capitalize" 
                            placeholder="ADD TITLE"
                            value={item}
                            onChange={handleChange}
                            />
                    </div><br />
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-book"></i>
                            </div>
                        </div>
                        <input type="text" required
                            className="form-control text-capitalize" 
                            placeholder="ADD TYPE"
                            value={type}
                            onChange={handleTypeChange}
                            />
                    </div><br />
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-calendar"></i>
                            </div>
                        </div>
                        <input type="date" required
                            className="form-control text-capitalize" 
                            placeholder="ADD DATE"
                            value={date}
                            onChange={handleDateChange}
                            />
                    </div><br />
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fa fa-clock-o"></i>
                            </div>
                        </div>
                        <input type="time" required
                            className="form-control text-capitalize" 
                            placeholder="ADD TIME"
                             value={time}
                            onChange={handleTimeChange}
                            />
                    </div>
                    <button type="submit"  
                        className={"btn btn-block btn-primary mt-3"}>
                        Add Event
                    </button>   
                </form>
            </div>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
  
}

export default TodoInput ;