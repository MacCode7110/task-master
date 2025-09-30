import { expect, test } from 'vitest'
import { Manager, Model } from '../entity/model'

test('home', () => {
    let model = new Model(new Manager([], [], [], 0, 0))
    expect(model.manager.getEngineerList()).toStrictEqual([])
    expect(model.manager.getUnassignedTaskList()).toStrictEqual([])
    expect(model.manager.getCompletedTaskList()).toStrictEqual([])
    expect(model.manager.getTotalEstimatedUnassignedTime()).toBe(0)
    expect(model.manager.getTotalCompletedTime()).toBe(0)
})