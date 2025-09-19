function EngineerTable() {
    return (
        <div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Engineer Table</h2>
            <div className="table-container">
                <table className = "table is-full-width is-bordered is-striped is-narrow is-hoverable">
                <thead>
                    <tr>
                        <th>Engineer ID</th>
                        <th>Name</th>
                        <th>Assigned Tasks</th>
                        <th>Total Estimated Task Minutes</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Engineer ID</th>
                        <th>Name</th>
                        <th>Assigned Tasks</th>
                        <th>Total Estimated Task Minutes</th>
                    </tr>
                </tfoot>
                <tbody>
            
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default EngineerTable