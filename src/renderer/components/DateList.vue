<template>
  <div class="date-list-com">
    <ul>
      <li class="active">2017-06-15</li>
      <li>2017-06-14</li>
      <li>2017-06-13</li>
    </ul>
  </div>
</template>
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
