"use client"
import { Task } from "../../entity/model"
import { Key } from "react"

interface CompletedTaskTableProps {
    completedTaskList: Task[]
}

const CompletedTaskTable: React.FC<CompletedTaskTableProps> = ({ completedTaskList }) => {
    return (
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
                    <tbody>
                        {completedTaskList.map(t => (<tr key = {t.getTaskID() as Key}>
                            <td>
                                {t.getTaskID()}
                            </td>
                            <td>
                                {t.getName()}
                            </td>
                            <td>
                                {t.getCompletedTime()}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CompletedTaskTable