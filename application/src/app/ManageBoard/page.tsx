"use client"
import { useState } from "react"
import AddEngineer from "../component/engineer_behavior/AddEngineer"
import RemoveEngineer from "../component/engineer_behavior/RemoveEngineer"
import EngineerTable from "../component/engineer_view/EngineerTable"
import AddTask from "../component/task_behavior/AddTask"
import AssignTask from "../component/task_behavior/AssignTask"
import CompleteTask from "../component/task_behavior/CompleteTask"
import RemoveTask from "../component/task_behavior/RemoveTask"
import TaskTable from "../component/task_view/TaskTable"
import { Engineer, Manager, Task } from "../entity/model"

interface ManageBoardProps {
    manager : Manager
}

const Page: React.FC<ManageBoardProps> = ({ manager }) => {
    const [engineerTableData, setEngineerTableData] = useState<Engineer[]>([])
    const [unassignedTaskTableData, setUnassignedTaskTableData] = useState<Task[]>([])

    return (
        <div className="section">
            <div className="block mt-6">
                <h1 className = "title is-5 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Total Number of Estimated Minutes for all Unassigned Tasks: 135</h1>
                <div className="columns is-multiline">
                    <div className="column is-one-third">
                        <AddEngineer manager={manager} setEngineerTableData={setEngineerTableData}/>
                        <RemoveEngineer manager={manager} setEngineerTableData=
                        {setEngineerTableData}/>
                    </div>
                    <div className="column is-one-third">
                        <AddTask manager={manager} setUnassignedTaskTableData={setUnassignedTaskTableData}/>
                        <RemoveTask manager={manager} setUnassignedTaskTableData={setUnassignedTaskTableData}/>
                    </div>
                    <div className="column is-one-third">
                        <AssignTask manager={manager} setEngineerTableData={setEngineerTableData} setUnassignedTaskTableData={setUnassignedTaskTableData}/>
                        <CompleteTask manager={manager} setEngineerTableData={setEngineerTableData}/>
                    </div>
                    <div className="column is-half">
                        <EngineerTable engineerList={engineerTableData}/>
                    </div>
                    <div className="column is-half">
                        <TaskTable unassignedTaskList={unassignedTaskTableData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page