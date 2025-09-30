import '@testing-library/jest-dom'
import { expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import CompletedTaskTable from '../component/task_view/CompletedTaskTable'

describe("CompleteTaskTable", () => {
    beforeEach(() => {
        render(<CompletedTaskTable completedTaskList={[]} />)
    })
    
    test("renders", () => {
        expect(screen.getByText("Completed Task Table")).toBeVisible()
    })

    afterEach(() => {
        cleanup()
    })
})