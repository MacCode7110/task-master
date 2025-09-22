export class Engineer {

}

export class Task {

}

export class Manager {

}

export class Model {
    manager: Manager

    constructor(manager: Manager) {
        this.manager = manager
    }
}