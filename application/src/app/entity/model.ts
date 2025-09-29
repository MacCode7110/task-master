export class Task {
    private taskID: String
    private name: String
    private estimatedTime: number
    private completedTime: number

    constructor(taskID: String, name: String, estimatedTime: number, completedTime: number) {
        this.taskID = taskID
        this.name = name
        this.estimatedTime = estimatedTime
        this.completedTime = completedTime
    }

    public getTaskID(): String {
        return this.taskID
    }

    public setTaskID(ID: String) {
        this.taskID = ID
    }

    public getName(): String {
        return this.name
    }

    public setName(name: String) {
        this.name = name
    }

    public getEstimatedTime(): number {
        return this.estimatedTime
    }

    public setEstimatedTime(estimatedTime: number) {
        this.estimatedTime = estimatedTime
    }

    public getCompletedTime(): number {
        return this.completedTime
    }

    public setCompletedTime(completedTime: number) {
        this.completedTime = completedTime
    }
}

export class Engineer {
    private engineerID: String
    private name: String
    private assignedTasks: Task[]
    private totalEstimatedTaskTime: number

    constructor(engineerID: String, name: String, assignedTasks: Task[], totalEstimatedTaskTime: number) {
        this.engineerID = engineerID
        this.name = name
        this.assignedTasks = assignedTasks
        this.totalEstimatedTaskTime = totalEstimatedTaskTime
    }

    public getEngineerID(): String {
        return this.engineerID
    }

    public setEngineerID(ID: String) {
        this.engineerID = ID
    }

    public getName(): String {
        return this.name
    }

    public setName(name: String) {
        this.name = name
    }

    public getAssignedTasks(): Task[] {
        return this.assignedTasks
    }

    public setAssignedTasks(assignedTasks: Task[]) {
        this.assignedTasks = assignedTasks
    }

    public getTotalEstimatedTaskTime(): number {
        return this.totalEstimatedTaskTime
    }

    public setTotalEstimatedTaskTime(totalEstimatedTaskTime: number) {
        this.totalEstimatedTaskTime = totalEstimatedTaskTime
    }
}

export class Manager {
    private engineerList: Engineer[]
    private unassignedTaskList: Task[]
    private completedTaskList: Task[]

    constructor(engineerList: Engineer[], unassignedTaskList: Task[], completedTaskList: Task[]) {
        this.engineerList = engineerList
        this.unassignedTaskList = unassignedTaskList
        this.completedTaskList = completedTaskList
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
        this.engineerList = this.engineerList.filter(e => e.getEngineerID() !== engineerID)
    }

    addTask(name: String, estimatedTime: number) : void {
        this.unassignedTaskList.push(new Task(
            this.generateUniqueID(), name, estimatedTime, 0))
    }

    removeTask(taskID: String) : void {
        this.unassignedTaskList = this.unassignedTaskList.filter(t => t.getTaskID() !== taskID)
    }

    // Implementing Immutable Object Modification for assignTask and completeTask methods to create safe code

    assignTask(taskID: String, engineerID: String) : void {
        let task = this.unassignedTaskList.find(t => t.getTaskID() === taskID)
        // Remove task from task list
        this.unassignedTaskList = this.unassignedTaskList.filter(t => t.getTaskID() !== taskID)
        
        let assignedTasks = this.engineerList.find(e => e.getEngineerID() === engineerID)?.getAssignedTasks()
        assignedTasks?.push(task as Task)
        this.engineerList.find(e => e.getEngineerID() === engineerID)?.setAssignedTasks(assignedTasks as Task[])
    }

    completeTask(taskID: String, completedMinutes: number) : void {
        let assignedTasks = (this.engineerList.find(e => e.getAssignedTasks().
        find(t => t.getTaskID() === taskID)))?.getAssignedTasks()
        let task = assignedTasks?.find(t => t.getTaskID() === taskID)
        
        task?.setCompletedTime(completedMinutes)
        assignedTasks = assignedTasks?.filter(t => t.getTaskID() !== taskID)
        this.engineerList.find(e => e.getAssignedTasks().
        find(t => t.getTaskID() === taskID))?.setAssignedTasks(assignedTasks as Task[])

        this.completedTaskList.push(task as Task)
    }

    computeTotalEstimatedUnassignedTaskTime() : number {
        let totalEstimatedUnassignedTime = 0
        
        for(let t of this.unassignedTaskList) {
            totalEstimatedUnassignedTime+=t.getEstimatedTime()
        }

        return totalEstimatedUnassignedTime
    }

    computeTotalEstimatedTaskTimeByEngineer(engineerID: String) : number {
        let totalEstimatedTime = 0
        let assignedTasks = this.engineerList.find(e => e.getEngineerID() === engineerID)?.getAssignedTasks()

        for (let t of assignedTasks as Task[]) {
            totalEstimatedTime+=t.getEstimatedTime()
        }

        return totalEstimatedTime
    }

    computeTotalCompletedTaskTime() : number {
        let totalCompletedTime = 0
        
        for(let t of this.completedTaskList) {
            totalCompletedTime += t.getCompletedTime()
        }

        return totalCompletedTime
    }

    getEngineerList() : Engineer[] {
        return this.engineerList
    }

    getUnassignedTaskList() : Task[] {
        return this.unassignedTaskList
    }

    getCompletedTaskList() : Task[] {
        return this.completedTaskList
    }

}

export class Model {
    manager: Manager

    constructor(manager: Manager) {
        this.manager = manager
    }

}