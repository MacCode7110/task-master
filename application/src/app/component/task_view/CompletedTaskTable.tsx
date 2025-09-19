function CompletedTaskTable() {
    return (
        <section className="section">
            <div className = "block mt-6">
                <h1 className = "title is-5 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Total Number of Minutes for all Completed Tasks: 120</h1>
                <div className="block mt-2">
                    <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Completed Task Table</h2>
                    <div className = "table-container">
                        <table className = "table is-full-width is-bordered is-striped is-narrow is-hoverable">
                            <thead>
                                <tr className="is-info">
                                    <th>Task ID</th>
                                    <th>Name</th>
                                    <th>Completed Minutes</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr className="is-info">
                                    <th>Task ID</th>
                                    <th>Name</th>
                                    <th>Completed Minutes</th>
                                </tr>
                            </tfoot>
                            <tbody>
                    
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompletedTaskTable