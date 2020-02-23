<template>
  <div class="weekends">
    <div class="weekends-title">周末去哪儿</div>
    <div class="weekends-list">
      <div class="weekends-item" v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" alt />
        <div class="weekends-item-info">
          <div class="weekends-item-name ellipsis">{{item.name}}</div>
          <div class="weekends-item-desc ellipsis">{{item.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Weekends',
  data() {
    return {
      list: [
        {
          id: '001',
          imgUrl:
            'https://imgs.qunarzz.com/sight/source/1505/98/47e8d7bdbed162.jpg_r_640x214_f6059302.jpg',
          name: '有温泉就是任性',
          desc:
            '繁忙的一周结束，拖着疲惫的身体赶紧来泡个养生温泉吧，解除你的疲劳'
        },
        {
          id: '002',
          imgUrl:
            'https://imgs.qunarzz.com/sight/source/1505/a2/78e4dbcfd45a6d.jpg_r_640x214_7a62b06a.jpg',
          name: '成都必打卡',
          desc: '成都的标志，也是现代人对老成都的记忆'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  .weekends-title{
    height: 40px;
    line-height: 40px;
    padding-left: 13px;
    color: #212121;
  }
  img{
    display: block;
    width: 100%;
    height: 140px;
  }
  .weekends-item-info{
    padding: 7px 10px 10px 10px;
    .weekends-item-name{
       line-height: 24px;
      padding-right: 70px;
      box-sizing: border-box;
      color: #212121;
    }
    .weekends-item-desc{
      font-size: 12px;
      line-height: 21px;
      box-sizing: border-box;
      padding-right: 70px;
      color: #616161;
    }
  }

</style>
