<template>
    <div class="nav-m-com">
        <div class="container-fluid">
            <div class="swiper-container swiperM" id="swiperM">
                <div class="swiper-wrapper">
                    <div class="swiper-slide navSlide" v-for="(nav,index) in layoutNav" :key="index" @click="currentIndex(index)">
                        <span :class="{activeNav:index==activeNav}">{{nav}}</span>
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
            navs:[
                "首 页",
                "关于我们",
                "资讯中心",
                "会议活动",
                "新荷学校",
                "研究院",
                "咨询服务"
            ],
            activeNav:0,
            layoutNav:[this.$t('layoutNav.index'),this.$t('layoutNav.aboutus'),this.$t('layoutNav.information'),this.$t('layoutNav.event'),this.$t('layoutNav.lotus'),this.$t('layoutNav.research'),this.$t('layoutNav.consult')]
        }
    },
    methods:{
        navSwiperInit(){
            const _this=this;
            new Swiper('#swiperM', {
                notNextTick: true,
                freeMode:true,
                freeModeMomentumRatio : 5,
                freeModeMomentum:false,
                // width:95,
                slidesPerView : 4,
                slideToClickedSlide: true,
                centeredSlides: true,
                resistanceRatio:0.7,
                on:{
                    slideChangeTransitionStart:function(swiper){
                        _this.activeNav=this.realIndex
                        // console.log(_this.activeNav)
                    },
                    tap:function(){
                        _this.activeNav=this.realIndex
                        console.log(this.realIndex)
                    }
                }
            })
        },
        currentIndex(index){
            // console.log(index)
        }
    },
    mounted(){
        this.navSwiperInit()
    }
}
</script>

<style lang="scss">
    .nav-m-com{
        $official-color: #20528f;
        // padding-top: 15px;
        // border-top: 3px solid $official-color;
        padding-top: 10px;
        padding-bottom: 5px;
        border-bottom: 1px solid #ddd;
        .navSlide{
            text-align: center;
            span{
                display: inline-block;
                padding-bottom: 5px;
                font-size: 16px;
                margin-top: 6px;
            }
            .activeNav{
                font-size: 20px !important;
                font-weight: 600;
                padding-bottom: 0 !important;
                margin-top: 0;
                color: $official-color
            }
        }
    }
</style>
