function CompleteTask() {
    return (<div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Complete Task</h2>
            <h3 className = "subtitle is-7 is-family-sans-serif has-text-warning-dark">Specify a Task ID in the Task Table and Completed Minutes to complete a task</h3>
              <form>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Task ID:</label>
                  <input className = "input is-info is-small" type="number" id="taskID"/>
                </div>
                <div className = "field">
                  <label className = "label is-family-code is-size-7">Completed Minutes:</label>
                  <input className = "input is-info is-small" type="number" id="completedMinutes"/>
                </div>
                <button className = "button is-family-monospace is-link is-size-7" id = "completeTask">Complete Task</button>
              </form>
              <div className = "mt-3 mb-3" id = "completeTaskInfo"></div>
          </div>)
}

export default CompleteTask