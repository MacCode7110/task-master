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
    private totalEstimatedUnassignedTime: number
    private totalCompletedTime: number

    constructor(engineerList: Engineer[], unassignedTaskList: Task[], completedTaskList: Task[], totalEstimatedUnassignedTime: number, totalCompletedTime: number) {
        this.engineerList = engineerList
        this.unassignedTaskList = unassignedTaskList
        this.completedTaskList = completedTaskList
        this.totalEstimatedUnassignedTime = totalEstimatedUnassignedTime
        this.totalCompletedTime = totalCompletedTime
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
        let task: Task | undefined = this.unassignedTaskList.find(t => t.getTaskID() === taskID)
        // Remove task from task list
        this.unassignedTaskList = this.unassignedTaskList.filter(t => t.getTaskID() !== taskID)
        
        let assignedTasks: Task[] | undefined = this.engineerList.find(e => e.getEngineerID() === engineerID)?.getAssignedTasks()
        assignedTasks?.push(task as Task)
        this.engineerList.find(e => e.getEngineerID() === engineerID)?.setAssignedTasks(assignedTasks as Task[])
    }

    completeTask(taskID: String, completedMinutes: number) : void {
        let assignedTasks: Task[] | undefined = (this.engineerList.find(e => e.getAssignedTasks().find(t => t.getTaskID() === taskID)))?.getAssignedTasks()
    
        let task: Task | undefined = assignedTasks?.find(t => t.getTaskID() === taskID)
        task?.setCompletedTime(completedMinutes)
        assignedTasks = assignedTasks?.filter(t => t.getTaskID() !== taskID)
        
        this.engineerList.find(e => e.getAssignedTasks().
        find(t => t.getTaskID() === taskID))?.setAssignedTasks(assignedTasks as Task[])

        this.completedTaskList.push(task as Task)
    }

    computeTotalEstimatedUnassignedTime() : void {
        let totalEstimatedUnassignedTime: number = 0
        
        for(let t of this.unassignedTaskList) {
            totalEstimatedUnassignedTime+=t.getEstimatedTime()
        }

        this.totalEstimatedUnassignedTime = totalEstimatedUnassignedTime
    }

    computeTotalEstimatedTimeByEngineer(engineerID: String) : void {
        let totalEstimatedTime: number = 0
        let assignedTasks: Task[] | undefined = this.engineerList.find(e => e.getEngineerID() === engineerID)?.getAssignedTasks()

        for (let t of assignedTasks as Task[]) {
            totalEstimatedTime+=t.getEstimatedTime()
        }

        this.engineerList.find(e => e.getEngineerID() === engineerID)?.setTotalEstimatedTaskTime(totalEstimatedTime)
    }

    computeTotalCompletedTime() : void {
        let totalCompletedTime: number = 0
        
        for(let t of this.completedTaskList) {
            totalCompletedTime += t.getCompletedTime()
        }

        this.totalCompletedTime = totalCompletedTime
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

    getTotalEstimatedUnassignedTime() : number {
        return this.totalEstimatedUnassignedTime
    }

    getTotalCompletedTime() : number {
        return this.totalCompletedTime
    }
}

export class Model {
    manager: Manager

    constructor(manager: Manager) {
        this.manager = manager
    }

}