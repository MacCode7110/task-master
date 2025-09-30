"use client"
import { Engineer, Manager, Task } from "../../entity/model"
import { isTaskAssigned, isValidCompletedMinutes, isValidTaskID } from "../../validation/validation_rules"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"

interface CompleteTaskProps {
  manager : Manager
  setEngineerTableData: Dispatch<SetStateAction<Engineer[]>>
  setCompletedTaskTableData: Dispatch<SetStateAction<Task[]>>
  setTotalCompletedTime: Dispatch<SetStateAction<number>>
}

const isValidInput = (taskID : String, completedMinutes: number, engineerList: Engineer[]) : boolean => {
    return isValidTaskID(taskID) && 
    isValidCompletedMinutes(completedMinutes) && 
    isTaskAssigned(engineerList, taskID)
}

const CompleteTask: React.FC<CompleteTaskProps> = ({ manager, setEngineerTableData, setCompletedTaskTableData, setTotalCompletedTime }) => {
    const [state, setState] = useState({
      taskID: "",
      completedMinutes: 0
    })
    const [submissionIsDisabled, setSubmissionIsDisabled] = useState(false)

    const handleChange = (e : FormEvent) => {
        const target = e.target as HTMLInputElement
        console.log("target", target.name, target.value)
        if (target.name === "completedMinutes") {
            let targetValue = 0
            if (target.value) {
              targetValue = parseInt(target.value);
            }
            setState({
              ...state,
              // Target.name creates a dynamic key which will change based on the name and have a corresponding value
              [target.name] : targetValue
            })
      } else {
          let textTargetValue = '';
          textTargetValue = target.value;
          setState({
            ...state,
            // Target.name creates a dynamic key which will change based on the name and have a corresponding value
            [target.name] : textTargetValue
          })
      }
        setSubmissionIsDisabled(false)
    }

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault()
        if(isValidInput(state.taskID, state.completedMinutes, manager.getEngineerList())) {
          const engineerID = manager.getEngineerByAssignedTaskID(state.taskID)?.getEngineerID() as String
          manager.completeTask(state.taskID, state.completedMinutes)
          manager.computeTotalEstimatedTimeByEngineer(engineerID)
          setEngineerTableData([...manager.getEngineerList()])
          setCompletedTaskTableData([...manager.getCompletedTaskList()])
          manager.computeTotalCompletedTime()
          setTotalCompletedTime(manager.getTotalCompletedTime())
        } else {
          setSubmissionIsDisabled(true)
        }

        setState({
          taskID: "", 
          completedMinutes: 0
        })
    }

    const handleFocus = (e : FormEvent) => {
      const target = e.target as HTMLInputElement
      if (target.value == '0') {
         setState({
            ...state,
            // Target.name creates a dynamic key which will change based on the name and have a corresponding value
            [target.name] : ''
          })
      }
    }

    return (<div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Complete Task</h2>
            <h3 className = "subtitle is-7 is-family-sans-serif has-text-warning-dark" data-testid={"completeTaskDescription"}>Specify a Task ID in the Engineer Table and Completed Minutes to complete a task</h3>
              <form onSubmit={handleSubmit}>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Task ID:</label>
                  <input className = "input is-info is-small" type="text" value={state.taskID} name="taskID" onChange={handleChange}/>
                </div>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Completed Minutes:</label>
                  <input className = "input is-info is-small" type="number" value={state.completedMinutes} name="completedMinutes" onInput={handleChange} onFocus={handleFocus}/>
                </div>
                <button className = "button is-family-monospace is-link is-size-7" disabled={submissionIsDisabled}>Complete Task</button>
              </form>
              <div className = "mt-3 mb-3"></div>
          </div>)
}

export default CompleteTask