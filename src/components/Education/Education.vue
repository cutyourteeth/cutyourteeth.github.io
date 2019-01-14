<template>
  <div class="education">
    <h1 class="title">教育经历</h1>
    <hr>
    <table class="table">
      <tr class="table-row">
        <td>
          <span class="icon_2-book"></span>
        </td>
        <td class="text">
          <p>
            <span class="time">2009-2012</span>
            <br>衢州一中
          </p>
        </td>
      </tr>
      <tr class="table-row">
        <td>
          <span class="icon_2-book"></span>
        </td>
        <td class="text">
          <span class="time">2012-2016</span>
          <br>浙江大学城市学院土木工程
        </td>
      </tr>
    </table>
    <h1 class="title">工作经历</h1>
    <hr>
    <table class="table">
      <tr class="table-row">
        <td>
          <span class="icon_2-flag"></span>
        </td>
        <td class="text">
          <p>
            <span class="time">2015-2016</span>
            <br>杭州优辰建筑咨询(BIM建模师)(实习)
          </p>
        </td>
      </tr>
      <tr class="table-row">
        <td>
          <span class="icon_2-flag"></span>
        </td>
        <td class="text">
          <span class="time">2016-2018</span>
          <br>浙江耀信(工程审计)
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
        font-weight 500
      }
    }
  }
}
</style>
