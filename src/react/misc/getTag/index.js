/*
 * @Author: onino
 * @Date: 2022-10-02 11:17:08
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 12:54:27
 * @Description: 请填写简介
 */

import { Component } from "../../Component"
const getTag = vdom => {
    if (typeof vdom.type === 'string') {
        return "host_component"
    } else if (Object.getPrototypeOf(vdom.type) === Component) {
        return "class_component"
    } else {
        return "function_component"
    }
}

export default getTag