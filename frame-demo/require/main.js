/**
 * Created by hebejin on 2016/7/18.
 */
require(['redux'], function (redux){
    function count (state, action) {
        var defaultState = {
            year: 2015,
        };
        state = state || defaultState;
        switch (action.type) {
            case 'add':
                return {
                    year: state.year + 1
                };
            case 'sub':
                return {
                    year: state.year - 1
                }
            default :
                return state;
        }
    }

    // store的创建
    // var createStore = require('redux').createStore;
    var createStore = redux.createStore;
    var store = createStore(count);

    // store里面的数据发生改变时，触发的回调函数
    store.subscribe(function () {
        console.log('the year is: ', store.getState().year);
    });

    // action: 触发state改变的唯一方法(按照redux的设计思路)
    var action1 = { type: 'add' };
    var action2 = { type: 'add' };
    var action3 = { type: 'sub' };

    // 改变store里面的方法
    store.dispatch(action1); // 'the year is: 2016
    store.dispatch(action2); // 'the year is: 2017
    store.dispatch(action3); // 'the year is: 2016
});