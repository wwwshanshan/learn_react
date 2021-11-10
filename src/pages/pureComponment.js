import React, { PureComponent } from 'react'
/**
 * render渲染相同内容 使用PureComponent 提高性能
 * 
 * class写法 浅比较
 * 
 * PureComponent与Component相似，
 * Component并未实现shouldComponentUpdate
 * PureComponent以浅层对比prop和state的方式实现该函数
 */
export default class PureComponmentPage extends PureComponent {
    constructor(props){
        super(props);
        this.state = {count: 0, obj:{num:0}}
    }
    setCount=()=>{
        this.setState({count:100, obj:{num:1000}})
    }  
    // shouldComponentUpdate(nextProps,nextState) {
    //     return nextState.count !== this.state.count
    // }
    render() {
        const {count, obj} = this.state
        console.log(count, obj);
        return (
            <div>
                <h3>PureComponmentPage</h3>
                <button onClick={this.setCount}>{count}</button>
            </div>
        )
    }
}
