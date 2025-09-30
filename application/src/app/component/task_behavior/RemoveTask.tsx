"use client"
import { Manager, Task } from "@/app/entity/model"
import { isTaskUnassigned, isValidTaskID } from "@/app/validation/validation_rules"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"

interface RemoveTaskProps {
  manager: Manager
  setUnassignedTaskTableData: Dispatch<SetStateAction<Task[]>>
  setTotalEstimatedUnassignedTime: Dispatch<SetStateAction<number>>
}

const isValidInput = (unassignedTaskList: Task[], taskID : String) => {
    return isValidTaskID(taskID) && 
    isTaskUnassigned(unassignedTaskList, taskID)
}

const RemoveTask: React.FC<RemoveTaskProps> = ({ manager, setUnassignedTaskTableData, setTotalEstimatedUnassignedTime }) => {
    const [taskID, setTaskID] = useState("")
    const [submissionIsDisabled, setSubmissionIsDisabled] = useState(false)

    const handleChange = (e : FormEvent) => {
      const target = e.target as HTMLInputElement
      setTaskID(target.value)
      setSubmissionIsDisabled(false)
    }

    const handleSubmit = (e : FormEvent) => {
      e.preventDefault()
      
      if(isValidInput(manager.getUnassignedTaskList(), taskID)) {
        manager.removeTask(taskID)
        setUnassignedTaskTableData([...manager.getUnassignedTaskList()])
        manager.computeTotalEstimatedUnassignedTime()
        setTotalEstimatedUnassignedTime(manager.getTotalEstimatedUnassignedTime())
      } else {
        setSubmissionIsDisabled(true)
      }

      setTaskID("")
    }

    return (
       <div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Remove Task</h2>
            <h3 className = "subtitle is-7 is-family-sans-serif has-text-warning-dark">Specify a Task ID in the Unassigned Task Table to remove a task from the Unassigned Task Table</h3>
              <form onSubmit={handleSubmit}>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Task ID:</label>
                  <input className = "input is-info is-small" type="text" value={taskID} onChange={handleChange}/>
                </div>
                <button className = "button is-family-monospace is-link is-size-7" disabled={submissionIsDisabled}>Remove Task</button>
              </form>
              <div className = "mt-3 mb-3" id = "removeTaskInfo"></div>
          </div>
    )
}

export default RemoveTask