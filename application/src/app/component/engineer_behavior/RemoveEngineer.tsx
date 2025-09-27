import { FormEvent, useState } from "react"

function RemoveEngineer() {
    const [engineerID, setEngineerID] = useState("")
    
    const handleChange = (e : FormEvent) => {
      const target = e.target as HTMLInputElement
      setEngineerID(target.value)
    }
    
    const handleSubmit = (e : FormEvent) => {
      e.preventDefault()
    }
  
    return (
        <div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Remove Engineer</h2>
            <h3 className = "subtitle is-7 is-family-sans-serif has-text-warning-dark">Specify an Engineer ID in the Engineer Table to remove an engineer from the Engineer Table</h3>
              <form onSubmit={handleSubmit}>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Engineer ID:</label>
                  <input onChange={handleChange} className = "input is-info is-small" type="number" id="engineerID"/>
                </div>
                <button className = "button is-family-monospace is-link is-size-7" id = "removeEngineer">Remove Existing Engineer</button>
              </form>
              <div className = "mt-3 mb-3" id = "removeEngineerInfo"></div>
          </div>
    )
}

export default RemoveEngineer