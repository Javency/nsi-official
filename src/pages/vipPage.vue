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
                           <a href="javascript:;" class="applyVIP" :style="'background-color:'+item.vipColor" @click="showPayBox(item.vipName,item.vipLogo,item.vipPrice,item.vipDesc,item.vipCard)">立即开通</a>
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
                <div class="content-apply" v-loading="loading">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="applyFor">
                                <div class="applyCard">
                                    <img :src="activeVipCard" alt="" class="vipCardPic">
                                </div>
                                <div class="applyInfo">
                                    <div class="applyPrice">
                                        <b></b>
                                        <i>{{activeVipPrice}}</i>
                                    </div>
                                </div>
                                <p class="vipApplyInfo">
                                    <span class="iconfont icon-xinxi"></span>
                                    会员权益详情：
                                </p>
                                <p class="vipApplyDesc">
                                    {{activeVipDesc}}
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="applyList">
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="userName"></label>
                                        <input v-model="userInput.name" type="text" id="userName" ref="userName" placeholder="姓名" class="userInput userName">
                                    </div>
                                    <div class="col-md-12">
                                        <label for="school"></label>
                                        <input v-model="userInput.school" type="text" id="school" ref="school" placeholder="机构/学校" class="userInput school">
                                    </div>
                                    <div class="col-md-12">
                                        <label for="phone"></label>
                                        <input v-model="userInput.phone" type="text" id="phone" ref="phone" placeholder="电话" class="userInput phone">
                                    </div>
                                    <div class="col-md-12">
                                        <label for="job"></label>
                                        <input v-model="userInput.job" type="text" id="job" ref="job" placeholder="职名" class="userInput job">
                                    </div>
                                    <div class="col-md-12">
                                        <label for="weiChat"></label>
                                        <input v-model="userInput.weiChat" type="text" id="weiChat" ref="weiChat" placeholder="微信号" class="userInput weiChat">
                                    </div>
                                    <div class="col-md-12">
                                        <label for="userMail"></label>
                                        <input v-model="userInput.mail" type="text" id="userMail" ref="userMail" placeholder="邮箱" class="userInput userMail">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row pt30">
                        <div class="col-md-12 text-center">
                            <a href="javascript:;" class="applyBtn" :class="{notAllow:isAllow}" @click="applyForm()">立即提交</a>
                        </div>
                    </div>
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
                    vipLogo:"icon-huiyuanVIPrenzhengjiaVzhongyaogaodengji",
                    vipPrice:'免费',
                    vipDesc:"电子刊物：新学说行业电子周刊邮箱发送/新学说行业报告电子精简版邮箱定时发送/新学说行业报告电子精简版邮箱定时发送",
                    vipCard:require('../assets/img/vip/vip01.jpg')
                },
                {
                    vipName:"个人会员",
                    vipInteresse:"个人会员尊享权益",
                    vipInfo:"新学说纸质版刊物/电子刊物邮箱发送/会议活动",
                    vipColor:"#103b6e",
                    vipLogo:"icon-huiyuan1",
                    vipPrice:'￥ 5,000 / 年',
                    vipDesc:"注册会员权益 + 纸质刊物：新学说纸质报告邮寄（2册/套）/ 新学说纸质《国际学校内参》邮寄（4册/套）/ 会议活动：研讨会坐席",
                    vipCard:require('../assets/img/vip/vip02.png')
                },
                {
                    vipName:"企业会员",
                    vipInteresse:"企业会员尊享权益",
                    vipInfo:"新学说纸质版刊物/电子刊物邮箱发送/媒体宣传/会议活动",
                    vipColor:"#575150",
                    vipLogo:"icon-vip",
                    vipPrice:'￥ 50,000 / 年',
                    vipDesc:'个人会员权益 + 媒体宣传：《国际学校内参》广告位赠送 / 会议活动：研讨会坐席 + ICE/VIS 普通坐席 / 互联网服务：新学说行业国际学校 / 机构数据库首页热点展示位',
                    vipCard:require('../assets/img/vip/vip03.png')
                },
                {
                    vipName:"企业高级会员",
                    vipInteresse:"企业高级会员尊享权益",
                    vipInfo:"新学说纸质版刊物/电子刊物邮箱发送/媒体宣传/会议活动/人才服务",
                    vipColor:"#c1a773",
                    vipLogo:"icon-huiyuan",
                    vipPrice:'￥ 100,000 / 年',
                    vipDesc:'企业会员权益 + 人才服务：专项培训线上课程（50人/班）10次，20课时 / 互联网服务：新学说行业国际学校 / 机构数据库首页热点展示位',
                    vipCard:require('../assets/img/vip/vip04.png')
                }
            ],
            isShow:false,
            currentLogo:"",
            currentName:"",
            currentActiveClass:"fadeIn",
            activeVipPrice:"",
            activeVipDesc:"",
            activeVipCard:"",
            loading: false,
            isAllow:true,
            sendFlag:false,
            userInput:{
                name:"",
                school:"",
                phone:"",
                job:"",
                weiChat:"",
                mail:""
            }
        }
    },
    methods:{
      closePayBox(){
        this.currentActiveClass="fadeOut"
        this.isShow=false
      },
      showPayBox(name,logo,price,desc,card){
        this.isShow=true
        this.currentLogo=logo
        this.currentName=name
        this.currentActiveClass="fadeIn"
        this.activeVipPrice=price
        this.activeVipDesc=desc
        this.activeVipCard=card
      },
      applyForm(){
          if(this.sendFlag){
                this.loading=true
                let vipType=this.currentName
                let userName=this.$refs.userName.value
                let school=this.$refs.school.value
                let phone=this.$refs.phone.value
                let job=this.$refs.job.value
                let weiChat=this.$refs.weiChat.value
                let userMail=this.$refs.userMail.value
                const data = new URLSearchParams();
                data.append('name', userName);
                data.append('institution', school);
                data.append('phone', phone);
                data.append('duty', job);
                data.append('wechatId', weiChat);
                data.append('mail', userMail);
                data.append('memberType', vipType);
                this.axios({
                    method:"post",
                    url:"http://192.168.0.49:8080/nsi-1.0/members/add_members.do",
                    data:data
                }).then((res)=>{
                    this.loading=false
                    this.isShow=false
                    const h = this.$createElement;
                        this.$notify({
                        title: '提交成功',
                        type: 'success',
                        message: h('span', { style: 'color: #c1a773'}, '稍后会有新学说工作人员向您取得联系，感谢您的信任与支持'),
                        offset: 150,
                        duration: 5000
                    });
                })
          }
      }
    },
    updated(){
        if(this.userInput.name==""||this.userInput.phone==""||this.userInput.mail==""||this.userInput.job==""||this.userInput.weiChat==""||this.userInput.school==""){
            this.isAllow=true
            this.sendFlag=false
        }else{
            this.isAllow=false
            this.sendFlag=true
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
        .pt30{
            padding-top: 30px;
        }
        .pt45{
            padding-top: 45px;
        }
        .notAllow{
            opacity: .5;
            cursor: not-allowed
        }
        .notAllow:hover{
            opacity: .5 !important
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
            width: 80%;
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
            // height: 550px;
            background-color: #f4f4f4;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%,-50%,0);
            .content-header{
                position: relative;
                background: #242424;
                // background-image: url('http://www.iqiyipic.com/common/fix/vipcash/cash-head-bg.jpg');
                // background-repeat: no-repeat;
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
            .applyList{
                padding: 0 15px 15px;
                background-color: #FFF;
                border: 1px solid #e0e0e0;
                border-radius: 4px;
            }
            .content-apply{
                padding:35px 35px;
                .userInput{
                    border: none;
                    width: 100%;
                    border-bottom: 1px solid #c1a773;
                    outline: none;
                    font-size: 15px;
                    color: #242424;
                    padding-bottom: 5px;
                    padding-left: 5px;
                    margin-bottom: 5px;
                }
                .vipCardPic{
                    border-radius: 4px;
                    width: 100%;
                    box-shadow: 5px 5px 10px #bebebe
                }
                .applyInfo{
                        padding: 0;
                        background: #fefcee;
                        border: 2px solid #c1a773;
                        margin-top: 12px;
                        border-radius: 4px;
                        text-align: center;
                        .applyPrice{
                            height: 32px;
                            line-height: 32px;
                            font-size: 18px;
                            color: #666;
                            b{
                                color: #c1a773;
                                margin-right: 2px;
                                font-weight: normal;
                                font-family: "microsoft yahei";
                                font-style: normal;
                            }
                            i{
                                font-size: 24px;
                                color: #c1a773;
                                font-family: Impact;
                                font-style: normal;
                            }
                        }
                    }
                    .vipApplyInfo{
                        color: #999;
                        font-size: 14px;
                        margin-top: 12px;
                        span{
                            font-weight: 700;
                        }
                    }
                    .vipApplyDesc{
                        color: #999;
                        font-size: 14px;
                        line-height: 25px;
                    }
                .applyBtn{
                    display: inline-block;
                    width: 50%;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 20px;
                    font-size: 16px;
                    color: #fff;
                    background-color: #c1a773;
                    &:link,
                    &:hover{
                        text-decoration: none;
                    }
                     &:hover{
                         opacity: .8;
                     }
                }
            }
        }
    }
</style>
