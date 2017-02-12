<template lang="pug">

span.vueClock-clock {{ currentDt }}

</template>


<script>

import interval from 'raf-funcs/interval';
import moment from 'moment';

function getLocale () {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0]
  } else {
    return navigator.language;
  }
}

export default {
  props: {
    format: {
      type: String,
      default: 'MMMM Do YYYY, h:mm:ss a'
    },
    locale: {
      type: String,
      default: getLocale
    }
  },
  data () {
    return {
      currentDt: this.updateDt()
    }
  },
  methods: {
    updateDt: function() {
      let dt = moment().format(this.format);
      return dt;
    }
  },
  beforeMount: function() {
    moment.locale(this.locale);
    this.intervalRef = interval(() => {
      this.currentDt = this.updateDt();
    }, 1000);
  },
  destroyed: function() {
    this.intervalRef.cancel();
  }
}

</script>


<style lang="stylus" scoped>

.vueClock-clock
  color: green

</style>