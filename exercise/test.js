constructor(props) {
    super(props);
    this.state = {
        stateProp1: value1,
        stateProp2: value2
    }
}

this.state.statePropertyName

this.setState = {
    stateProp1 = value1,
    stateProp2 = value2
}

/* 
    谈一谈 react 中的 props
        理解：
            1. 每个组件实例对象都会有 props(properties 的简写)属性。
            2. 组件标签的所有属性都保存在 props 中。
        作用：
            1. 通过标签属性从组件外到组件内传递变化的数据。
            2. 注意：组件内部不要修改 props 数据。
    
    谈一谈 react 中的 refs
        1. 组件内的标签都可以定义 ref 属性来标识自己。
        2. 在组件中可以通过 this.createRef.current/this.funcRef/this.stringRef 来得到对应的真实 DOM 元素。
        3. 作用：通过 ref 获取组件内容特定的标签对象，进行读取其相关数据。
*/