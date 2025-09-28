"use client"
function AssignTask() {
    return (<div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Assign Task</h2>
            <h3 className = "subtitle is-7 is-family-sans-serif has-text-warning-dark">Specify a Task ID in the Task Table and an Engineer ID in the Engineer Table to assign a Task with the specified Task ID to an Engineer with the specified Engineer ID</h3>
              <form>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Task ID:</label>
                  <input className = "input is-info is-small" type="number" id="taskID"/>
                </div>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Engineer ID:</label>
                  <input className = "input is-info is-small" type="number" id="engineerID"/>
                </div>
                <button className = "button is-family-monospace is-link is-size-7" id = "assignTask">Assign Task to Engineer</button>
              </form>
              <div className = "mt-3 mb-3" id = "assignTaskInfo"></div>
          </div>)
}

export default AssignTask