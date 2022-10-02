/*
 * @Author: onino
 * @Date: 2022-10-02 12:29:32
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 12:58:15
 * @Description: 请填写简介
 */


export const createReactInstance = fiber => {
    let instance = null
    if (fiber.tag === "class_component") {
        instance = new fiber.type(fiber.props)
    } else {
        instance = fiber.type
    }
    return instance
}