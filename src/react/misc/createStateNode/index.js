/*
 * @Author: onino
 * @Date: 2022-10-02 11:07:13
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 12:32:22
 * @Description: 请填写简介
 */

import { createDOMElement  } from "../DOM"
import { createReactInstance } from "../createReactInstance"
const createStateNode = fiber => {
    /**
     *  fiber.tag === "host_component" 普通节点
     */    
    if (fiber.tag === "host_component") {
        return createDOMElement(fiber)
    } else {
        // 处理组件的情况
        return createReactInstance(fiber)
    }
}

export default createStateNode