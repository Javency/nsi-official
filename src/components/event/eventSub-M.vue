<template>
    <div class="eventSub-m-com">
        <div class="container-fluid">
            <div class="swiper-container eventSwiper" id="eventSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide text-center">
                        <!-- <router-link :to="{path:'/event'}"><img width="35" src="../../assets/img/layoutImg/vis2018.png" alt=""><br/>VIS国际学校发展大会</router-link> -->
                        <a href="http://data.xinxueshuo.cn/nsi-class/admin/activity/meeting/vis2018.html" target="_blank"><img width="35" src="../../assets/img/layoutImg/vis2018.png" alt=""><br/>{{$t('layoutNav.eventChild.vis')}}</a>
                    </div>
                    <div class="swiper-slide text-center">
                        <router-link :to="{path:'/event/subject'}"><span class="iconfont icon-zhuanti fontlogo"></span><br/>{{$t('layoutNav.eventChild.subject')}}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    data(){
        return{
            layoutNav:[this.$t('layoutNav.eventChild.vis'),this.$t('layoutNav.eventChild.subject')]
        }
    },
    methods:{
        eventSubInit(){
            var eventSwiper=new Swiper("#eventSwiper",{
                notNextTick: true,
                freeMode:true,
                freeModeMomentumRatio : 5,
                freeModeMomentum:true,
                freeModeMomentumBounce:false,
                slidesPerView : 2,
                slideToClickedSlide: true,
                resistanceRatio:0.4,
            })
        }
    },
    mounted(){
        this.eventSubInit()
    }
}
</script>

<style lang="scss">
    .eventSub-m-com{
        $official-color: #20528f;
        .eventSwiper{
            padding: 10px 0;
            a{
                color: #333;
                &:hover,
                &:link{
                    text-decoration: none;
                }
            }
        }
        .fontlogo{
            font-weight: 600;
            font-size: 25px;
        }
    }
</style>
