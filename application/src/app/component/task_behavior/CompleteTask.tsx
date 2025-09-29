"use client"
import { Manager } from "@/app/entity/model"
import { FormEvent, useState } from "react"

interface CompleteTaskProps {
  manager : Manager
}

const CompleteTask: React.FC<CompleteTaskProps> = ({ manager }) => {
    const [state, setState] = useState({
      taskID: "",
      completedMinutes: 0
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
        state.taskID.length !== 0 ? manager.completeTask(state.taskID, state.completedMinutes) : setSubmissionIsDisabled(true)
        console.log(manager.getCompletedTaskList())
    }

    return (<div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Complete Task</h2>
            <h3 className = "subtitle is-7 is-family-sans-serif has-text-warning-dark">Specify a Task ID in the Task Table and Completed Minutes to complete a task</h3>
              <form onSubmit={handleSubmit}>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Task ID:</label>
                  <input className = "input is-info is-small" type="number" value={state.taskID} name="taskID" onChange={handleChange}/>
                </div>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Completed Minutes:</label>
                  <input className = "input is-info is-small" type="number" value={state.completedMinutes} name="completedMinutes" onChange={handleChange}/>
                </div>
                <button className = "button is-family-monospace is-link is-size-7" disabled={submissionIsDisabled}>Complete Task</button>
              </form>
              <div className = "mt-3 mb-3"></div>
          </div>)
}

export default CompleteTask