export class Task {
    taskID: String
    name: String
    estimatedTime: number
    assigned: boolean
    completedTime: number
    isComplete: boolean

    constructor(taskID: String, name: String, estimatedTime: number, assigned: boolean, completedTime: number, isComplete: boolean) {
        this.taskID = taskID
        this.name = name
        this.estimatedTime = estimatedTime
        this.assigned = assigned
        this.completedTime = completedTime
        this.isComplete = isComplete
    }
}

export class Engineer {
    engineerID: String
    name: String
    assignedTasks: Task[]
    totalEstimatedTaskTime: number

    constructor(engineerID: String, name: String, assignedTasks: Task[], totalEstimatedTaskTime: number) {
        this.engineerID = engineerID
        this.name = name
        this.assignedTasks = assignedTasks
        this.totalEstimatedTaskTime = totalEstimatedTaskTime
    }
}

export class Manager {
    engineerList: Engineer[]
    taskList: Task[]
    completedTaskList: Task[]
    totalEstimatedUnassignedTaskTime: number
    totalCompletedTaskTime: number

    constructor(engineerList: Engineer[], taskList: Task[], completedTaskList: Task[], totalEstimatedUnassignedTaskTime: number, totalCompletedTaskTime: number) {
        this.engineerList = engineerList
        this.taskList = taskList
        this.completedTaskList = completedTaskList
        this.totalEstimatedUnassignedTaskTime = totalEstimatedUnassignedTaskTime
        this.totalCompletedTaskTime = totalCompletedTaskTime
    }

    generateUniqueID() : String {
        // Calculate an ID using Date.now() and Math.random() to secure an extremely high probability of uniqueness within the scope of the application
        return `${Date.now()-(Math.random() * 100)}`
    }

    addEngineer(name: String) : void {
        this.engineerList.push(new Engineer(
        this.generateUniqueID(), name, [], 0))
    }

    removeEngineer(engineerID: String) : void {
        this.engineerList = this.engineerList.filter(e => e.engineerID !== engineerID)
    }

    addTask(name: String, estimatedTime: number) : void {
        this.taskList.push(new Task(
            this.generateUniqueID(), name, estimatedTime, false, 0, false))
    }

    removeTask(taskID: String) : void {
        this.taskList = this.taskList.filter(t => t.taskID !== taskID)
    }

    assignTask(taskID: number, engineerID: number) : void {
        
    }

    completeTask(taskID: number, completedMinutes: number) : void {

    }

    computeTotalEstimatedUnassignedTaskTime(taskList : Task[]) : number {
        return 0
    }

    computeTotalEstimatedTaskTimeByEngineer(taskList : Task[]) : number {
        return 0
    }

    computeTotalCompletedTaskTime(completedTaskList : Task[]) : number {
        return 0
    }
}

export class Model {
    manager: Manager

    constructor(manager: Manager) {
        this.manager = manager
    }
}

function generateUniqueID() {
    throw new Error("Function not implemented.")
}
