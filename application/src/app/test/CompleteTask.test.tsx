import '@testing-library/jest-dom'
import { expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import CompleteTask from '../component/task_behavior/CompleteTask'

import { SetStateAction } from 'react'
import { Engineer, Manager, Model, Task } from '../entity/model'

describe("CompleteTask", () => {
    beforeEach(() => {
        const model : Model = new Model(new Manager([], [], [], 0, 0))
        render(<CompleteTask manager={model.manager} setEngineerTableData={function (value: SetStateAction<Engineer[]>): void {
            throw new Error('Function not implemented.')
        } } setCompletedTaskTableData={function (value: SetStateAction<Task[]>): void {
            throw new Error('Function not implemented.')
        } } setTotalCompletedTime={function (value: SetStateAction<number>): void {
            throw new Error('Function not implemented.')
        } }/>)
        })

    test("displays complete task description", async () => {
        const element = await screen.findByTestId("completeTaskDescription")
        expect(element).toBeVisible()
    })

    afterEach(() => {
        cleanup()
    })
})