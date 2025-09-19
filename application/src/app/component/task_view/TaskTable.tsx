function TaskList() {
    return (
        <div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Unassigned Task Table</h2>
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
                    <tr>
                        <td>
                            10
                        </td>
                        <td>
                            Update User Guide
                        </td>
                        <td>
                            60
                        </td>
                    </tr>
                    <tr>
                        <td>
                            11
                        </td>
                        <td>
                            Onboard New Engineer
                        </td>
                        <td>
                            45
                        </td>
                    </tr>
                    <tr>
                        <td>
                            12
                        </td>
                        <td>
                            Fix Disappearing Cursor Bug
                        </td>
                        <td>
                            30
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default TaskList