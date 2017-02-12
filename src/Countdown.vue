<template lang="pug">

span.vueClock-countdown {{ currentCd }}

</template>


<script>

import interval from 'raf-funcs/interval';
import moment from 'moment';

export default {
  props: {
    format: {
      type: String,
      default: 'y[y] d[d] h[h] m[m] s[s]'
    },
    end: {
      type: String
    }
  },
  data () {
    return {
      currentCd: moment.duration(0, 'seconds')
    }
  },
  methods: {
    updateCd: function() {
      let cd = moment.duration(this.endDt - moment());
      console.log(cd.humanize());
      return cd;
    }
  },
  beforeCreate: function() {
    if (!this.end) {
      this.endDt = moment('2020-01-20 12:30');
    } else {
      this.endDt = moment(end);
    }
  },
  beforeMount: function() {
    this.intervalRef = interval(() => {
      this.currentCd = this.updateCd();
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