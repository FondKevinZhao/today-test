/* webpack.config.js
webpack.config.js
webpack.config.js
webpack.config.js
webpack.config.js

{
    test: /\.js$/,
    use: [
        'style-loader',
        'css-loader',
        'less-loader'
    ]
}

moudle: {
    rules: [
        // 处理less，并且将处理后的css整合到js汇总个，最后将js中的css以内嵌的方式加到html中
    ]
}

npm i less - loader @7 .0 .2 - D
webpack
    '../dist/js/app.js'

node_modules
node_modules
node_modules
node_modules
node_modules
    'style-loader'

"eslintConfig": {
    "parserOption": {
        "ecmaVersion": 6,
        "sourceType": 'module'
    },
    "env": {
        "browser": true,
        "node": true
    },
    "global": {
        "$": "readyonly"
    },
    "rules": {
        "no-console": 0,
        "eqeqeq": 2,
        "no-alert": 2
    },
    "extends": "eslint:recommended"
}
@media and screen (min-width: px值) {样式}

bootstrap 是一个响应式框架
    容器
        .container(自带内边距) .container-fluid(占满整个屏幕)

    栅格系统
        有个盒子在平台上占6份 col-sm-6 
        手机：xs
        平板：sm
        普通pc：md
        超大屏幕：lg
        山歌系统把一行分成12份
        注意：栅格系统在使用的时候，一定要包裹在容器中，而且要使用.row来表示一行
        
    响应式工具
        控制盒子的展示和隐藏

        展示：visible-尺寸-block
        隐藏：hidden-尺寸 
        
        */

/* es6:
    es5 +:
    1. 严格模式： js不是一个特别规范的语言， 但是在开发中希望开发者书写代码时更加规范， 所以要使用严格模式， 'use strict'
开启严格模式 要写在第一行
2. JSON(重要)
JSON是一个JavaScript Object Notification
作用：
1. 存储数据(xxx.json)
2. 数据交互(服务器和客户端之间交互)

需求1： 要把json格式的字符串转成js对象
JSON.parse(json格式的字符串) 返回一个js对象
需求2： 把json对象转成json字符串
JSON.stringify(json对象) 返回一个字符串

let arr = [1, 2, 3, 4];
// 需求：将数组中的值，分别赋值给变量 a, b, c, d
// 这行代码的作用，首先在全局中定义了4个变量，然后按照数组的顺序，将数组中的值，一次赋值给四个变量
let [a, b, c, d] = arr
console.log(a, b, c, d);

// 数组的解构赋值
let [c, d] = [1];
console.log(c, d);

// 在解构的时候，可以给变量设置默认值
let [e = 2, f = 20] = [10]
console.log(e, f);

// 可以使用rest参数,...变量名 可以接受后面的所有赋值，表现形式是一个数组
// 剩余参数
let [g, h, ...rest] = [10, 11, 2, 33, 4, 5, 6, 7];
console.log(g, h, rest);

let [a, [b, c, d], e] = [1, [2, 3, 4], 5];
console.log(a, b, c, d, e);

// 交换变量
let a = 1;
let b = 2;
// 注意：由于a, b已经被声明过，所以下面不要再写let
[b, a] = [a, b];
console.log(a, b);
 */
/* 
let [hoo = 2,foo = hoo] = [];
console.log(foo, hoo);  */

/* // 对象的解构赋值
let obj = {
    name: 'zs',
    age: 18,
}
let {
    a,
    b
} = obj;
console.log(obj.age, obj.name);
// 注意：对象解构时，变量名要求和对象的属性名一致，顺序随便写。 */

// let a = 1,
//     b = 2;
// /* console.log({
//     a: a,
//     b: b
// }); */
// console.log({
//     a,
//     b
// });

// let {
//     foo: c,
//     hoo: d
// } = {
//     foo: 1,
//     hoo: 2
// };
// console.log(c, d);
// console.log(foo, hoo);
// 这个写法不常用

/* let {
    x,
    y = 10
} = {
    x: 1,
    y: 2
};
console.log(x, y); */

// 由于数组也是对象，所以数组也可以使用对象属性的解构
// 0在数组中是下标，如果把数组看做对象，下标其实是对象中的键
// 0：first 就是将0这个键对应的值，赋值给变量first
/* let arr = [1, 2, 3, 4];
let {
    0: first,
    [arr.length - 1]: last
} = arr;

console.log(first, last); */

/* let {log} = console;
log(1); */

// 函数传参数
/* function fn1 ([x, y, z]) {
    console.log(x, y, z);
};
fn1([1, 2, 3]); */

/* function fn2 ([x, y, z]) {
    console.log(x, y, z);
};
fn2(['y: 2', 'x: 1', 'z: 3']); */

/*
    1. 要创建一个对象，这个对象的sex属性不可写？
        Object.create(原型对象，{
            sex: {
                value: '男'
                writeable: true
            }
        })

    2. 已有一个对象，使用object的静态方法，添加属性(age)，属性不可枚举(遍历)
        let obj = {name: 'zs'}
        Object.defineProperty(被操作的对象，'属性名', {
            value: 值，
            enumerate: true
        })

    3. 一个对象中的属性可写，不可读该如何实现？
        let obj = {
            set 属性名(){}
        }

    4. 块作用域
        {
            let/const a = 1;
        }
    5. let
        1. 必须要先声明，后使用。
        2. 不可以重复声明。
        3. 能不能只声明，不赋值？(可以)

    6. const
        1. 必须要先声明，后使用。
        2. 不可以重复声明。
        3. 声明的时候，必须赋值。
        4. const里面的值是不能修改。

    7. 数组解构赋值
        [1, 2, 3, 4], 需要将这里的值赋值给变量a, b, c, d。
        let [a, b, c, d] = [1, 2, 3, 4];

        [1, 2, 3, 4] 将1存储到a变量中，其他的存储到另外一个变量中
        let [a, ...arr] = [1, 2, 3, 4]

        [1, 2, 3, 4] 将数字存储到变量a, b, c, d中，然后要设置默认值
        let [a = 3, b, c, d] = [1, 2, 3, 4];


    8. 对象解构赋值
*/