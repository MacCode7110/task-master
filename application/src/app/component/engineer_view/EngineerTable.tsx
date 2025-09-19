function EngineerTable() {
    return (
        <div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Engineer Table</h2>
            <div className="table-container">
                <table className = "table is-full-width is-bordered is-striped is-narrow is-hoverable">
                <thead>
                    <tr className="is-info">
                        <th>Engineer ID</th>
                        <th>Name</th>
                        <th>Assigned Tasks (ID - Name - Estimated Minutes)</th>
                        <th>Total Estimated Task Minutes</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr className="is-info">
                        <th>Engineer ID</th>
                        <th>Name</th>
                        <th>Assigned Tasks (ID - Name - Estimated Minutes)</th>
                        <th>Total Estimated Task Minutes</th>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            John Martin
                        </td>
                        <td>
                            4 - Update App Documentation - 45, 5 - Add New App Dependencies - 45
                        </td>
                        <td>
                            90
                        </td>
                    </tr>
                    <tr>
                        <td>
                            2
                        </td>
                        <td>
                            James Johnston
                        </td>
                        <td>
                            6 - Refactor Websocket Connection - 120, 7 - Fix Disbaled Button Bug - 60
                        </td>
                        <td>
                            180
                        </td>
                    </tr>
                    <tr>
                        <td>
                            3
                        </td>
                        <td>
                            Paul Scott
                        </td>
                        <td>
                            8 - Refactor Operations Dashboard - 120, 9 - Implement New Login Interface - 120
                        </td>
                        <td>
                            240
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default EngineerTable