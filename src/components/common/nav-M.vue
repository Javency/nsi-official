<template>
    <div class="nav-m-com">
        <div class="container-fluid pr30">
            <div class="swiper-container swiperM" id="swiperM">
                <div class="swiper-wrapper newsWrapper" ref="newsWrapper">
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" :to="{path:'/'}" exact>{{$t('layoutNav.index')}}</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" :to="{path:'/about'}">{{$t('layoutNav.aboutus')}}</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" :to="{path:'/news'}">{{$t('layoutNav.information')}}</router-link>
                    </div>
                    <div class="swiper-slide navSlide">
                         <router-link tag="i" :to="{path:'/event'}">{{$t('layoutNav.event')}}</router-link>
                        <!-- <el-dropdown placement="top" trigger="click">
                            <span class="el-dropdown-link">
                                <router-link tag="i" :to="{path:'/event'}">{{$t('layoutNav.event')}}<span class="caret"></span></router-link>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <a href="javascript:;" target="_"><img src="../../assets/img/layoutImg/vis2018.png" width="35" alt="">&nbsp;VIS国际学校发展大会</a>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <a href="javascript:;" target="_">专题研讨会</a>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown> -->
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" :to="{path:'/lotus'}">{{$t('layoutNav.lotus')}}</router-link>
                        <!-- <el-dropdown placement="top" trigger="click">
                            <span class="el-dropdown-link">
                                 <router-link tag="i" :to="{path:'/lotus'}">{{$t('layoutNav.lotus')}}<span class="caret"></span></router-link>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <a href="http://data.xinxueshuo.cn/nsi-event/Lotus2018/lotus.html" target="_">广州新荷学校</a>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <a href="https://jinshuju.net/f/L4Iz9D" target="_">上海新荷学校（9月）</a>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <a href="https://jinshuju.net/f/L4Iz9D" target="_">北京新荷学校（10月）</a>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown> -->
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" :to="{path:'/research'}" >{{$t('layoutNav.research')}}</router-link>
                        <!-- <el-dropdown placement="top" trigger="click">
                            <span class="el-dropdown-link">
                                <router-link tag="i" :to="{path:'/research'}" >{{$t('layoutNav.research')}}</router-link>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <a href="#">{{$t('layoutNav.researchChild.pisom')}}</a>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <a href="http://class.xinxueshuo.cn" target="_"><img src="../../assets/img/layoutImg/classLogo.png" width="20" alt="">&nbsp;{{$t('layoutNav.researchChild.classOnline')}}</a>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <router-link tag="i" :to="{path:'/research/periodical'}"><span class="iconfont icon-qikan fontLogo"></span>&nbsp;{{$t('layoutNav.researchChild.magazine')}}</router-link>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <router-link tag="i" :to="{path:'/research/periodical'}"><span class="iconfont icon-baogao fontLogo"></span>&nbsp;{{$t('layoutNav.researchChild.report')}}</router-link>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown> -->
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" :to="{path:'/consulting'}">{{$t('layoutNav.consult')}}</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div id="more" @click="toTranslate()" ref="more">
            <a href="javascript:;" class="iconfont icon-hao more"></a>
        </div>
        <div class="morePanel animated fadeIn" v-show="openMore">
            <ul>
                <li>首页</li>
                <li>关于我们</li>
                <li>资讯中心</li>
                <li>会议活动</li>
                <li>新荷学校</li>
                <li>研究院</li>
                <li>咨询服务</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    data(){
        return{
            activeNav:0,
            openMore:false,
            layoutNav:[this.$t('layoutNav.index'),this.$t('layoutNav.aboutus'),this.$t('layoutNav.information'),this.$t('layoutNav.event'),this.$t('layoutNav.louts'),this.$t('layoutNav.research'),this.$t('layoutNav.researchChild.magazine'),this.$t('layoutNav.researchChild.report'),this.$t('layoutNav.researchChild.pisom'),this.$t('layoutNav.researchChild.classOnline'),,this.$t('layoutNav.consult')],
        }
    },
    methods:{
        navSwiperInit(){
            const _this=this;
            var swiperM=new Swiper('#swiperM', {
                notNextTick: true,
                freeMode:true,
                freeModeMomentumRatio : 5,
                freeModeMomentum:true,
                freeModeMomentumBounce:false,
                // width:95,
                slidesPerView : 4,
                slideToClickedSlide: true,
                // centeredSlides: true,
                resistanceRatio:0.7,
                // slidesOffsetBefore:-60,
                // initialSlide :1,
                on:{
                    slideChangeTransitionStart:function(swiper){
                        _this.activeNav=this.realIndex
                    },
                    tap:function(){
                        _this.activeNav=this.realIndex
                    }
                }
            })
        },
        toTranslate(){
            this.openMore=!this.openMore
            this.openMore?this.$refs.more.style.transform="rotate(-45deg)":this.$refs.more.style.transform="rotate(0)"
        },
        handleScroll(){
            this.openMore=false;
        }
    },
    mounted(){
        this.navSwiperInit()
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="scss">
    .nav-m-com{
         @mixin transitionAnimate{
          -webkit-transition: all 0.3s ease 0s;
          -ms-transition: all 0.3s ease 0s;
          -o-transition: all 0.3s ease 0s;
          transition: all 0.3s ease 0s;
      }
      .pr30{
          padding-right: 30px;
      }
        position: relative;
        $official-color: #20528f;
        // padding-top: 15px;
        // border-top: 3px solid $official-color;
        padding: 10px 0 5px 0;
        border-bottom: 1px solid #ddd;
        .navSlide{
            text-align: center;
            i,a{
                font-style: normal;
                display: inline-block;
                padding-bottom: 5px;
                font-size: 16px;
                margin-top: 5px;
                outline: none !important;
            }
            .router-link-active{
                font-size: 20px !important;
                font-weight: 600;
                padding-bottom: 0 !important;
                margin-top: 0;
                color: $official-color
            }
        }
        // 更多
        #more{
            position: absolute;
            z-index: 99;
            font-weight: 700;
            right:6px;
            top: 11px;
            color: #666;
            @include transitionAnimate();
            a{
                font-size: 18px;
                color: #666;
                text-decoration: none;
                position: relative;
                @include transitionAnimate();
            }
        }
        // 更多面板
        .morePanel{
            // border-top: 1px solid #ddd;
            background-color: #FFF;
            position: relative;
            z-index: 99;
            top: 6px;
            -webkit-animation-duration: .5s;
            animation-duration:.5s;
            ul{
                width: 100%;
                padding: 15px 0 2px 31px;
                background-color: rgba($color: #ffffff, $alpha: .8);
                margin: 0;
                display: flex;
                flex-wrap: wrap;
                // align-content:center;
                align-items:flex-start;
                justify-content: flex-start;
                position: fixed;
                box-shadow: 0 4px 8px 0 rgba(7, 17, 27, .1);
                li{
                    list-style: none;
                    width: 80px;
                    text-align: center;
                    height: 30px;
                    line-height: 30px;
                    color: #333333;
                    border-radius: 2px;
                    margin-bottom: 20px;
                    margin-right: 10px;
                    background-color: #f1f1f1;
                }
            }
        }
    }
</style>
