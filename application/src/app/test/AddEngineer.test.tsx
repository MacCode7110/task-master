import '@testing-library/jest-dom'
import { expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import AddEngineer from '../component/engineer_behavior/AddEngineer'
import { SetStateAction } from 'react'
import { Engineer, Manager, Model } from '../entity/model'

describe("AddEngineer", () => {
    beforeEach(() => {
        const model : Model = new Model(new Manager([], [], [], 0, 0))
        render(<AddEngineer manager={model.manager} setEngineerTableData={function (value: SetStateAction<Engineer[]>): void {
            throw new Error('Function not implemented.')
        } }/>)
    })

    test("renders", () => {
        expect(screen.getByText("Add Engineer")).toBeVisible()
    })

    test("displays add engineer description", async () => {
        const element = await screen.findByTestId("addEngineerDescription")
        expect(element).toBeVisible()
    })

    afterEach(() => {
        cleanup()
    })
})