export class Task {
    taskID: number
    name: String
    estimatedTime: number
    assigned: boolean
    completedTime: number
    isComplete: boolean

    constructor(taskID: number, name: String, estimatedTime: number, assigned: boolean, completedTime: number, isComplete: boolean) {
        this.taskID = taskID
        this.name = name
        this.estimatedTime = estimatedTime
        this.assigned = assigned
        this.completedTime = completedTime
        this.isComplete = isComplete
    }
}

export class Engineer {
    engineerID: number
    name: String
    assignedTasks: Task[]
    totalEstimatedTaskTime: number

    constructor(engineerID: number, name: String, assignedTasks: Task[], totalEstimatedTaskTime: number) {
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

    addEngineer(name: String) : void {

    }

    removeEngineer(engineerID: number) : void {

    }

    addTask(name: String, estimatedTime: number) : void {

    }

    removeTask(taskID: number) : void {

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