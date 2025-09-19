function AddEngineer() {
    return (
        <div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Add Engineer</h2>
            <h3 className = "subtitle is-7 is-family-sans-serif has-text-warning-dark">Specify an Engineer Name to add an engineer to the Engineer Table</h3>
              <form>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Engineer Name:</label>
                  <input className = "input is-info is-small" type="text" id="engineerName"/>
                </div>
                <button className = "button is-family-monospace is-link is-size-7" id = "submitEngineer">Submit New Engineer</button>
              </form>
              <div className = "mt-3 mb-3" id = "addEngineerInfo"></div>
          </div>
    )
}

export default AddEngineer