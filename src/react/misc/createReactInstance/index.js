/*
 * @Author: onino
 * @Date: 2022-10-02 12:29:32
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 12:58:15
 * @Description: 判断是类组件 还是函数组件 并返回对应的 实例对象
 */


export const createReactInstance = fiber => {
    let instance = null
    if (fiber.tag === "class_component") {
        instance = new fiber.type(fiber.props) // 类组件 返回实例
    } else {
        instance = fiber.type // 函数组件 返回函数本身
    }
    return instance
}