import Vue from 'vue'
// import defineVue from './compent/define'
// import defineVue from './compent/extends'
// import defineVue from './compent/v-model'
import defineVue from './compent/features'


// new Vue({
//   el: '#root',
//   template: `
//     <div :id="aaa" v-on:click="handleclick"
//          :class="[{active:isActive}]"
//          :style="[style,styles2]"
//     >
//       {{
//         isActive?'active':'not active'
//       }}
//       <p  v-html="html"></p>
//     </div>`,
//   data: {
//     isActive: true,
//     arr: [1, 2, 3],
//     html: '<span>123</span>',
//     aaa: 'main',
//     style:{
//       color:'red',
      
//     },
//     styles2:{
//       appearance:'none'
//     }

//   },
//   methods: {
//     handleclick() {
//       alert('1')
//     }
//   }
// })