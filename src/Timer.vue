<template lang="pug">

span.vueClock-timer {{ formattedTimer() }}

</template>


<script>

import interval from 'raf-funcs/interval';
import template from 'lodash.template';
import moment from 'moment';

export default {
  props: {
    format: {
      type: String,
      default: '<%= days %>d <%= hours %>h <%= minutes %>m <%= seconds %>s'
    },
    paused: false
  },
  data () {
    return {
      timer: moment.duration(0, 'seconds')
    }
  },
  methods: {
    update: function() {
      if (!this.paused) {
        this.timer = this.timer.add(1, 's');
        this.$emit('timerTick', timer);
      }
      return this.timer;
    },
    formattedTimer: function() {
      var compiled = template(this.format);
      var formatted = compiled({
        timer: this.timer,
        humanize: this.timer.humanize(),
        milliseconds: this.timer.milliseconds(),
        seconds: this.timer.seconds(),
        minutes: this.timer.minutes(),
        hours: this.timer.hours(),
        days: this.timer.days(),
        weeks: this.timer.weeks(),
        months: this.timer.months(),
        years: this.timer.years(),
      });
      return formatted;
    },
    reset: function() {
      this.timer = moment.duration(0, 'seconds');
    }
  },
  beforeCreate: function() {
  },
  beforeMount: function() {
    this.intervalRef = interval(() => {
      this.timer = this.update();
    }, 1000);
  },
  destroyed: function() {
    this.intervalRef.cancel();
  }
}

</script>


<style lang="stylus" scoped>

.vueClock-timer
  color: blue

</style>