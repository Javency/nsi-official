<template>
    <div class="nav-m-com">
        <div class="container-fluid">
            <div class="swiper-container swiperM" id="swiperM">
                <div class="swiper-wrapper">
                    <!-- <div class="swiper-slide navSlide" v-for="(nav,index) in layoutNav" :key="index" @click="currentIndex(index)">
                        <span :class="{activeNav:index==activeNav}">{{nav}}</span>
                    </div> -->
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
                        <el-dropdown placement="top" trigger="click">
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
                        </el-dropdown>
                    </div>
                    <div class="swiper-slide navSlide">
                        <el-dropdown placement="top" trigger="click">
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
                        </el-dropdown>
                    </div>
                    <div class="swiper-slide navSlide">
                        <el-dropdown placement="top" trigger="click">
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
                        </el-dropdown>
                    </div>
                    <div class="swiper-slide navSlide">
                        <router-link tag="i" :to="{path:'/consulting'}">{{$t('layoutNav.consult')}}</router-link>
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
            activeNav:0,
            layoutNav:[this.$t('layoutNav.index'),this.$t('layoutNav.aboutus'),this.$t('layoutNav.information'),this.$t('layoutNav.event'),this.$t('layoutNav.louts'),this.$t('layoutNav.research'),this.$t('layoutNav.researchChild.magazine'),this.$t('layoutNav.researchChild.report'),this.$t('layoutNav.researchChild.pisom'),this.$t('layoutNav.researchChild.classOnline'),,this.$t('layoutNav.consult')],
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
            i,a{
                font-style: normal;
                display: inline-block;
                padding-bottom: 5px;
                font-size: 16px;
                margin-top: 5px;
            }
            .router-link-active{
                font-size: 20px !important;
                font-weight: 600;
                padding-bottom: 0 !important;
                margin-top: 0;
                color: $official-color
            }
        }
    }
</style>
