import Vue from "vue"

const component = {
  model:{
    prop:'value1',
    event:'change'
  },
  props: ['value','value1'],
  template: `<input type="text" @input='handle' :value='value1'>`,
  methods: {
    handle: function (e) {
      this.$emit('change', e.target.value)
    }
  }
}

new Vue({
  components: { CompOne: component },
  el: '#root',
  data() {
    return {
      value: '123'
    }
  },
  template: `
  <div>
    <comp-one v-model='value'></comp-one>
  </div>`
})
//这就是在组件中是想数据双向绑定最简单的方式，我们只需要在一个组件中加入props，有一个value。当组件要修改这个数据的时候去emit一个input事件把新的值emit出去，这就实现了一个vue的双向绑定。我们v-model这个指令里面，其实就是给我们这个组价增加了一个value的props以及增加了一个时间监听，v-model帮我们处理了这个数据双向绑定的逻辑。本质上v-model的实现如下注释。


//原始实现数据双向绑定的方法
// new Vue({
//   components: { CompOne: component },
//   el: '#root',
//   data() {
//     return {
//       value: '123'
//     }
//   },
//   template: `
//   <div>
//     <comp-one :value="value" @input="value=arguments[0]"></comp-one>
//   </div>`
// })


//