import React from 'react';
import store  from '../store/ReduxStore';
class ReduxPage extends React.Component {
    // componentDidMount() {
    //     store.subscribe(() => {
    //         console.log("数据发生变化");
    //         this.forceUpdate();
    //     })
    // }
    render() { 
        console.log(store);
        return (
        <div>
            <h3>reduxPage</h3>
            <p>{store.getState()}</p>
            <button onClick={() => store.dispatch({type:'add'})}>add</button>
            <button onClick={() => store.dispatch({type:'minus'})}>minus</button>
        </div>
        );
    }
}
 
export default ReduxPage;