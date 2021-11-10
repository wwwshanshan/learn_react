import React from 'react';
import { connect } from 'react-redux';

/*
Provider: 为后代组件提供store
connect: 为组件提供数据和变更的方法
*/
class ReactReduxPage extends React.Component {
    render() { 
        console.log('props',this.props);
        const {num, add, minus} = this.props;
        return (
        <div>
            <h3>reactReduxPage</h3>
            <p>{num}</p>
            <button onClick={add}>add</button>
            <button onClick={minus}>minus</button>
            {/*方法一 <button onClick={()=>dispatch({type: 'add'})}>add</button>
            <button onClick={()=>dispatch({type: 'minus'})}>minus</button> */}
        </div>
        );
    }
}
 
export default connect(
    // mapStateToProps 把state映射到props
    state => ({num: state}),
    // mapDispatchToProps 把dispatch映射到props
    {
        // 方法二
        add:()=>({type: 'add'}),
        minus:()=>({type: 'minus'}),
    }
)(ReactReduxPage);
