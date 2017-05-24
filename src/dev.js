import Vue from 'vue';
import ClockComponent from './Clock.vue';
import TimerComponent from './Timer.vue';
import CountdownComponent from './Countdown.vue';


const timer1 = TimerComponent();

const vm = new Vue({
  el: '#components',
  data: {},
  components: {
    clock: ClockComponent,
    timer: timer1,
    countdown: CountdownComponent
  },
  mounted: function() {
    this.$refs.clock1.$on('clockTick', dt => {
      console.log('clockTick');
    });
    this.$refs.countdown1.$on('countdownTick', cd => {
      console.log('countdownTick');
    });
    this.$refs.countdown1.$once('countdownEnd', cd => {
      console.log(' >>> countdownEnd <<<');
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
