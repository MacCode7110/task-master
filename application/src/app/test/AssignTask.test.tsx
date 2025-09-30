import '@testing-library/jest-dom'
import { expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import AssignTask from '../component/task_behavior/AssignTask'
import { SetStateAction } from 'react'
import { Engineer, Manager, Model, Task } from '../entity/model'

describe("AssignTask", () => {
    beforeEach(() => {
        const model : Model = new Model(new Manager([], [], [], 0, 0))
        render(<AssignTask manager={model.manager} setUnassignedTaskTableData={function (value: SetStateAction<Task[]>): void {
            throw new Error('Function not implemented.')
        } } setTotalEstimatedUnassignedTime={function (value: SetStateAction<number>): void {
            throw new Error('Function not implemented.')
        } } setEngineerTableData={function (value: SetStateAction<Engineer[]>): void {
            throw new Error('Function not implemented.')
        } }/>)
        })

    test("renders", () => {
        expect(screen.getByText("Assign Task")).toBeVisible()
    })

    test("displays assign task description", async () => {
        const element = await screen.findByTestId("assignTaskDescription")
        expect(element).toBeVisible()
    })

    afterEach(() => {
        cleanup()
    })
})