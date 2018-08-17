<template>
    <div class="researchApply-com">
        <event-banner/>
        <apply-list/>
    </div>
</template>

<script>
import eventBanner from '../../components/research/researchBanner'
import applyList from '../../components/research/researchList'
import wxShareInit from '../../assets/js/weChatShare.js'
export default {
    components:{
        eventBanner,
        applyList,
    },
    data(){
        return{
            wxShareInfo:{
                  title:"新学说 | 2018VIS国际学校发展大会",
                  imgUrl:"https://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
                  href:window.location.href,
                  desc:"“有界无边，育在未来”  2018VIS国际学校发展大会，将于11月11日在北京盛大召开。"
              }
        }
    },
    methods:{
         wxInit(){
          this.axios({
                  method:"get",
                  url:'/Admin_api?whereFrom=WeChatShare&Callback=',
                  params:{
                      URL: window.location.href
                  }
              }).then((res)=>{
                  wxShareInit.wxConfig(res)
                  wxShareInit.wxReady(this.wxShareInfo)
              })
        }
    },
    beforeMount(){
        if(wxShareInit.isWeixinBrowser()){
            setTimeout(this.wxInit,500)
        }
    }
}
</script>

<style lang="scss">
    .researchApply-com{
      .showInMobile{
          display: none;
          @media (max-width: 768px) {
              display: block;
          }
      }
    }
</style>
