import React, { useState } from 'react'
import EditTsk from '../modals/EditTask'

const Card = ({taskObj,deleteTask,index,updateListarray}) => {


    const handleDelet = () => deleteTask(index)
    const [modal,setModal]=useState(false)
    const toggle = ()=> setModal(!modal)
   

    const updateTask = (obj)=>{

      updateListarray(obj,index)
      
    }

    

  return (

            <div key={index} className="card">
                <h4 className="card-title bg-success text-white" >{taskObj.Name} </h4>
                <p className="card-text" >{taskObj.Description} </p>
                <div className="d-flex justify-content-end ">
                <i className="fas fa-edit fa-sm" style={{ fontSize: '14px' }} onClick={()=> setModal(true)}></i>
                <i className="fas fa-trash-alt fa-sm" style={{ fontSize: '14px' }}  onClick={handleDelet}></i>
                </div>

                <EditTsk modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
                

            </div>
    
  )
}

export default Card