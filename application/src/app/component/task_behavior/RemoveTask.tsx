"use client"
import { Manager, Task } from "@/app/entity/model"
import { FormEvent, useState } from "react"

interface RemoveTaskProps {
  manager: Manager
}

const isTaskNotAssigned = (unassignedTaskList: Task[], taskID : String) => {
    return (unassignedTaskList.find(t => t.getTaskID() === taskID) ? true : false)
}

const RemoveTask: React.FC<RemoveTaskProps> = ({ manager }) => {
    const [taskID, setTaskID] = useState("")
    const [submissionIsDisabled, setSubmissionIsDisabled] = useState(false)

    const handleChange = (e : FormEvent) => {
      const target = e.target as HTMLInputElement
      setTaskID(target.value)
    }

    const handleSubmit = (e : FormEvent) => {
      e.preventDefault()
      isTaskNotAssigned(manager.getUnassignedTaskList(), taskID) ? manager.removeTask(taskID) : setSubmissionIsDisabled(true)
      setTaskID("")
      console.log(manager.getUnassignedTaskList())
    }

    return (
       <div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Remove Task</h2>
            <h3 className = "subtitle is-7 is-family-sans-serif has-text-warning-dark">Specify a Task ID in the Task Table to remove a task from the Task Table</h3>
              <form onSubmit={handleSubmit}>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Task ID:</label>
                  <input className = "input is-info is-small" type="number" value={taskID} onChange={handleChange}/>
                </div>
                <button className = "button is-family-monospace is-link is-size-7" disabled={submissionIsDisabled}>Remove Task</button>
              </form>
              <div className = "mt-3 mb-3" id = "removeTaskInfo"></div>
          </div>
    )
}

export default RemoveTask