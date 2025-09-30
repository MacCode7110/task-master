import '@testing-library/jest-dom'
import { expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import UnassignedTaskTable from '../component/task_view/UnassignedTaskTable'

describe("UnassignedTaskTable", () => {
    beforeEach(() => {
        render(<UnassignedTaskTable unassignedTaskList={[]} />)
    })
    
    test("renders", () => {
        expect(screen.getByText("Unassigned Task Table")).toBeVisible()
    })

    afterEach(() => {
        cleanup()
    })
})