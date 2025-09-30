import '@testing-library/jest-dom'
import { expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import AddTask from '../component/task_behavior/AddTask'
import { SetStateAction } from 'react'
import { Manager, Model, Task } from '../entity/model'

describe("AddTask", () => {
    beforeEach(() => {
        const model : Model = new Model(new Manager([], [], [], 0, 0))
        render(<AddTask manager={model.manager} setUnassignedTaskTableData={function (value: SetStateAction<Task[]>): void {
            throw new Error('Function not implemented.')
        } } setTotalEstimatedUnassignedTime={function (value: SetStateAction<number>): void {
            throw new Error('Function not implemented.')
        } }/>)
        })

    test("displays add task description", async () => {
        const element = await screen.findByTestId("addTaskDescription")
        expect(element).toBeVisible()
    })

    afterEach(() => {
        cleanup()
    })
})