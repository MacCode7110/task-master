"use client"
import { Manager } from "@/app/entity/model"
import { isValidEngineerName } from "@/app/validation/validation_rules"
import { FormEvent, useState } from "react"

interface AddEngineerProps {
  manager : Manager
}

const AddEngineer: React.FC<AddEngineerProps> = ({ manager }) => {
    const [engineerName, setEngineerName] = useState("")
    const [submissionIsDisabled, setSubmissionIsDisabled] = useState(false)

    const handleChange = (e : FormEvent) => {
      const target = e.target as HTMLInputElement
      setEngineerName(target.value)
    }

    const handleSubmit = (e : FormEvent) => {
      e.preventDefault()
      isValidEngineerName(engineerName) ? manager.addEngineer(engineerName) : setSubmissionIsDisabled(true)
      setEngineerName("")
      console.log(manager.getEngineerList())
    }

    return (
        <div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Add Engineer</h2>
            <h3 className = "subtitle is-7 is-family-sans-serif has-text-warning-dark">Specify an Engineer Name to add an engineer to the Engineer Table</h3>
              <form onSubmit={handleSubmit}>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Engineer Name:</label>
                  <input className = "input is-info is-small" type="text" value={engineerName} name="engineerName" onChange={handleChange}/>
                </div>
                <button className = "button is-family-monospace is-link is-size-7" disabled={submissionIsDisabled}>Submit New Engineer</button>
              </form>
              <div className = "mt-3 mb-3"></div>
          </div>
    )
}

export default AddEngineer