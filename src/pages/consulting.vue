<template>
    <div>
        <div class="consulting-com">
            <connectUs></connectUs>
            <div>
                <img src="../assets/img/consulting/pcConsult.jpg" alt="">
                <!-- <div class="item" style="width:1070px;margin:30px auto;">
                    <el-row :gutter="20">
                      <el-col :span="8" v-for="(o, index) in 6" :key="o" style="margin-bottom:20px;">
                        <el-card :body-style="{ padding: '0px' }">
                          <img src="../assets/img/consulting/insightList.jpg" class="insightImage">
                          <div style="padding: 7px;">
                            <h4 style="text-align:left">第三只眼观校：</h4>
                            <p style="text-align:left">鼎石的市场传播到底牛在哪里？</p>
                            <div class="bottom clearfix">
                                <p style="color:#999;text-align:left">鼎石的市场传播到底牛在哪里？鼎石的市场传播到底牛在哪里？鼎石的市场传播到底牛在哪里？</p>
                              <el-button style="float:right" type="text" class="button">查看更多</el-button>
                            </div>
                          </div>
                        </el-card>
                      </el-col>
                    </el-row>
                </div> -->
                <img src="../assets/img/consulting/pcConsult2.jpg" alt="">
            </div>
        </div>
        <consultMob v-show="mobHtml"></consultMob>
    </div>
</template>

<script>
import connectUs from '../components/consulting/connectUs.vue'
import consultMob from '../components/consulting/consultMob.vue'
import wxShareInit from '../assets/js/weChatShare.js'
export default {
    data() {
        return {
            mobHtml:false,
            wxShareInfo:{
                title:"新学说 | 国际学校整体解决方案专家",
                imgUrl:"http://data.xinxueshuo.cn/upImage/upInstitutionImg/100062/100062-logo.jpg",
                href:window.location.href,
                desc:"新学说咨询运用专业能力结合行业知识、专家建议、实地调研、数据分析、解决客户痛点"
            }
        }
    },
    components: {
        consultMob,connectUs
    },
    created(){
        if(window.innerWidth<769){
            this.mobHtml=true
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
    .consulting-com{
        @media (max-width: 768px) {
            padding-top: 0;
            display:none;
        }
        img{
            display: inline-block;
            max-width: 100%;
            height: auto;
        }
        .content{
            padding-top: 100px;
            @media (max-width: 768px) {
                padding-top: 30px;
            }
        }
    }
    .consultList{
        span{
            display: inline-block;
            padding:0;
        }
        .consultListActive{
            color:rgb(255, 208, 75);
        }
    }
</style>
