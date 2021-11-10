import React, { useEffect, useState } from 'react';

function HookPage() {
    // 定义count的state变量，初始为0
    const [count, SetCount] = useState(0);
    //类似生命周期 DidMount挂载后 DidUpdate更新后
    useEffect(()=>{
        // count发生变化时执行
        console.log('count Effect');
        document.title = '点击了'+ count + '次'
    },[count])
    
    return ( 
    <div>
        <h3>HookPage</h3>
        <div>{count}</div>
        <button onClick={()=>SetCount(count + 1)}>加</button>
        <p>自定义Hook:{useClock().toLocaleTimeString()}</p>
    </div> );
}

export default HookPage;

// 自定义Hook
/** 
 * 命名以use开头
 * 只能在函数最外层调用Hook，不能再循环、条件判断、子函数中调用
 * 只能在React组件中调用，还有就是自定义Hook中使用
 */
function useClock(){
    const [date, SetDate] = useState(new Date());
    useEffect(()=>{
        // didmount时执行
        console.log('time Effect');
        const timer = setInterval(() => {
            SetDate(new Date());
        }, 1000);
        // 清除定时器 类似willUnmount
        return ()=>clearInterval(timer)
    },[])
    return date
}