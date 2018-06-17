<template>
  <div class="bg banner-com">
      <div class="container">
          <div class="row">
              <div class="col-md-9 pr0 pl0">
                  <big-banner/>
              </div>
              <div class="col-md-3 pl0 pr0">
                <small-banner-top/>
                <small-banner-bottom/>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import BigBanner from './BigBanner'
import SmallBannerTop from './smallBannerTop'
import SmallBannerBottom from './smallBannerBottom'
export default {
  components:{
    BigBanner,
    SmallBannerTop,
    SmallBannerBottom
  }
}
</script>

<style lang="scss">
.banner-com{
    .container{
      // position: relative;
        box-shadow: 0 12px 24px 0 rgba(7,17,27,.2);
        border-radius: 4px;
        overflow: hidden;
        .pr0{
          padding-right: 0;
        }
        .pl0{
          padding-left: 0;
        }
  }
}
 @media(max-width: 789px){
      .bg{
          padding-left: 0;
          padding-right: 0;
      }
    }
</style>
