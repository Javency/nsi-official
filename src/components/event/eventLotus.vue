<template>
    <div class="eventLotus-com">
        <img src="/static/img/eventBanner01.3094b76.jpg" alt="" class="img-responsive">
        <div class="container">
            <div class="row">
                <div class="title">{{$t('layoutNav.lotusContent.lotusIntroTitle')}}</div>
                <div class="line"></div>
                <div class="lotusIntro">
                    <div>{{$t('layoutNav.lotusContent.lotusIntro01')}}</div>
                    <div>{{$t('layoutNav.lotusContent.lotusIntro02')}}</div>
                    <div>{{$t('layoutNav.lotusContent.lotusIntro03')}}</div>
                </div>
                <div class="title">{{$t('layoutNav.lotusContent.lotusProcess')}}</div>
                <div class="line"></div>
                <div class="lotusTime text-center">
                    <span><i class="iconfont icon-jianzhu"></i>{{$t('layoutNav.lotusContent.lotusTime01')}}</span>
                    <span><i class="iconfont icon-shanghai"></i>{{$t('layoutNav.lotusContent.lotusTime02')}}</span>
                    <span><i class="iconfont icon-beijing"></i>{{$t('layoutNav.lotusContent.lotusTime03')}}</span>
                </div>
                <div class="title">{{$t('layoutNav.lotusContent.lotusActivetyProcess')}}</div>
                <div class="line"></div>
                <div class="activity">
                    <div class="process">{{$t('layoutNav.lotusContent.lotusActPro01')}}</div>
                    <p>{{$t('layoutNav.lotusContent. lotusActPro01Time')}}</p>
                    <p>{{$t('layoutNav.lotusContent.lotusActPro01Con')}}</p>
                    <div class="process">{{$t('layoutNav.lotusContent.lotusActPro02')}}</div>
                    <p>{{$t('layoutNav.lotusContent.lotusActPro02Time')}}</p>
                    <p>{{$t('layoutNav.lotusContent.lotusActPro02Cona')}}</p>
                    <p>{{$t('layoutNav.lotusContent.lotusActPro02Conb')}}</p>
                    <div class="process">{{$t('layoutNav.lotusContent.lotusActPro03')}}</div>
                    <p>{{$t('layoutNav.lotusContent.lotusActPro03Con')}}</p>
                    <div class="process">{{$t('layoutNav.lotusContent.lotusActPro04')}}</div>
                    <p>{{$t('layoutNav.lotusContent.lotusActPro04Time')}}</p>
                    <p>{{$t('layoutNav.lotusContent.lotusActPro04Cona')}}</p>
                    <p>{{$t('layoutNav.lotusContent.lotusActPro04Conb')}}</p>
                    <div class="process">{{$t('layoutNav.lotusContent.lotusActPro05')}}</div>
                    <p>{{$t('layoutNav.lotusContent.lotusActPro05Cona')}}</p>
                    <p>{{$t('layoutNav.lotusContent.lotusActPro05Conb')}}</p>
                    <div class="process">{{$t('layoutNav.lotusContent.lotusActPro06')}}</div>
                    <p>{{$t('layoutNav.lotusContent.lotusActPro06player')}}</p>
                    <p>{{$t('layoutNav.lotusContent.lotusActPro06rater')}}</p>
                    <div class="lotusActPro06rater">
                        <p>{{$t('layoutNav.lotusContent.lotusActPro06raterA')}}</p>
                        <p>{{$t('layoutNav.lotusContent.lotusActPro06raterB')}}</p>
                        <p>{{$t('layoutNav.lotusContent.lotusActPro06raterC')}}</p>
                    </div> 
                    <p style='position:relative;top:-45px;'>{{$t('layoutNav.lotusContent.lotusActPro06viewer')}}</p>
                </div>
                <div class="title">{{$t('layoutNav.lotusContent.lotusVote')}}</div>
                <div class="line"></div>
                <div class="weidu">
                    <p class="process" style="margin-top:20px;">{{$t('layoutNav.lotusContent.lotusVote01')}}</p>
                    <p>{{$t('layoutNav.lotusContent.lotusVote02')}}</p>
                    <p>{{$t('layoutNav.lotusContent.lotusVote03')}}</p>
                    <div class="seven text-center">
                        <span>{{$t('layoutNav.lotusContent.lotusVote001')}}</span>
                        <span>{{$t('layoutNav.lotusContent.lotusVote002')}}</span>
                        <span>{{$t('layoutNav.lotusContent.lotusVote003')}}</span>
                        <span>{{$t('layoutNav.lotusContent.lotusVote004')}}</span>
                        <span>{{$t('layoutNav.lotusContent.lotusVote005')}}</span>
                        <span>{{$t('layoutNav.lotusContent.lotusVote006')}}</span>
                        <span>{{$t('layoutNav.lotusContent.lotusVote007')}}</span>
                    </div>
                </div>
                
                <div class="guangdong text-center">
                    <h3>历届新荷学校大会</h3>
                    <a href="http://data.xinxueshuo.cn/nsi-event/Lotus2018/lotus.html"><img src="../../assets/img/event/guangdong.jpg" alt=""></a>
                    <p class="text-center" style="margin-top:15px">
                        <a href="http://data.xinxueshuo.cn/nsi-event/Lotus2018/lotus.html">2018新荷学校大会广东站</a>
                    </p>
                </div>
                
             </div>
        </div>
    </div>
</template>

