<template>
  <div class="home-view">
    <div class="container">
      <ul class="list">
        <li>
          <div class="item">
            <div class="status">
              <i class="iconfont icon-circle"></i>
            </div>
            <div class="input">
              <input type="text" value="第一件事">
            </div>
            <div class="options">
              <button class="btn btn-update">
                <i class="iconfont icon-update"></i>
              </button>
              <button class="btn btn-delete">
                <i class="iconfont icon-delete"></i>
              </button>
            </div>
          </div>
        </li>
        <li>
          <div class="item">
            <div class="status">
              <i class="iconfont icon-circle"></i>
            </div>
            <div class="input">
              <input type="text" value="第一件事">
            </div>
            <div class="options">
              <button class="btn btn-update">
                <i class="iconfont icon-update"></i>
              </button>
              <button class="btn btn-delete">
                <i class="iconfont icon-delete"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <div class="add-item">
        <div class="input">
          <input type="text" placeholder="Enter thing...">
        </div>
        <button class="btn btn-add"><i class="iconfont icon-add"></i></button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home-view {
  height: 100%;
  .container {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 10%;
  }
  .list {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
  }
  .item {
    display: flex;
    align-items: center;
    // background: #ddd;
    margin-top: 5px;
    // padding: 1px 0;
    // border: 1px solid #ccc;
    // border-radius: 4px;
    .input {
      flex: 1;
    }
    .status {
      font-size: 0;
    }
    .options {
      font-size: 0;
      .btn-update {
        margin-right: 5px;
      }
    }
  }
  .add-item {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    margin-top: 5px;
    input[type="text"] {
      border-bottom: 2px solid #000;
    }
  }
  .input {
    height: 40px;
    line-height: 40px;
    input[type="text"] {
      height: 100%;
      width: 100%;
      padding-left: 1em;
      box-sizing: border;
      background: transparent;
    }
  }
  .btn-add {
    width: 80px;
    height: 40px;
    background: black;
    color: #fff;
    margin-top: 10px;
    font-size: 0;
  }
}
</style>
