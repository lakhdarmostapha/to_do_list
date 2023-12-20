import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal,toggle,save}) => {

  const [taskName,setTaskName]=useState('')
  const [description,setDescription]=useState('')

  const handleChange = (e)=>{

    
    const {name,value}=e.target
    
    if(name==='taskName'){
      setTaskName(value)
      }else{
        setDescription(value)
      }
  }

  const handleSave = ()=>{
      let taskObj = {}
      taskObj['Name']=taskName
      taskObj['Description']=description
      save(taskObj)
      setTaskName('')
      setDescription('')
  }
  


  return (

    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create task</ModalHeader>
        <ModalBody>
          <form>
            <div className='form-group'>
              <label className='form-label'> Task Name:</label>
              <input type="text" className='form-control' value={taskName} onChange={handleChange}  name='taskName'  />

            </div>

            <div className='form-group'>
              <label className='lael-control'> Description:</label>
              <textarea className='form-control' rows={5}  value={description} onChange={handleChange} name='description'></textarea>
            </div>


          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

  )
}

export default CreateTask