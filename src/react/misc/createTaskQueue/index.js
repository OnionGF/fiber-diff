/*
 * @Author: onino
 * @Date: 2022-10-02 10:10:06
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 10:27:39
 * @Description: 请填写简介
 */


const createTaskQueue = () => {
    const taskQueue = []
    return {
        /**
         * 向任务队列中添加任务
         */        
        push: item => taskQueue.push(item),
        /**
         * 从任务队列中获取任务
         */        
        pop: () => taskQueue.shift(),
        /**
         * 判断任务队列中是否有任务
         */   
        isEmpty: () => taskQueue.length === 0   

    }
}

export default createTaskQueue