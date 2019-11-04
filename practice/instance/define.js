import Vue from 'vue'

//全局祖册组件
const comp = {
  props:{
    active:Boolean,
    isFun:Function,
    propOne:String,
  },
  methods: {
    handleChange(){
      this.isFun()
    }
  },
  template: `<div>
    <input v-model="text" type='text'>
    <span v-show='active' @click='handleChange'>this is active</span>
    <span>{{propOne}}</span>
  </div>`,
  data() {
    return {
      text: '123'
    }
  }
}
// Vue.component('Comp',comp);


new Vue({
  components: {
    Comp: comp,

  },
  el: '#root',
  data:{
    prop1:'1'
  },
  methods: {
    handler(){
      this.prop1+=1
    }
  },
  template: ` <div>
    <comp :active='true' @click='handler' :prop-one="prop1" :isFun='handler'></comp>
    <comp :active='false'></comp>
  </div>`
})

// 我们在使用data其定义组件中的数据时，如果这个组件不是通过new Vue方式生成的，而是注册到全局或者注册到某一个实例里去使用的话，那么一定要试data是function，而且要return我们想要的数据结构。
// 在定义组件时有个非常重要的内容就是props，props是用来定义这个组件在外部使用时他的一些可变的行为。也就是说，在定义一个组件的时候我们希望这个组件帮我们解决一些通用性的问题，但是在组件使用的小的方向会有一些差异，这些差异就通过props来体现。我们来通过props来制定一些可以配置的行为。