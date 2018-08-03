<template>
    <div class="eventSub-m-com">
        <div class="container-fluid">
            <div class="swiper-container eventSwiper" id="eventSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide text-center">
                        <!-- <router-link :to="{path:'/lotus'}" exact>广州新荷学校</router-link> -->
                        <a href="http://data.xinxueshuo.cn/nsi-event/Lotus2018/lotus.html" target="_">广州新荷学校</a>
                    </div>
                    <div class="swiper-slide text-center">
                        <!-- <router-link :to="{path:'/lotus/shanghai'}">上海新荷学校（9月）</router-link> -->
                        <a href="https://jinshuju.net/f/L4Iz9D" target="_">上海新荷学校（9月）</a>
                    </div>
                    <div class="swiper-slide text-center">
                        <!-- <router-link :to="{path:'/lotus/beijing'}">北京新荷学校（10月）</router-link> -->
                        <a href="https://jinshuju.net/f/L4Iz9D" target="_">北京新荷学校（10月）</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
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
                resistanceRatio:0.7,
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
        border-bottom: 1px solid #ddd;
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
    }
</style>
