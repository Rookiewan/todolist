<template>
  <div class="date-list-com">
    <ul>
      <li :class="{'active': activeIdx === idx}" v-for="(day, idx) in dayList" :key="idx">
        {{formatTime(day)}}
      </li>
    </ul>
  </div>
</template>
<script>
import moment from 'moment'
import {
  mapActions,
  mapState
} from 'vuex'
export default {
  data () {
    return {
      activeIdx: 0
    }
  },
  created () {
    this.getDayList()
  },
  computed: {
    ...mapState({
      dayList: state => Object.keys(state.Todolist.list)
    })
  },
  methods: {
    formatTime (ts) {
      return moment(ts * 1000).format('YYYY-MM-DD')
    },
    ...mapActions([
      'getDayList'
    ])
  }
}
</script>
<style lang="scss">
.date-list-com {
  width: 20%;
  border-right: 1px solid #ccc;
  ul {
    height: 100%;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      &~li {
        border-top: 1px solid #ccc;
      }
      &.active {
        background-color: #ccc;
      }
    }
  }
}
</style>
