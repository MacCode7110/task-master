import '@testing-library/jest-dom'
import { expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import EngineerTable from '../component/engineer_view/EngineerTable'

describe("EngineerTable", () => {
    beforeEach(() => {
        render(<EngineerTable engineerList={[]} />)
    })
    
    test("renders", () => {
        expect(screen.getByText("Engineer Table")).toBeVisible()
    })

    afterEach(() => {
        cleanup()
    })
})