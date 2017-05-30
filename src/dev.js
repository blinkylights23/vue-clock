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
  },
  mounted() {
    this.$refs.clock1.$on('clockTick', dt => {
      console.log('clockTick');
    });
    this.$refs.countdown1.$on('countdownTick', cd => {
      console.log('countdownTick');
    });
    this.$refs.countdown1.$once('countdownEnd', cd => {
      console.log(' >>> countdownEnd <<<');
    });
    this.$refs.timer1.$on('timerTick', dt => {
      console.log('timerTick');
    });
  }
});


const vm2 = new Vue({
  el: '#components-args',
  data: {
    timerFormat: '<%= humanize %>'
  },
  components: {
    clock: ClockComponent,
    timer: TimerComponent,
    countdown: CountdownComponent
  }
});
