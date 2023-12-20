import React, { useEffect } from 'react'
import CreateTask from '../modals/createTask'
import { useState } from 'react';
import Card from './Card';
import Swal from 'sweetalert2';




const TodoList = () => {

    const [modal, setModal] = useState(false)

    const [taskList,setTaskList]=useState([])
    
    useEffect(()=> {
      let arr = localStorage.getItem("taskList")

      if(arr){
        let obj = JSON.parse(arr)
        setTaskList(obj)
      } 

    },[])

    const toggle = () => setModal(!modal)

    const saveTask = (taskObj)=>{
      let tempList = taskList
      tempList.push(taskObj)
      localStorage.setItem("taskList",JSON.stringify(tempList))
      setModal(false)
      setTaskList(tempList)


    }

    const deleteTask = (index) =>{



      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          let newArr=taskList.filter((item,i)=> i !== index )
        localStorage.setItem("taskList",JSON.stringify(newArr))
        setTaskList(newArr)
       
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted.",
            icon: "success"
          });
        }
      });
      

    }

    const updateListarray =(obj,index)=>{
      let listArray=[...taskList]
      listArray[index]=obj;
      localStorage.setItem('taskList', JSON.stringify(listArray));
      setTaskList(listArray);
      window.location.reload()
    }

    

    

    
    


  return (
    <>
    
    <div className='header text-center bg-warning'>
        <h3>Todo List</h3>
        <button className='btn btn-primary'onClick={()=> setModal(true)}>Create Task</button>
    </div>

    <div className='task-container '>
      
      {taskList.map((obj,index)=> <Card taskObj ={obj} index={index} deleteTask={()=> deleteTask(index)}  updateListarray={updateListarray} />)}

    </div>

    <CreateTask toggle ={toggle}  modal ={modal}  save={saveTask} />
    
    </>
  )
}

export default TodoList