<template>
    <div class="lotusPage">
          <lotus-sub class="showInMobile"/>
          <!-- <h1>这是新荷页</h1> -->
          <div class="text-center">
            <img src="../assets/img/common/404.jpg" alt="" class="img-responsive">
          </div>
    </div>
</template>

<script>
import lotusSub from '../components/lotus/lotus-M'
export default {
  components:{
    lotusSub
  }
}
</script>

<style lang="scss">
  .lotusPage{
    .img-responsive{
      display: inline-block;
    }
  }
</style>
