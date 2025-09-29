import { Engineer, Task } from "../entity/model"

export const isValidEngineerID = (engineerID : String) : boolean => {
    return engineerID.length > 0
}

export const isValidTaskID = (taskID : String) : boolean => {
    return taskID.length > 0
}

export const isValidEngineerName = (engineerName : String) : boolean => {
    return engineerName.length > 0
}

export const isValidTaskName = (taskName : String) : boolean => {
    return taskName.length > 0
}

export const isValidEstimatedMinutes = (estimatedMinutes : number) : boolean => {
    return estimatedMinutes > 0
}

export const isValidCompletedMinutes = (completedMinutes : number) : boolean => {
    return completedMinutes > 0
}

export const isTaskAssigned = (engineerList: Engineer[], taskID: String) : boolean => {
    return (engineerList.find(e => e.getAssignedTasks().
    find(t => t.getTaskID() === taskID)) ? true : false)
}

export const isTaskUnassigned = (unassignedTaskList: Task[], taskID : String) => {
    return (unassignedTaskList.find(t => t.getTaskID() === taskID) ? true : false)
}

export const isNoTaskAssignedToEngineer = (engineerList: Engineer[], engineerID : String) : boolean => {
    return (((engineerList.find(e => e.getEngineerID() === engineerID))?.getAssignedTasks().length === 0) ? true : false)
}

export const engineerExists = (engineerList : Engineer[], engineerID : String) : boolean => {
  return (engineerList.find(e => e.getEngineerID() === engineerID) ? true : false)
}

export const taskExists = (unassignedTaskList: Task[], taskID: String) : boolean => {
  return (unassignedTaskList.find(t => t.getTaskID() === taskID) ? true : false)
}