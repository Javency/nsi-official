<template>
    <div class="eventSub-m-com">
        <div class="container-fluid">
            <div class="swiper-container eventSwiper" id="researchSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide text-center">
                        <router-link :to="{path:'/research/pisom'}"><img width="75" class="classLogo pisom" src="../../assets/img/layoutImg/pisom.png" alt=""><br/>{{$t('layoutNav.researchChild_Mob.pisom')}}</router-link>
                    </div>
                    <div class="swiper-slide text-center">
                        <a href="http://class.xinxueshuo.cn" target="'_'"><img width="25" class="classLogo" src="../../assets/img/layoutImg/classLogo.png" alt=""><br/>{{$t('layoutNav.researchChild_Mob.classOnline')}}</a>
                    </div>
                    <div class="swiper-slide text-center">
                        <router-link :to="{path:'/research/periodical'}"><span class="iconfont icon-qikan fontLogo"></span><br/>{{$t('layoutNav.researchChild_Mob.magazine')}}</router-link>
                    </div>
                    <div class="swiper-slide text-center">
                        <router-link :to="{path:'/research/report'}"><span class="iconfont icon-baogao fontLogo"></span><br/>{{$t('layoutNav.researchChild_Mob.report')}}</router-link>
                    </div>
                    <div class="swiper-slide text-center">
                        <router-link :to="{path:'/research/apply'}"><span class="iconfont icon-baoming fontLogo"></span><br/>{{$t('layoutNav.researchChild_Mob.apply')}}</router-link>
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
            layoutNav:[this.$t('layoutNav.researchChild_Mob.magazine'),this.$t('layoutNav.researchChild_Mob.report'),this.$t('layoutNav.researchChild_Mob.pisom'),this.$t('layoutNav.researchChild_Mob.classOnline'),this.$t('layoutNav.researchChild_Mob.apply')]
        }
    },
    methods:{
        eventSubInit(){
            var eventSwiper=new Swiper("#researchSwiper",{
                notNextTick: true,
                freeMode:true,
                freeModeMomentumRatio : 5,
                freeModeMomentum:true,
                freeModeMomentumBounce:false,
                slidesPerView : 4,
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
                span{
                    font-weight: 700;
                    color: #444;
                    font-size: 25px !important;
                }
            }
            .classLogo{
                margin-bottom: 2px;
                margin-top: 4px;
            }
            .pisom{
                margin-top: 8px;
                margin-bottom: 5px;
            }
        }
        .router-link-active{
            color: #ffd04b !important;
        }
    }
</style>
