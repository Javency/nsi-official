<template>
    <div class="vipPage-com">
        <div class="banner text-center">
            <img src="../assets/img/vip/banner.jpg" alt="">
        </div>
        <!-- 会员卡 -->
        <div class="container vipCardList">
            <div class="row">
               <div class="col-md-3 cardBox" v-for="(item,index) in vipList">
                   <div class="card" :style="'border-top: 3px solid'+ item.vipColor">
                       <div class="cardContent text-canter">
                           <!-- <img src="../assets/img/vip/vip01.jpg" alt="" width="200"> -->
                           <div class="iconfont vipLogo" :class="item.vipLogo" :style="'color:'+item.vipColor"></div>
                           <h4 class="text-canter vipName">{{item.vipName}}</h4>
                           <p class="vipInteresse" :style="'color:'+item.vipColor">
                               <span class="title-left" :class="'title-left0'+index"></span>
                               {{item.vipInteresse}}
                               <span class="title-right" :class="'title-right0'+index"></span>
                           </p>
                           <div class="vipInfo">
                               <p>{{item.vipInfo}}</p>
                           </div>
                           <a href="javascript:;" class="applyVIP" :style="'background-color:'+item.vipColor" @click="showPayBox(item.vipName,item.vipLogo)">立即开通</a>
                       </div>
                   </div>
               </div>
            </div>
        </div>
        <div class="payBox animated" :class="currentActiveClass" v-if="isShow">
            <div class="payBox-content">
                <div class="content-header">
                    <span class="iconfont" :class="currentLogo"></span>&nbsp;&nbsp;{{currentName}}
                    <i class="iconfont icon-hao closeBtn" @click="closePayBox()"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            vipList:[
                {
                    vipName:"注册会员",
                    vipInteresse:"注册会员尊享权益",
                    vipInfo:"新学说电子刊物邮箱发送",
                    vipColor:"#411d5b",
                    vipLogo:"icon-huiyuanVIPrenzhengjiaVzhongyaogaodengji"
                },
                {
                    vipName:"个人会员",
                    vipInteresse:"个人会员尊享权益",
                    vipInfo:"新学说纸质版刊物/电子刊物邮箱发送/会议活动",
                    vipColor:"#103b6e",
                    vipLogo:"icon-huiyuan1"
                },
                {
                    vipName:"企业会员",
                    vipInteresse:"企业会员尊享权益",
                    vipInfo:"新学说纸质版刊物/电子刊物邮箱发送/媒体宣传/会议活动",
                    vipColor:"#575150",
                    vipLogo:"icon-vip"
                },
                {
                    vipName:"企业高级会员",
                    vipInteresse:"企业高级会员尊享权益",
                    vipInfo:"新学说纸质版刊物/电子刊物邮箱发送/媒体宣传/会议活动/人才服务",
                    vipColor:"#c1a773",
                    vipLogo:"icon-huiyuan"
                }
            ],
            isShow:false,
            currentLogo:"",
            currentName:"",
            currentActiveClass:"fadeIn"
        }
    },
    methods:{
      closePayBox(){
        this.currentActiveClass="fadeOut"
        this.isShow=false
      },
      showPayBox(name,logo){
        this.isShow=true
        this.currentLogo=logo
        this.currentName=name
        this.currentActiveClass="fadeIn"
      }
    }
}
</script>

