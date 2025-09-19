function AddTask() {
    return (
       <div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Add Task</h2>
              <form>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Task Name:</label>
                  <input className = "input is-info is-small" type="text" id="taskName"/>
                </div>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Estimated Minutes:</label>
                  <input className = "input is-info is-small" type="number" id="estimatedMinutes"/>
                </div>
                <button className = "button is-family-monospace is-link is-size-7" id = "addTask">Add Task</button>
              </form>
              <div className = "mt-3 mb-3" id = "addTaskInfo"></div>
          </div>
    )
}

export default AddTask