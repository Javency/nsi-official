<template>
    <div class="research-com">
        <research-sub-m class="showInMobile"/>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import researchSubM from '../components/research/researchSub-M'
import wxShareInit from '../assets/js/weChatShare.js'
export default {
    components:{
        researchSubM
    },
    data(){
        return{
            wxShareInfo:{
                title:"新学说 | 报告资料下载中心",
                imgUrl:"https://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
                href:window.location.href,
                desc:"新学说匠心力作 | 国际学校行业的“资治通鉴”"
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
    .research-com{
        padding-top: 52px;
        @media (max-width: 768px) {
            padding-top: 0;
            padding-bottom: 30px;
        }
        margin-bottom: -50px;
        .showInMobile{
            display: none;
            @media (max-width:768px) {
                display: block;
            }
        }
    }
</style>
