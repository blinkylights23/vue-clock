<template lang="pug">

span.vueClock-countdown {{ formattedCountdown() }}

</template>


<script>

import interval from 'raf-funcs/interval';
import template from 'lodash.template';
import moment from 'moment';

export default {
  props: {
    format: {
      type: String,
      default: '${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s'
    },
    end: {
      type: String
    }
  },
  data () {
    return {
      countdown: moment.duration(0, 'seconds')
    }
  },
  methods: {
    update: function() {
      let cd = moment.duration(this.endDt - moment());
      this.$emit('countdownTick', cd);
      if (cd.asSeconds() <= 0) {
        this.$emit('countdownEnd', cd);
      }
      return cd;
    },
    formattedCountdown: function() {
      var compiled = template(this.format);
      var formatted = compiled({
        countdown: this.countdown,
        humanize: this.countdown.humanize(),
        milliseconds: this.countdown.milliseconds(),
        seconds: this.countdown.seconds(),
        minutes: this.countdown.minutes(),
        hours: this.countdown.hours(),
        days: this.countdown.days(),
        weeks: this.countdown.weeks(),
        months: this.countdown.months(),
        years: this.countdown.years(),
      });
      return formatted;
    }
  },
  created: function() {
    if (!this.end) {
      this.endDt = moment('2021-01-20 12:30');
    } else {
      this.endDt = moment(this.end);
    }
  },
  beforeMount: function() {
    this.intervalRef = interval(() => {
      this.countdown = this.update();
    }, 1000);
  },
  destroyed: function() {
    this.intervalRef.cancel();
  }
}

</script>


<style lang="stylus" scoped>

.vueClock-countdown
  color: orange

</style>