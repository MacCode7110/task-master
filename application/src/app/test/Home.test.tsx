import '@testing-library/jest-dom'
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../page'
import { Manager, Model } from '../entity/model'

describe("home", () => {
    test("renders", () => {
        render(<Home />)
        expect(screen.getByText("Task Master"))
    })

    test('instantiates model', () => {
        // let model = new Model(new Manager([], [], [], 0, 0))
        // expect(model.manager.getEngineerList()).toStrictEqual([])
        // expect(model.manager.getUnassignedTaskList()).toStrictEqual([])
        // expect(model.manager.getCompletedTaskList()).toStrictEqual([])
        // expect(model.manager.getTotalEstimatedUnassignedTime()).toBe(0)
        // expect(model.manager.getTotalCompletedTime()).toBe(0)
    })
})