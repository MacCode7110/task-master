"use client"
import { Engineer, Manager, Task } from "@/app/entity/model"
import { engineerExists, taskExists, isTaskAssigned, isValidEngineerID, isValidTaskID } from "@/app/validation/validation_rules"
import { FormEvent, useState } from "react"

interface AssignTaskProps {
  manager: Manager
}

const isValidInput = (engineerList: Engineer[], engineerID: String, unassignedTaskList: Task[], taskID: String) : boolean => {
  return isValidEngineerID(engineerID) && 
  isValidTaskID(taskID) && 
  engineerExists(engineerList, engineerID) && 
  taskExists(unassignedTaskList, taskID) && 
  isTaskAssigned(engineerList, taskID)
}

const AssignTask: React.FC<AssignTaskProps> = ({ manager }) => {
    const [state, setState] = useState({
      taskID: "",
      engineerID: ""
    })
    const [submissionIsDisabled, setSubmissionIsDisabled] = useState(false)

    const handleChange = (e : FormEvent) => {
        const target = e.target as HTMLInputElement
        setState({
          ...state,
          [target.name] : target.value
        })

    }

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault()
        isValidInput(manager.getEngineerList(), state.engineerID, manager.getUnassignedTaskList(), state.taskID) ? manager.assignTask(state.taskID, state.engineerID) : setSubmissionIsDisabled(true)
        setState({taskID: "", engineerID: ""})
        console.log(manager.getEngineerList())
        console.log(manager.getUnassignedTaskList())
    }

    return (<div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Assign Task</h2>
            <h3 className = "subtitle is-7 is-family-sans-serif has-text-warning-dark">Specify a Task ID in the Task Table and an Engineer ID in the Engineer Table to assign a Task with the specified Task ID to an Engineer with the specified Engineer ID</h3>
              <form onSubmit={handleSubmit}>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Task ID:</label>
                  <input className = "input is-info is-small" type="text" value={state.taskID} name="taskID" onChange={handleChange}/>
                </div>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Engineer ID:</label>
                  <input className = "input is-info is-small" type="text" value = {state.engineerID} name="engineerID" onChange={handleChange}/>
                </div>
                <button className = "button is-family-monospace is-link is-size-7" disabled={submissionIsDisabled}>Assign Task to Engineer</button>
              </form>
              <div className = "mt-3 mb-3"></div>
          </div>)
}

export default AssignTask