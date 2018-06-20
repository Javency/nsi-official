<template>
    <div class="newsbanner-com">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="newsbanner">
                        <swiper :options="swiperOption" ref="mySwiperNews">
                            <!-- slides -->
                            <swiper-slide v-for="(bannerInfos,index) in bannerInfo" :key="index">
                                <img :src="bannerInfos.imgSrc" alt="" class="img-responsive">
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                            <div class="swiper-button-prev" slot="button-prev"></div>
                            <div class="swiper-button-next" slot="button-next"></div>
                        </swiper>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="newsInfo" v-for="(bannerInfos,index) in bannerInfo" :key="index" v-if="index==newsBannerIndex">
                        <h3 class="newsInfo-title">{{bannerInfos.title}}</h3>
                        <p class="newsInfo-desc">{{bannerInfos.desc}}</p>
                        <a href="javascript" class="news-detail">阅读全文</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

var newsBannerIndex=0
export default {
    components: {
        swiper,
        swiperSlide
    },
    name: 'carrousel',
    data () {
        return {
            
        // 轮播
        newsBannerIndex:0,
        swiperOption: {
            notNextTick: true,
            autoplay: {
                disableOnInteraction: false,
            },
            loop: true,
            speed:600,
            grabCursor : true,
            // effect: 'fade',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on:{
               transitionEnd:function(swiper){
                   newsBannerIndex=this.realIndex
                   console.log(newsBannerIndex)
                   return newsBannerIndex
                }
            }
        },
        bannerInfo:[
            {
                imgSrc:require('../../assets/img/information/news01.jpg'),
                title:"知乎世界杯“洗脑广告”，瞄准了一群怎样的新用户",
                desc:"“上知乎问知乎答知乎看知乎搜知乎刷知乎……”在广告的末尾，刘昊然语气确定地甩出一句“有问题，上知乎”。显然，知乎这则广告面对的，就是现在还不知道有知乎这个网站存在的人。"
            },
             {
                imgSrc:require('../../assets/img/information/news02.jpg'),
                title:"哈佛大学被指歧视亚裔，“学生公平入学”组织向法院提交新报告",
                desc:"“学生公平入学”(Students for Fair Admissions) 组织已于6月15日就哈佛大学在录取时歧视亚裔，给亚裔学生的主观分打分偏低一事向波士顿一家联邦法院提交新证据。而哈佛大学援引相同调查材料得出不同结论，辩称亚裔种族因素对录取结果的影响“就数据而言几乎为零”。哈佛大学表示该案或将于今年10月开庭。"
            }
        ]
      }
    },
    computed:{
      swiper(){
        return this.$refs.mySwiperNews.swiper;
      }
    },
    mounted(){
        // console.log(this.swiper)
    }
}
</script>

<style lang="scss">
     $official-color: #20528f;
    .newsbanner-com{
        .newsbanner{
            overflow: hidden;
            border-radius: 2px;
        }
        // 新闻标题
        .newsInfo{
            .newsInfo-title{
                color: #333;
                font-weight: 700;
                font-size: 30px;
                letter-spacing: 2px;
            }
            .newsInfo-desc{
                font-size: 14px;
                margin-top: 30px;
                color: #999999;
                line-height: 2
            }
            .news-detail{
                color: #666;
                display: inline-block;
                background: #F0F0F0;
                border-radius: 100px;
                width: 100px;
                height: 40px;
                overflow: hidden;
                line-height: 40px;
                text-align: center;
                -webkit-transition: all 0.3s ease 0s;
                -ms-transition: all 0.3s ease 0s;
                -o-transition: all 0.3s ease 0s;
                transition: all 0.3s ease 0s;
                margin-top: 15px;
                &:hover{
                    text-decoration: none;
                    background:#e4e4e4;
                }
            }
        }
    }
</style>
