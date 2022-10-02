/*
 * @Author: onino
 * @Date: 2022-10-02 15:23:48
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 15:26:18
 * @Description: 请填写简介
 */

const getRoot = instance => {

    let fiber = instance.__fiber
    while (fiber.parent) {
        fiber = fiber.parent
    }
    return fiber
}

export default getRoot