<script>
import '../../assets/iconfont/iconfont.css'
export default {
    data(){
        return{
            layoutNav:[this.$t('layoutNav.lotusContent.lotusIntroTitle'),this.$t('layoutNav.lotusContent.lotusIntro01'),this.$t('layoutNav.lotusContent.lotusIntro02'),this.$t('layoutNav.lotusContent.lotusIntro03),this.$t(layoutNav.lotusContent.lotusProcess'),this.$t('layoutNav.lotusContent.lotusTime'),
            this.$t('layoutNav.lotusContent.lotusTime01'),this.$t('layoutNav.lotusContent.lotusTime02'),this.$t('layoutNav.lotusContent.lotusTime03'),this.$t('layoutNav.lotusContent.lotusActivetyProcess'),this.$t('layoutNav.lotusContent.lotusActPro01'),
            this.$t('layoutNav.lotusContent. lotusActPro01Time'),this.$t('layoutNav.lotusContent.lotusActPro01Con'),this.$t('layoutNav.lotusContent.lotusActPro02'),
            this.$t('layoutNav.lotusContent.lotusActPro02Time'),this.$t('layoutNav.lotusContent.lotusActPro02Cona'),this.$t('layoutNav.lotusContent.lotusActPro02Conb'),
            this.$t('layoutNav.lotusContent.lotusActPro03'),this.$t('layoutNav.lotusContent.lotusActPro03Con'),this.$t('layoutNav.lotusContent.lotusActPro04'),
            this.$t('layoutNav.lotusContent.lotusActPro04Time'),this.$t('layoutNav.lotusContent.lotusActPro04Cona'),this.$t('layoutNav.lotusContent.lotusActPro04Conb'),
            this.$t('layoutNav.lotusContent.lotusActPro05'), this.$t('layoutNav.lotusContent.lotusActPro05Cona'),this.$t('layoutNav.lotusContent.lotusActPro05Conb'),this.$t('layoutNav.lotusContent.lotusActPro06'),
            this.$t('layoutNav.lotusContent.lotusActPro06player'),this.$t('layoutNav.lotusContent.lotusActPro06rater'),this.$t('layoutNav.lotusContent.lotusActPro06raterA'),
            this.$t('layoutNav.lotusContent.lotusActPro06raterB'),this.$t('layoutNav.lotusContent.lotusActPro06raterC'),this.$t('layoutNav.lotusContent.lotusActPro06viewer'),
            this.$t('layoutNav.lotusContent.lotusVote'),this.$t('layoutNav.lotusContent.lotusVote01'),this.$t('layoutNav.lotusContent.lotusVote02'),this.$t('layoutNav.lotusContent.lotusVote03'),
            this.$t('layoutNav.lotusContent.lotusVote001'), this.$t('layoutNav.lotusContent.lotusVote002'), this.$t('layoutNav.lotusContent.lotusVote003'), this.$t('layoutNav.lotusContent.lotusVote004'),this.$t('layoutNav.lotusContent.lotusVote005'), this.$t('layoutNav.lotusContent.lotusVote006'), this.$t('layoutNav.lotusContent.lotusVote007'),]
        }
    }
    
}
</script>

<style lang="scss">
    .eventLotus-com{
        .row{
            .activity{
                @media (max-width: 768px){
                    padding:0 20px;
                }
            }
            .weidu{
                @media (max-width: 768px){
                    padding:0 20px;
                }
            }
            .line{
                height: 5px;
                background-color: #4c77ab;
                margin-top: 5px;
                border-radius: 3px;
            }
            p{
                font-size:16px;
                line-height:35px;
                font-family: STXihei;
            }
            .lotusIntro{
                @media (max-width: 768px){
                    padding:0 20px;
                }
                font-size:16px;
                font-family: STXihei;
                line-height: 40px;
                text-indent: 32px;
                margin-top:20px;
            }
            .lotusTime{
                font-size:18px;
                font-family:fantasy;
                margin-top:50px;
                i{
                    font-size:30px;
                    margin-right:10px;
                }
                span{
                    margin-right:20px;  
                    border:1px solid #ccc;
                    padding: 20px 60px;
                    border-radius: 10px;
                    display: inline-block;
                    margin-bottom: 30px;
                    &:hover{
                        background-color:#4c77ab;
                        color:#fff;
                    }
                }
            }
            .lotusActPro06rater{
                margin-left: 45px;
                position: relative;
                top: -45px;
            }
            .process{
                padding-left: 11px;
                border-left: 4px solid #4c77ab;
                height: 16px;
                line-height: 18px;
                font-size: 20px;
                margin-top:30px;
                margin-bottom:30px;
            }
            .title{
                font-size: 16px;
                font-weight: bold;
                padding:10px 0;
                background-color:#4c77ab;
                color:#fff;
                margin-top:20px;
                text-indent:10px;
                border-radius: 5px;
            }
            .teacher{
                height: 445px;
                width: 500px;
                margin-top:25px;
                margin-left:75px;
                p{
                    margin-top:20px;
                    line-height:25px;
                }
            }
            .seven {
                @media (max-width: 768px) {
                    text-align:left;
                }
                margin-top:20px;   
                span{
                    padding: 10px 25px;
                    border-radius: 10px;
                    margin-left:10px;
                    display: inline-block;
                    margin-bottom: 20px;
                    background-color:#4c77ab;
                    color:#fff;
                }
            }
            .guangdong{
                h3{
                    margin-top:90px;
                    margin-bottom:30px;
                } 
            } 
            
        }
        
    }

</style>
