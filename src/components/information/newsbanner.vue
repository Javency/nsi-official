<template>
    <div class="newsbanner-com">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="newsbanner">
                        <swiper :options="swiperOption" ref="mySwiperNews">
                            <!-- slides -->
                            <swiper-slide v-for="(bannerInfos,item) in bannerInfo" :key="item">
                                <img :src="bannerInfos.imgSrc" alt="" class="img-responsive">
                                <div class="bg"></div>
                            </swiper-slide>
                            <div class="swiper-pagination"  slot="pagination"></div>
                            <div class="swiper-button-prev" slot="button-prev">‹</div>
                            <div class="swiper-button-next" slot="button-next">›</div>
                        </swiper>
                        <div class="slide-bar">
                          <!-- <p class="slidebar1">新闻头条</p> -->
                          <p class="slidebar2"><span>新</span> 闻头条</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="newsInfo animated fadeIn" v-for="(bannerInfos,index) in bannerInfo" :key="index" v-if="index==newsBannerIndex">
                        <h3><a href="javascript:;" class="newsInfo-title">{{bannerInfos.title}}</a></h3>
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

// var newsBannerIndex=0
export default {
    components: {
        swiper,
        swiperSlide
    },
    name: 'carrousel',
    data () {
        const self=this
        return {

        // 轮播
        newsBannerIndex:'',
        swiperOption: {
            notNextTick: true,
            autoplay: {
                delay:3000,
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
               transitionStart:function(swiper){
                   self.newsBannerIndex=this.realIndex
                  //  console.log(self.newsBannerIndex)
                }
            }
        },
        bannerInfo:[
            {
                imgSrc:require('../../assets/img/information/news01.jpg'),
                title:"知乎世界杯“洗脑广告”,瞄准了一群怎样的新用户",
                desc:"“上知乎问知乎答知乎看知乎搜知乎刷知乎……”在广告的末尾，刘昊然语气确定地甩出一句“有问题，上知乎”。显然，知乎这则广告面对的，就是现在还不知道有知乎这个网站存在的人。"
            },
             {
                imgSrc:require('../../assets/img/information/news02.jpg'),
                title:"哈佛大学被指歧视亚裔,“学生公平入学”组织向法院提交新报告",
                desc:"“学生公平入学”(Students for Fair Admissions) 组织已于6月15日就哈佛大学在录取时歧视亚裔，给亚裔学生的主观分打分偏低一事向波士顿一家联邦法院提交新证据。而哈佛大学援引相同调查材料得出不同结论，辩称亚裔种族因素对录取结果的影响“就数据而言几乎为零”。哈佛大学表示该案或将于今年10月开庭。"
            },
            {
                imgSrc:require('../../assets/img/information/news03.jpg'),
                title:"文在寅今起访俄将在俄杜马演讲，行前呼吁推进韩朝俄三边合作",
                desc:"韩国总统文在寅将于21日起对俄罗斯进行为期三天的国事访问。文在寅将成为19年来首位出访俄罗斯的韩国总统。青瓦台发言人金宜谦此前介绍，在三天的访问中，文在寅将同俄罗斯总统普京举行双边会谈，就实现朝鲜半岛无核化、构建永久和平机制的方案进行商讨。金宜谦还表示，韩俄双方将确认发展面向未来的双边关系，并讨论在此基础上推动实质性合作，使得双边合作超越东北亚地区，延伸至亚欧大陆，共同迎来繁荣的方案。"
            },
            {
                imgSrc:require('../../assets/img/information/news04.jpg'),
                title:"全国整改培训机构超1.2万所，校外培训热仍未真正“退烧”",
                desc:"前不久，教育部基础教育司司长吕玉刚在教育部新闻发布会上表示，校外培训机构专项治理工作启动后，各地高度重视，全国31个省份及新疆生产建设兵团全部向社会公布了校外培训机构专项治理工作方案。一份沉甸甸的阶段性成绩单晒出：截至5月23日，已摸排校外培训机构128418所，已整改培训机构12251所。其中，整改存在重大安全隐患机构2822所，占存在此类问题机构总数的28.08%；整改语文、数学、英语等学科类培训“超纲教学”“提前教学”“强化应试”机构1241所，占存在此类问题机构总数的16.74%。"
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

    }
}
</script>

<style lang="scss">
     $official-color: #20528f;
     $newsBanner-bg:linear-gradient(-180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.37) 100%);
    .newsbanner-com{
        .newsbanner{
            overflow: hidden;
            border-radius: 2px;
            transition: all .3s;
            &:hover .swiper-button-prev,
            &:hover .swiper-button-next{
              opacity: .4;
            }
            .swiper-button-prev,
            .swiper-button-next{
              width:60px;
              height: 60px;
              line-height: 52px;
              text-align: center;
              border-radius: 50%;
              color: #222;
              background: #fff;
              font-size: 50px;
              opacity: 0;
              transition: all .3s;
              &:hover{
                opacity: .9;
              }
            }
            .swiper-pagination-bullet-active{
              background: #FFF;
            }
            .slide-bar{
                position: absolute;
                left: -49px;
                bottom: 0;
                width: 24px;
                display: flex;
                align-items: flex-end;
                justify-content: center;
                flex-direction: column;
                .slidebar1{
                    font-size: 14px;
                    color: #999999;
                    letter-spacing: 0;
                    line-height: 28px;
                    margin-bottom: 30px;
                    text-align: center;
                }
                .slidebar2{
                    font-size: 24px;
                    color: #999999;
                    letter-spacing: 0;
                    line-height: 28px;
                    text-align: center;
                    margin-bottom: 0;
                    span{
                      display: inline-block;
                      color: $official-color;
                      font-size: 45px;
                      margin-bottom: 15px;
                    }
                }
            }
            .bg{
                position: absolute;
                width: 100%;
                height: 100%;
                background-image: $newsBanner-bg;
                left: 0;
                top: 0;
            }
        }
        // 新闻标题
        .newsInfo{
            .newsInfo-title{
                color: #333;
                font-weight: 700;
                font-size: 30px;
                letter-spacing: 2px;
                transition: all .3s;
                &:hover{
                    text-decoration: none;
                    color: #44638a;
                }
            }
            .newsInfo-desc{
                font-size: 14px;
                margin-top: 30px;
                color: #999999;
                line-height: 2;
                 overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 6;
                -webkit-box-orient: vertical;
                max-height: 168px;
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
