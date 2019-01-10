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

  .title {
    font-size: 18px;
  }

  .table {
    .table-row {
      display: flex;
      align-items center
      padding-bottom:20px
      .time {
        font-size 16px
        letter-spacing 2px
        font-weight bold}
      .icon_2-book {
        display: block;
        font-size: 36px;
        line-height: 36px;
        margin-right: 16px;
        color: $subOrange;
      }

      .text {
        letter-spacing 2px
        font-size 16px

      }
    }
  }
}
</style>