<style lang="scss">
    .vipPage-com{
        padding-top: 52px;
        @media (max-width: 768px) {
            padding-top: 0;
        }
        img{
            display: inline-block;
            max-width: 100%;
            height: auto;
        }
        .pt45{
            padding-top: 45px;
        }
        .vipCardList{
            padding: 45px 20px;
            @media (min-width: 1200px) {
                width: 1265px;
            }
        }
        .card{
            padding: 30px 15px 15px;
            box-shadow: 0 0 30px #dddddd;;
            border-radius: 4px;
            overflow: hidden;
            border-top: 3px solid #fff;
            .cardContent{
                img{
                    display: inline-block;
                    overflow: hidden;
                    border-radius: 4px;
                }
            }
        }
        .cardBox{
            // height: 441px;
            border-radius: 4px;
            // border-top: 3px solid #fff;
            background: #fff;
            // overflow: hidden;
            text-align: center;
        }
        .vipLogo{
            margin-top: 15px;
            font-size: 45px;
            color: #411d5b;
        }
        .vipName{
            font-size: 20px;
            color: #333;
            font-weight: bold;
            font-family: "microsoft yahei";
            margin-top: 0;
        }
        .vipInfo{
            p{
                line-height: 24px;
                margin-bottom: 0;
                font-size: 14px;
                color: #999;
                min-height: 48px;
            }
        }
        .vipInteresse{
            color: #411d5b;
            font-size: 14px;
            line-height: 30px;
            height: 30px;
            background: #FFF;
            position: relative;
            overflow: hidden;
            .title-left00{
                width: 40px;
                height: 1px;
                display: inline-block;
                vertical-align: middle;
                background: -webkit-linear-gradient(left,#fff, #411d5b);
                background: -o-linear-gradient(right,#fff, #411d5b);
                background: -moz-linear-gradient(right,#fff, #411d5b);
                background: linear-gradient(to right,#fff, #411d5b);
                filter: progid:dximagetransform.microsoft.gradient(gradientType='1',startColorStr='#ffffffff',endColorStr='#411d5b');
            }
            .title-right00{
                width: 40px;
                height: 1px;
                display: inline-block;
                vertical-align: middle;
                background: -webkit-linear-gradient(left,#411d5b,#fff);
                background: -o-linear-gradient(right, #411d5b, #fff);
                background: -moz-linear-gradient(right, #411d5b, #fff);
                background: linear-gradient(to right, #411d5b, #fff);
                filter: progid:dximagetransform.microsoft.gradient(gradientType='1',startColorStr='#411d5b',endColorStr='#ffffffff');
            }
            .title-left01{
                 width: 40px;
                height: 1px;
                display: inline-block;
                vertical-align: middle;
                background: -webkit-linear-gradient(left,#fff, #103b6e);
                background: -o-linear-gradient(right,#fff, #103b6e);
                background: -moz-linear-gradient(right,#fff, #103b6e);
                background: linear-gradient(to right,#fff, #103b6e);
                filter: progid:dximagetransform.microsoft.gradient(gradientType='1',startColorStr='#ffffffff',endColorStr='#103b6e');
            }
            .title-right01{
                 width: 40px;
                height: 1px;
                display: inline-block;
                vertical-align: middle;
                background: -webkit-linear-gradient(left,#103b6e,#fff);
                background: -o-linear-gradient(right, #103b6e, #fff);
                background: -moz-linear-gradient(right, #103b6e, #fff);
                background: linear-gradient(to right, #103b6e, #fff);
                filter: progid:dximagetransform.microsoft.gradient(gradientType='1',startColorStr='#103b6e',endColorStr='#ffffffff');
            }
            .title-left02{
                 width: 40px;
                height: 1px;
                display: inline-block;
                vertical-align: middle;
                background: -webkit-linear-gradient(left,#fff, #939393);
                background: -o-linear-gradient(right,#fff, #939393);
                background: -moz-linear-gradient(right,#fff, #939393);
                background: linear-gradient(to right,#fff, #939393);
                filter: progid:dximagetransform.microsoft.gradient(gradientType='1',startColorStr='#ffffffff',endColorStr='#939393');
            }
            .title-right02{
                 width: 40px;
                height: 1px;
                display: inline-block;
                vertical-align: middle;
                background: -webkit-linear-gradient(left,#939393,#fff);
                background: -o-linear-gradient(right, #939393, #fff);
                background: -moz-linear-gradient(right, #939393, #fff);
                background: linear-gradient(to right, #939393, #fff);
                filter: progid:dximagetransform.microsoft.gradient(gradientType='1',startColorStr='#939393',endColorStr='#ffffffff');
            }
            .title-left03{
                 width: 40px;
                height: 1px;
                display: inline-block;
                vertical-align: middle;
                background: -webkit-linear-gradient(left,#fff, #c1a773);
                background: -o-linear-gradient(right,#fff, #c1a773);
                background: -moz-linear-gradient(right,#fff, #c1a773);
                background: linear-gradient(to right,#fff, #c1a773);
                filter: progid:dximagetransform.microsoft.gradient(gradientType='1',startColorStr='#ffffffff',endColorStr='#c1a773');
            }
            .title-right03{
                 width: 40px;
                height: 1px;
                display: inline-block;
                vertical-align: middle;
                background: -webkit-linear-gradient(left,#c1a773,#fff);
                background: -o-linear-gradient(right, #c1a773, #fff);
                background: -moz-linear-gradient(right, #c1a773, #fff);
                background: linear-gradient(to right, #c1a773, #fff);
                filter: progid:dximagetransform.microsoft.gradient(gradientType='1',startColorStr='#c1a773',endColorStr='#ffffffff');
            }
        }
        .applyVIP{
            display: inline-block;
            width: 238px;
            height: 40px;
            line-height: 40px;
            border-radius: 20px;
            font-size: 16px;
            color: #fff;
            margin: 30px 0;
            &:link{
                text-decoration: none;
            }
            &:hover{
                text-decoration: none;
                opacity: .8;
            }
        }

        // 选择支付
        .payBox{
            position: fixed;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .3);
            top: 0;
            left: 0;
            z-index: 9999;
            -webkit-animation-duration: .3s;
            animation-duration: .3s;
        }
        .payBox-content{
            position: fixed;
            width: 650px;
            height: 550px;
            background-color: #FFF;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%,-50%,0);
            .content-header{
                position: relative;
                background: #242424;
                background-image: url('http://www.iqiyipic.com/common/fix/vipcash/cash-head-bg.jpg');
                background-repeat: no-repeat;
                padding: 10px 14px;
                color: #c1a773;
                span{
                    font-size: 25px;
                    vertical-align: middle;
                }
                .closeBtn{
                    position: absolute;
                    right: 15px;
                    transform: rotateZ(45deg);
                    cursor: pointer;
                    top: 15px;
                }
            }
        }
    }
</style>
