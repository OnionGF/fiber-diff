/*
 * @Author: onino
 * @Date: 2022-10-02 09:15:31
 * @LastEditors: onino
 * @LastEditTime: 2022-10-02 21:28:33
 * @Description: 请填写简介
 */
import React, { render, Component } from './react'

const root = document.getElementById('root')
// const jsx = (
//     <div>
//         <p>Hello React</p>
//         <p>Hello fiber</p>
//     </div>
// )
// render(jsx, root)

// setTimeout(() => {
//     const jsx = (
//         <div>
//             <div>奥利给</div>
//             {/* <p>Hello fiber</p> */}
//         </div>
//     )
//     render(jsx, root)
// }, 2000)

class Greating extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "张三"
        }
    }

    render() {
        console.log(38, this.state)
        return (
            <div>
                {this.props.title}
                hahahaha 
                {this.state.name}
                <button onClick={() => this.setState({ name: "李四" })}>button</button>
            </div>
        )
    }
}
// render(<Greating title="奥利给" />, root)

function FnComponent(props) {
    return <div> {props.title} Fncomponent</div>
}

render(<FnComponent title="hello " />, root)
