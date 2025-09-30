import '@testing-library/jest-dom'
import { expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import RemoveEngineer from '../component/engineer_behavior/RemoveEngineer'
import { SetStateAction } from 'react'
import { Engineer, Manager, Model } from '../entity/model'

describe("RemoveEngineer", () => {
    beforeEach(() => {
        const model : Model = new Model(new Manager([], [], [], 0, 0))
        render(<RemoveEngineer manager={model.manager} setEngineerTableData={function (value: SetStateAction<Engineer[]>): void {
            throw new Error('Function not implemented.')
        } }/>)
    })

    test("renders", () => {
        expect(screen.getByText("Remove Engineer")).toBeVisible()
    })

    test("displays remove engineer description", async () => {
        const element = await screen.findByTestId("removeEngineerDescription")
        expect(element).toBeVisible()
    })

    afterEach(() => {
        cleanup()
    })
})