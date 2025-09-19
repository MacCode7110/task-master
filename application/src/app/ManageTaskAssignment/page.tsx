import AddEngineer from "../component/engineer_behavior/AddEngineer"
import RemoveEngineer from "../component/engineer_behavior/RemoveEngineer"
import EngineerTable from "../component/engineer_view/EngineerTable"
import AddTask from "../component/task_behavior/AddTask"
import AssignTask from "../component/task_behavior/AssignTask"
import CompleteTask from "../component/task_behavior/CompleteTask"
import RemoveTask from "../component/task_behavior/RemoveTask"
import TaskTable from "../component/task_view/TaskTable"

function Page() {
    return (
        <div className="section">
            <div className="block mt-6">
                <h1 className = "title is-5 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Total Number of Estimated Minutes for all Unassigned Tasks: 135</h1>
                <div className="columns is-multiline">
                    <div className="column is-one-third">
                        <AddEngineer />
                        <RemoveEngineer />
                    </div>
                    <div className="column is-one-third">
                        <AddTask />
                        <RemoveTask />
                    </div>
                    <div className="column is-one-third">
                        <AssignTask />
                        <CompleteTask />
                    </div>
                    <div className="column is-half">
                        <EngineerTable />
                    </div>
                    <div className="column is-half">
                        <TaskTable />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page