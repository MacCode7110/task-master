function TaskList() {
    return (
        <div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Task Table</h2>
            <div className="table-container">
                <table className = "table is-full-width is-bordered is-striped is-narrow is-hoverable">
                <thead>
                    <tr className="is-info">
                        <th>Task ID</th>
                        <th>Name</th>
                        <th>Estimated Minutes</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr className="is-info">
                        <th>Task ID</th>
                        <th>Name</th>
                        <th>Estimated Minutes</th>
                    </tr>
                </tfoot>
                <tbody>

                </tbody>
            </table>
            </div>
        </div>
    )
}

export default TaskList