"use client"
import { Engineer, Manager } from "@/app/entity/model"
import { engineerExists, isNoTaskAssignedToEngineer } from "@/app/validation/validation_rules"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"

interface RemoveEngineerProps {
  manager: Manager
  setEngineerTableData: Dispatch<SetStateAction<Engineer[]>>
}

const isValidInput = (engineerList : Engineer[], engineerID : String) : boolean => {
    return engineerExists(engineerList, engineerID) && isNoTaskAssignedToEngineer(engineerList, engineerID)
}

const RemoveEngineer: React.FC<RemoveEngineerProps> = ({ manager, setEngineerTableData }) => {
    const [engineerID, setEngineerID] = useState("")
    const [submissionIsDisabled, setSubmissionIsDisabled] = useState(false)
    
    const handleChange = (e : FormEvent) => {
      const target = e.target as HTMLInputElement
      setEngineerID(target.value)
      setSubmissionIsDisabled(false)
    }
    
    const handleSubmit = (e : FormEvent) => {
      e.preventDefault()
      
      if(isValidInput(manager.getEngineerList(), engineerID)) {
        manager.removeEngineer(engineerID)
        setEngineerTableData([...manager.getEngineerList()])
      } else {
        setSubmissionIsDisabled(true)
      }

      setEngineerID("")
      console.log(manager.getEngineerList())
    }
  
    return (
        <div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Remove Engineer</h2>
            <h3 className = "subtitle is-7 is-family-sans-serif has-text-warning-dark">Specify an Engineer ID in the Engineer Table to remove an engineer from the Engineer Table</h3>
              <form onSubmit={handleSubmit}>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Engineer ID:</label>
                  <input className = "input is-info is-small" type="text" value={engineerID} onChange={handleChange}/>
                </div>
                <button className = "button is-family-monospace is-link is-size-7" disabled={submissionIsDisabled}>Remove Existing Engineer</button>
              </form>
              <div className = "mt-3 mb-3"></div>
          </div>
    )
}

export default RemoveEngineer