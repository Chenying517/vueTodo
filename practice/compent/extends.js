import Vue from 'vue'

//全局祖册组件
const comp = {
  props: {
    active: Boolean,
    propOne: String,
  },
  methods: {
    handleChange() {
      this.$emit('change')
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
  data: {
    prop1: '1'
  },
  methods: {
    handler() {
      this.prop1 += 1
    }
  },
  mounted() {
    console.log(this.$refs.comp1)
  },
  template: ` <div>
    <comp ref="comp1" :active='true' @change='handler' :prop-one="prop1" ></comp>
    <comp :active='false'></comp>
  </div>`
})
