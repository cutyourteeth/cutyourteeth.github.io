<template>
  <div class="education">
    <h1 class="title">个人信息</h1>
    <hr>
    <table class="table">
      <tr class="table-row">
        <td>
          <span class="icon_2-book"></span>
        </td>
        <td class="text">
          <p>
            <span class="time"></span>
            出于信息保护, 个人资料不在此开放
            <br>
            Sorry, personal info might not be served at this time;
          </p>
        </td>
      </tr>
    </table>
    <h1 class="title"></h1>
    <hr>
    <table class="table">
      <tr class="table-row">
        <td>
          <span class="icon_2-flag"></span>
        </td>
        <td class="text">
          <p>
            <span class="time"></span>
            出于信息保护, 个人资料不在此开放
            <br>
            Sorry, personal info might not be served at this time;
          </p>
        </td>
      </tr>
    </table>

    <p></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/mixin';

.education {
  display: block;

  .table {
    .table-row {
      display: flex;
      align-items: center;
      padding-bottom: 20px;

      .time {
        font-size: 16px;
        letter-spacing: 2px;
        font-weight: bold;
      }

      .icon_2-book, .icon_2-flag {
        display: block;
        font-size: 36px;
        line-height: 36px;
        margin-right: 16px;
        color: $subOrange;
      }

      .text {
        letter-spacing: 2px;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.7);
        font-weight: 500;
      }
    }
  }
}
</style>
