"use client"
import AddEngineer from "../component/engineer_behavior/AddEngineer"
import RemoveEngineer from "../component/engineer_behavior/RemoveEngineer"
import EngineerTable from "../component/engineer_view/EngineerTable"
import AddTask from "../component/task_behavior/AddTask"
import AssignTask from "../component/task_behavior/AssignTask"
import CompleteTask from "../component/task_behavior/CompleteTask"
import RemoveTask from "../component/task_behavior/RemoveTask"
import TaskTable from "../component/task_view/TaskTable"
import { Manager } from "../entity/model"

interface ManageBoardProps {
    manager : Manager
}

const Page: React.FC<ManageBoardProps> = ({ manager }) => {
    return (
        <div className="section">
            <div className="block mt-6">
                <h1 className = "title is-5 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Total Number of Estimated Minutes for all Unassigned Tasks: 135</h1>
                <div className="columns is-multiline">
                    <div className="column is-one-third">
                        <AddEngineer manager={manager}/>
                        <RemoveEngineer manager={manager}/>
                    </div>
                    <div className="column is-one-third">
                        <AddTask manager={manager}/>
                        <RemoveTask manager={manager}/>
                    </div>
                    <div className="column is-one-third">
                        <AssignTask manager={manager}/>
                        <CompleteTask manager={manager}/>
                    </div>
                    <div className="column is-half">
                        <EngineerTable engineerList={manager.getEngineerList()}/>
                    </div>
                    <div className="column is-half">
                        <TaskTable taskList={manager.getUnassignedTaskList()}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page