import React from "react"; // 逻辑控制 数据->VDOM
// import ReactDom from "react-dom"; // 渲染实际DOM VDOM-> DOM

class LifeCycle extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            count: 0
        }
        console.log('constructor');
    }
    // 已废弃的生命舟曲
    // componentWillMount
    // componentWillUpdate
    // componentWillReceiveProps
    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps', props, state);
        const { count } = state;
        return count > 4 ? {count: 0} : null;
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState){
        const { count } = nextState
        console.log('shouldComponentUpdate', nextState, this.state);
        return count !== 3;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate',prevProps, prevState);
        return {msg:'wss'};
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate',prevProps, prevState, snapshot);
    }
    stateCount= () => {
        this.setState({count: this.state.count + 1});
    }
    render() {
        console.log('render', this.props);
        const count = this.state.count
        return (
            <div>
                <h3>生命周期</h3>
                <p>{count}</p>
                <button onClick={this.stateCount}>改变count</button>
            </div>
        )
    }
}
 
export default LifeCycle;