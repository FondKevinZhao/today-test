/* 
  Vue 插件：用来扩展Vue的功能
  扩展原型的功能，给实例对象使用
  扩展 Vue的功能，给 Vue 使用
  扩展全局指令、全局过滤器、全局组件等
*/

// function
function myPlugin(Vue) {
  // 扩展原型的功能
  Vue.prototype.$method = function () {
    console.log("$method");
  };
  // 扩展Vue的功能
  Vue.method = function() {
    console.log("method");
  };
  // 扩展全局指令
  Vue.directive("upper-case", (el, binding) => {
    el.textContent = binding.value.toUpperCase();
  })
}