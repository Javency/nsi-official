<template>
    <div class="slideAD-com">
        <swiper :options="swiperOption" ref="mySwiperAd">
            <swiper-slide v-for="(adInfos,item) in ADinfo" :key="item">
                <a :href="adInfos.clickurl" target="_">
                    <img :src="adInfos.imgurl" alt="" class="img-responsive">
                </a>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev">‹</div>
            <div class="swiper-button-next" slot="button-next">›</div> -->
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: {
        swiper,
        swiperSlide
    },
    name: 'carrousel',
    data(){
        return{
            swiperOption: {
                notNextTick: true,
                autoplay: {
                    disableOnInteraction: false,
                },
                loop: true,
                grabCursor : true,
                effect: 'fade',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                observer:true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
            },
            ADinfo:{}
        }
    },
    mounted() {
        this.axios({
            methods:"get",
            // url:"http://192.168.0.159:8080/nsi-1.0/article/getArticleAd.do",
            url:"/article/getArticleAd.do",
            params:{
                articleId:1,
                typeName:"文章页右侧广告位"
            }
        }).then((res)=>{
            console.log(res)
            this.ADinfo=res.data.data
        })
    }
}
</script>

<style lang="scss">
</style>
