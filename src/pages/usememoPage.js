import React, { useState, useMemo, useCallback, PureComponent } from 'react';
export default function useMemoPage() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');
    // 当前的计算只和count相关
    const exp = useMemo(()=>{
        console.log('computer');
        let sum = 0;
        for (let i = 0; i < count; i++) {
            sum+=i;
        }
        return sum
        // 只有count改变，当前函数才会执行
    },[count])
    const add = useCallback(()=>{
        console.log('computer');
        let sum = 0;
        for (let i = 0; i < count; i++) {
            sum+=i;
        }
        return sum
        // 只有count改变，当前函数才会执行
    },[count])
    return(
        <div>
            <h3>useMemoPage</h3>
            <p>{count}</p>
            <p>{exp}</p>
            <button onClick={()=>setCount(count + 1)}>add</button>
            <input value={value} onChange={e=>{setValue(e.target.value)}}/>
            <Child addClick={add}></Child>
        </div>
    )
}
class Child extends PureComponent {
    render() {
        console.log('child render');
        const {addClick} = this.props;
        return (<div>
            <h3>child </h3>
            <button onClick={()=>{console.log(addClick())}}>add</button>
        </div>);
    }
}
