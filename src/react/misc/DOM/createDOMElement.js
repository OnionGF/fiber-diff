/*
 * @Author: onino
 * @Date: 2022-10-02 11:08:36
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 11:09:27
 * @Description: 请填写简介
 */
/*
 * @Author: onino
 * @Date: 2022-10-01 10:39:24
 * @LastEditors: onino
 * @LastEditTime: 2022-10-01 12:11:14
 * @Description: 创建 dom 节点
 */

import updateNodeElement from './updateNodeElement';
export default function createDOMElement(virtualDOM) {

    let newElement = null;
    if (virtualDOM.type === 'text') {
        // 根节点是文本节点
        newElement = document.createTextNode(virtualDOM.props.textContent)
    } else {
        // 根结点是元素节点
        newElement = document.createElement(virtualDOM.type)

        // 为元素添加属性
        updateNodeElement(newElement, virtualDOM)
    }

    return newElement;
}