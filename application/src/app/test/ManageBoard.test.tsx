import '@testing-library/jest-dom'
import { expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import ManageBoard from '../page'

describe("ManageBoard", () => {
    beforeEach(() => {
        render(<ManageBoard />)
    })

    test("renders", () => {
        expect(screen.getByText("Task Master")).toBeVisible()
    })

    test("displays totalEstimatedUnassignedTime", async () => {
        const element = await screen.findByTestId("totalEstimatedUnassigned")
        expect(element).toBeVisible()
    })

    test("displays totalCompletedTime", async () => {
        const element = await screen.findByTestId("totalCompleted")
        expect(element).toBeVisible()
    })

    afterEach(() => {
        cleanup()
    })
})