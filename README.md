# react-shop-sample
sample project

## redux

redux 主要用于管理全局的state, 整个state存放在一个tree结构中. 

- store: 保存state ,通过getState()获取, 通过dispatch(action)进行更新,通过subscribe()进行监听
- action: 通过dispatch(action)进行触发,action作为一个标识用来查找指定的更新方法.必须提供type,操作类型
- reducer: reducer才是更新state的方法, 在众多方法中通过action.type进行区分.

Store->dispatch->action->reducer: 需要更新state,首先dispatch触发操作,指定特定的action.type, 最后找到reducer进行更新操作


##reduxsauce

redux的一个工具类,用于快速构建redux.

- init-state: reducer将接受一个sate,state可以给予一个默认的初始化
    `const INITIAL_STATE = {  name ：null ，  age ：null }      `
- reducer : reducer(state, action) 构建一个reducer方法,用于修改state
    `
    export  const sayHello = （state = INITIAL_STATE ，action ） => {        
      const { age ，name } =  action     
      return { ... state ，  age ，  name  }  
    }
    `
- reducer-->action: reducer通过action.type才能找到合适的方法修改state
    `
    export const HANDLERS = {
      [Types.SAY_HELLO]: sayHello,
      [Types.SAY_GOODBYE]: sayGoodbye
    }
    `
- createReducer: 创建reducer(state, handlers)
- createTypes: 创建Type
- createAction: 创建一个Action返回Types,Creators 即(返回action.type和 action creator function)


## react-redux

react-redux 主要是redux集成react提供的工具类

- connect : UI组件通过store.subscribe()进行订阅state, 通过connect实现自动的UI关联.
- mapStateToProps : connect之后UI将可以通过该方法进行state->prop的映射
- mapDispatchToProps: connect之后UI将通过该方法进行 dispatch -> prop的映射
- Provider: 根组件下使用Provider包裹,则所有组件都可以访问store

## redux-saga

redux的一个中间件 saga.主要用于处理异步请求.比如提供了redux-thunk的类似支持.
- takeEvery: 类似于redux-thunk,异步请求
- takeLatest: 执行最后一个异步请求,之前的将中断
- call: 用于异步请求比如API.fetch
- apply: 同call类似,参数不同
- cps: 同call类似, 参数不同
- put: 触发dispatch(action)
- try-catch: 异常捕捉,中断的任务将抛出SagaCancellationException 异常.
- take: 主动订阅action
- fork: 后台运行,无阻塞调用,可以通过cancel(task) 进行取消
- yield [call1,call2...]: 多任务同时执行
- race: 请求竞赛,先返回结果为胜利者,失败者将自动取消
- yield* : 排序



## react-persist
本地存储方案

- persistStore(store,[config,callback]): 


## seamless-immutable

seamless-immutable 提供了小巧的不可变对象支持, 类似于其他immutable工具包一样, 不可变对象在处理state时候讲更加快捷和安全

- 静态语法: 引入对象之后可以通过static使用也可以直接使用
```javascript
var Immutable = require("seamless-immutable").static;
Immutable.setIn(obj, 'key', data)

/** default**/
var Immutable = require("seamless-immutable");
obj.setIn('key', data)
```
- Immutable.from: 构造一个不可变对象
- Immutable: 构造一个数组不可变对象
- Immutable.flatMap: 数组映射
- Immutable.asObject: 转换成map结构
- Immutable.asMutable: 数组拷贝({deep: true}开启深层拷贝)
- Immutable.isImmutable: 是不是不可变对象
- Immutable.merge: 合并对象,覆盖
- Immutable.replace: 替换
- Immutable.set: 设置对象指定的key,value
- Immutable.merge: 合并
- Immutable.setIn/getIn: 支持内嵌
- Immutable.update/updateIn: 
- Immutable.without: 删除

## react-navigator
官方推荐的导航组件

- StackNavigator: 一个导航的堆栈
```javascript
StackNavigator(RouteConfigs, StackNavigatorConfig)
```
- TabNavigator: tab切换效果
```javascript
TabNavigator(RouteConfigs, TabNavigatorConfig)
```
- DrawerNavigator: drawer效果

1. 如何调整默认的样式?(Tabnavigator举例)
我们通过修改TabNavigatorConfig
- tabBarComponent: 'TabBarBottom '(ios默认),'TabBarTop'(android默认)
- tabBarPosition: 位置 'top', 'bottom'
- tabBarOptions:
    - activeTintColor : 激活颜色
    - activeBackgroundColor : 激活状态背景色
    - inactiveTintColor : 默认颜色
    - inactiveBackgroundColor : 默认背景色
    - style: Tab bar样式(整体)
    - labelStyle: 文本样式 
    - tabStyle : 单个tab选项的样式
    - iconStyle: 图标样式
    
    
### react-native-swiper



