import Vue from 'vue'
import ClockComponent from './Clock.vue'
import CountdownComponent from './Countdown.vue'

const vm = new Vue({
  el: '#components',
  data: {},
  components: {
    clock: ClockComponent,
    countdown: CountdownComponent
  }
})
