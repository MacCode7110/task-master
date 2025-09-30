"use client"
import { useState } from "react"
import AddEngineer from "../component/engineer_behavior/AddEngineer"
import RemoveEngineer from "../component/engineer_behavior/RemoveEngineer"
import EngineerTable from "../component/engineer_view/EngineerTable"
import AddTask from "../component/task_behavior/AddTask"
import AssignTask from "../component/task_behavior/AssignTask"
import CompleteTask from "../component/task_behavior/CompleteTask"
import RemoveTask from "../component/task_behavior/RemoveTask"
import TaskTable from "../component/task_view/UnassignedTaskTable"
import { Engineer, Manager, Task } from "../entity/model"
import CompletedTaskTable from "../component/task_view/CompletedTaskTable"

interface ManageBoardProps {
    manager : Manager
}

const Page: React.FC<ManageBoardProps> = ({ manager }) => {
    const [engineerTableData, setEngineerTableData] = useState<Engineer[]>([])
    const [unassignedTaskTableData, setUnassignedTaskTableData] = useState<Task[]>([])
    const [completedTaskTableData, setCompletedTaskTableData] = useState<Task[]>([])
    const [totalEstimatedUnassignedTime, setTotalEstimatedUnassignedTime] = useState(0)
    const [totalCompletedTime, setTotalCompletedTime] = useState(0)

    return (
        <div className="section">
            <h1 className="title is-4 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Task Master</h1>
            <h2 className = "title is-5 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Total Number of Estimated Minutes for all Unassigned Tasks: {totalEstimatedUnassignedTime}</h2>
            <h3 className = "title is-5 has-text-weight-bold is-family-sans-serif has-text-warning-dark">Total Number of Minutes for all Completed Tasks: {totalCompletedTime}</h3>
            <div className="columns is-multiline">
                <div className="column is-one-third">
                    <AddTask manager={manager} 
                    setUnassignedTaskTableData={setUnassignedTaskTableData} 
                    setTotalEstimatedUnassignedTime={setTotalEstimatedUnassignedTime}/>
                    <RemoveTask manager={manager} 
                    setUnassignedTaskTableData={setUnassignedTaskTableData} setTotalEstimatedUnassignedTime={setTotalEstimatedUnassignedTime}/>
                </div>
                <div className="column is-one-third">
                    <AddEngineer manager={manager} 
                    setEngineerTableData={setEngineerTableData}/>
                    <RemoveEngineer manager={manager} 
                    setEngineerTableData=
                    {setEngineerTableData}/>
                </div>
                <div className="column is-one-third">
                    <AssignTask manager={manager} 
                    setEngineerTableData={setEngineerTableData} 
                    setUnassignedTaskTableData={setUnassignedTaskTableData} setTotalEstimatedUnassignedTime={setTotalEstimatedUnassignedTime}/>
                    <CompleteTask manager={manager} 
                    setEngineerTableData={setEngineerTableData} setCompletedTaskTableData={setCompletedTaskTableData}
                    setTotalCompletedTime={setTotalCompletedTime}/>
                </div>
                <div className="column is-one-third">
                    <TaskTable unassignedTaskList={unassignedTaskTableData}/>
                </div>
                <div className="column is-one-third">
                    <EngineerTable engineerList={engineerTableData}/>
                </div>
                <div className="column is-one-third">
                    <CompletedTaskTable completedTaskList={completedTaskTableData}/>
                </div>
            </div>
        </div>
    )
}

export default Page