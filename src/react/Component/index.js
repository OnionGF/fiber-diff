/*
 * @Author: onino
 * @Date: 2022-10-02 12:23:10
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 15:14:58
 * @Description: 请填写简介
 */

import { scheduleUpdate } from '../reconciliation'
export class Component {
    constructor(props) {
        this.props = props
    }

    setState(partialState) {
        scheduleUpdate(this, partialState)
    }
}