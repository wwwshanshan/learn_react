import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
/**
 * react-router中奉行一切皆组件的思想
 * 
 * route渲染优先级 children > component > render 三种方式互斥，只可用一种
 * ·children(func) 不管location是否匹配，都会渲染内容
 * ·component(component) 只有location匹配时，才会渲染内容
 * ·children(func) 只有location匹配时，才会渲染内容
 * 
 * 跟路由添加 exact 实现精确匹配
 * 添加Switch表示仅匹配一个
 */
 export default class RouterPage extends React.Component {
    render() { 
        return(
        <div>
            <h3>routerPage</h3>
            <Router>
                
                <Link to="/">首页</Link>
                <Link to="/user">用户中心</Link>
                <Routes>
                    <Route path="/*" 
                    // children={()=><div>children</div>} 
                    element={<HomePage />}
                    // render={()=><div>render</div>}
                    />
                    <Route path="/user" element={<UserPage />} />
                    <Route element={<EmptyPage/>} />
                </Routes>
            </Router>
        </div>
        );
    }
}

class HomePage extends React.Component {
    render() { 
        return(
            <div>
                <h3>HomePage</h3>
            </div>
        );
    }
}
class UserPage extends React.Component {
    render() { 
        return(
            <div>
                <h3>UserPage</h3>
            </div>
        );
    }
}
class EmptyPage extends React.Component {
    render() { 
        return(
            <div>
                <h3>404</h3>
            </div>
        );
    }
}