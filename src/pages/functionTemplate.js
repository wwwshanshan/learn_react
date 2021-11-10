import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
export function FunctionComponent(props) {
    const [data, setDate] = useState(new Date());
    useEffect(()=>{
        // 相当于componentDidMount挂载后 componentDidUpdate更新后 componentWillUnmount卸载前 的集合
        const timer = setInterval(()=>{
            setDate(new Date());
        },1000)
        return () => {clearInterval(timer)};
    },[])
    return(
        <div>
            <h3>FunctionComponent</h3>
            <p>{data.toLocaleTimeString()}</p>
        </div>
    )
}