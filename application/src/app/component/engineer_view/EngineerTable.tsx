"use client"
import { Engineer } from "../../entity/model"
import { Key } from "react"

interface EngineerTableProps {
    engineerList: Engineer[]
}

const EngineerTable: React.FC<EngineerTableProps> = ({ engineerList }) => {
    return (
        <div className = "block mt-2">
            <h2 className = "subtitle is-6 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Engineer Table</h2>
            <div className="table-container">
                <table className = "table is-full-width is-bordered is-striped is-narrow is-hoverable">
                <thead>
                    <tr className="is-info">
                        <th>Engineer ID</th>
                        <th>Name</th>
                        <th>Assigned Tasks (Task ID - Name - Estimated Minutes)</th>
                        <th>Total Estimated Assigned Task Minutes</th>
                    </tr>
                </thead>
                <tbody>
                    {engineerList?.map((e) => (
                        <tr key={e.getEngineerID() as Key}>
                            <td>
                                {e.getEngineerID()}
                            </td>
                            <td>
                                {e.getName()}
                            </td>
                            <td>
                                {e.getAssignedTasks().map(
                                    t => (
                                        `(${t.getTaskID()} - ${t.getName()} - ${t.getEstimatedTime()}), `
                                    )
                                )}
                            </td>
                            <td>
                                {e.getTotalEstimatedTime()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default EngineerTable