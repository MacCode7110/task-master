"use client"
import { Manager } from "@/app/entity/model"
import { FormEvent, useState } from "react"

interface AddTaskProps {
  manager : Manager
}

const AddTask: React.FC<AddTaskProps> = ({ manager }) => {
    const [state, setState] = useState({
      taskName: "",
      estimatedMinutes: 0
    })
    const [submissionIsDisabled, setSubmissionIsDisabled] = useState(false)

    const handleChange = (e : FormEvent) => {
      const target = e.target as HTMLInputElement
      setState({
        ...state,
        // Target.name creates a dynamic key which will change based on the name and have a corresponding value
        [target.name] : target.value
      })
    }

    const handleSubmit = (e : FormEvent) => {
      e.preventDefault()
      state.taskName.length > 0 && state.estimatedMinutes > 0 ? manager.addTask(state.taskName, state.estimatedMinutes) : setSubmissionIsDisabled(true)
      setState({taskName: "",
      estimatedMinutes: 0})
      console.log(manager.getUnassignedTaskList())    
    }

    return (
       <div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Add Task</h2>
            <h3 className = "subtitle is-7 is-family-sans-serif has-text-warning-dark">Specify a Task Name and Estimated Minutes to add a task to the Task Table</h3>
              <form onSubmit={handleSubmit}>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Task Name:</label>
                  <input className = "input is-info is-small" type="text" value={state.taskName} name="taskName" onChange={handleChange}/>
                </div>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Estimated Minutes:</label>
                  <input className = "input is-info is-small" type="number" value={state.estimatedMinutes} name="estimatedMinutes" onChange={handleChange}/>
                </div>
                <button className = "button is-family-monospace is-link is-size-7" disabled={submissionIsDisabled}>Add Task</button>
              </form>
              <div className = "mt-3 mb-3"></div>
          </div>
    )
}

export default AddTask