<template>
  <div class="like">
    <div class="like-title">猜你喜欢</div>
    <div class="link-list" >
      <div class="like-item border-bottom" v-for="item in list" :key="item.id">
        <div class="like-imgcon">
          <img :src="item.imgUrl" alt />
        </div>
        <div class="like-info">
          <div class="info-title ellipsis">{{item.title}}</div>
          <div class="info-comment">{{item.commentsNum}}条评论</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Like',
  data() {
    return {
      list: [
        {
          id: '001',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/201407/30/10b7efbe6a3a44f53081c10a76597157.jpg_200x200_90b767fc.jpg',
          title: '竹溪湖',
          commentsNum: 88
        },
         {
          id: '002',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1908/c5/c5dca8404a7baa31a3.water.jpg_200x200_024b2779.jpg',
          title: '高原虹河谷真人cs俱乐部',
          commentsNum: 108
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.like {
  margin-top: 10px;
  background: #fff;
  .like-title {
    padding: 12px 10px;
  }
  .like-item{
    margin-left: 12px;
    padding: 10px 0;
    overflow: hidden;
    .like-imgcon{
      float: left;
      width: 100px;
      height: 100px;
      img{
        display: block;
        width: 100%;
      }

    }
    .like-info{
      padding-left:112px;
      padding-top: 13px;
      .info-title{
        font-size: 16px;
      }
      .info-comment{
        margin-top: 7px;
        font-size: 12px;
      }
    }
  }
}
</style>