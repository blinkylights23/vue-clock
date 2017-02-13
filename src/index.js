import Vue from 'vue';
import ClockComponent from './Clock.vue';
import TimerComponent from './Timer.vue';
import CountdownComponent from './Countdown.vue';

const vm = new Vue({
  el: '#components',
  data: {},
  components: {
    clock: ClockComponent,
    timer: TimerComponent,
    countdown: CountdownComponent
  }
})
