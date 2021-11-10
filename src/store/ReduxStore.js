const { createStore } = require("redux");

/**
 * createStore 创建store
 * reducer 初始化、修改状态函数
 * getState 获取状态值
 * dispatch 提交更新
 * subscribe 变更订阅
 */
// 定义state初始化和修改规则
function countReducer(state = 0, action) {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'minus':
            return state - 1;
        default: return state
    }
}
const store  = createStore(countReducer);
export default store