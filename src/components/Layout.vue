<template>
    <div>
        <div class="header">
            <!-- logo -->
            <div class="container-fluid">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="logoContainer">
                                <a href="javascript:;"><img src="../assets/img/layoutImg/logo.png" alt="" width="220" height="45"></a>
                                <div class="selectLang">
                                    <!-- <a href="javascript:;"><img src="../assets/img/layoutImg/zh.png" alt="" width="30"></a> -->
                                    <!-- <a href="javascript:;" v-for="(logo,index) in logos" v-if="logo.switchFlag==true"><img :src="logo.logoImg" alt="" width="30">
                                        &nbsp;{{logo.country}}
                                    </a> -->
                                    <el-dropdown @command="handleCommand">
                                        <span class="el-dropdown-link">
                                            <!-- <img v-for="(logo,index) in logos" :key="index" :src="logo.logoImg" alt="" width="30">&nbsp;{{logo.country}}<i class="el-icon-arrow-down el-icon--right"></i> -->
                                            <img class="activelogo" :src="logoActive" alt="" width="30">&nbsp;{{countryActive}}<i class="el-icon-arrow-down el-icon--right"></i>
                                        </span>
                                        <el-dropdown-menu slot="dropdown">
                                            <el-dropdown-item v-for="(logo,index) in logos" :key="index" :command="logo">
                                                <img :src="logo.logoImg" alt="" width="30">&nbsp;{{logo.country}}
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </el-dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- nav -->
            <!-- <div class="nav-bg searchBar" :class="searchBarFixed==true?'isFixed':''" id="searchBar"> -->
            <div class="nav-bg searchBar isFixed" id="searchBar">
                <div class="container plpr0 navContainer">
                    <div class="row">
                        <div class="col-md-12 plpr0">
                            <nav class="navbar navbar-default">
                                <div class="container-fluid">
                                    <!-- Brand and toggle get grouped for better mobile display -->
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>

                                    <!-- Collect the nav links, forms, and other content for toggling -->
                                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                        <ul class="nav navbar-nav navbar-center">
                                            <li><router-link :to="{path:'/'}">{{$t('layoutNav.index')}}</router-link><span class="sr-only">(current)</span></li>
                                            <li class="dropdown">
                                                <router-link :to="{path:'/about'}">{{$t('layoutNav.aboutus')}}</router-link>
                                                <!-- <ul class="dropdown-menu">
                                                    <li><a href="#">公司使命</a></li>
                                                    <li><a href="#">团队介绍</a></li>
                                                    <li><a href="#">合作伙伴</a></li>
                                                    <li><a href="#">联系我们</a></li>
                                                </ul> -->
                                            </li>
                                            <li><router-link :to="{path:'/InformationCenter'}">{{$t('layoutNav.information')}}</router-link></li>
                                            <li>
                                                <!-- <router-link :to="{path:'/event'}">{{$t('layoutNav.event')}}</router-link> -->
                                                <router-link :to="{path:'/event'}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutNav.event')}}<span class="caret"></span></router-link>
                                                <ul class="dropdown-menu">
                                                    <li><a href="javascript:;" target="_">VIS国际学校发展大会</a></li>
                                                    <li><a href="javascript:;" target="_">专题研讨会</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown">
                                                <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutNav.louts')}}<span class="caret"></span></a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="http://data.xinxueshuo.cn/nsi-event/Lotus2018/lotus.html" target="_">广州新荷学校</a></li>
                                                    <li><a href="https://jinshuju.net/f/L4Iz9D" target="_">上海新荷学校（9月）</a></li>
                                                    <li><a href="https://jinshuju.net/f/L4Iz9D" target="_">北京新荷学校（10月）</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown">
                                                <router-link :to="{path:'/research'}" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t('layoutNav.research')}}<span class="caret"></span></router-link>
                                                <ul class="dropdown-menu">
                                                    <li><router-link :to="{path:'/research/periodical'}">{{$t('layoutNav.researchChild.magazine')}}</router-link></li>
                                                    <li><a href="#">{{$t('layoutNav.researchChild.pisom')}}</a></li>
                                                    <li><a href="http://class.xinxueshuo.cn" target="_">{{$t('layoutNav.researchChild.classOnline')}}</a></li>
                                                </ul>
                                            </li>
                                            <li><router-link :to="{path:'/consulting'}">{{$t('layoutNav.consult')}}</router-link></li>
                                        </ul>
                                    </div><!-- /.navbar-collapse -->
                                </div><!-- /.container-fluid -->
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <!-- <keep-alive> -->
                <router-view></router-view>
            <!-- </keep-alive> -->
        </div>
        <div class="footer mt50">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <h3 class="contact">CONTACT&nbsp;<span>联系我们</span></h3>
                <ul class="contact-info">
                  <li>{{$t('layoutFooter.tel')}}</li>
                  <li>{{$t('layoutFooter.email')}}</li>
                  <li>{{$t('layoutFooter.phone')}}</li>
                  <li>{{$t('layoutFooter.address')}}</li>
                </ul>
              </div>
              <div class="col-md-4">
                  <div class="row">
                      <div class="col-md-4">
                            <h6 class="aboutUs">● &nbsp;关于我们</h6>
                            <ul class="aboutUs-info">
                                <li><a href="javascript:;">› &nbsp;公司简介</a></li>
                                <li><a href="javascript:;">› &nbsp;发展历程</a></li>
                                <li><a href="javascript:;">› &nbsp;企业文化</a></li>
                                <li><a href="javascript:;">› &nbsp;荣誉资质</a></li>
                            </ul>
                      </div>
                      <div class="col-md-4">
                           <h6 class="aboutUs">● &nbsp;业务范围</h6>
                            <ul class="aboutUs-info">
                                <li><a href="javascript:;">› &nbsp;公司简介</a></li>
                                <li><a href="javascript:;">› &nbsp;发展历程</a></li>
                                <li><a href="javascript:;">› &nbsp;企业文化</a></li>
                                <li><a href="javascript:;">› &nbsp;荣誉资质</a></li>
                            </ul>
                      </div>
                      <div class="col-md-4">
                          <h6 class="aboutUs"><br/></h6>
                            <ul class="aboutUs-info">
                                <li><a href="javascript:;">› &nbsp;公司简介</a></li>
                                <li><a href="javascript:;">› &nbsp;发展历程</a></li>
                                <li><a href="javascript:;">› &nbsp;企业文化</a></li>
                                <li><a href="javascript:;">› &nbsp;荣誉资质</a></li>
                            </ul>
                      </div>
                  </div>
              </div>
              <div class="col-md-4 text-right noPr15">
                  <div class="wechatBox text-left">
                    <h6 class="aboutUs">● &nbsp;{{this.$t('layoutFooter.weChat')}}</h6>
                    <img src="../assets/img/layoutImg/wechat_QR.png" alt="" width="110" height="110">
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h3 class="footer-company">新学说文化传媒有限公司</h3>
                <h3 class="footer-company company-en">NewSchool Insight MEDIA</h3>
              </div>
              <div class="col-md-6">
                <div class="copyright">
                  <p>Copyright © 2018 xinxueshuo.cn All Rights Reserved 京ICP备 16031987号-1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchBarFixed:false,
            switchFlag:true,
            logoActive:require("../assets/img/layoutImg/zh.png"),
            countryActive:"中文",
            logos:[{
                lang:"zh",
                logoImg:require("../assets/img/layoutImg/zh.png"),
                country:"中文",
                switchFlag:true
            },{
                lang:"en",
                logoImg:require("../assets/img/layoutImg/en.png"),
                country:"English",
                switchFlag:false
            }],
            layoutNav:[this.$t('layoutNav.index'),this.$t('layoutNav.aboutus'),this.$t('layoutNav.information'),this.$t('layoutNav.event'),this.$t('layoutNav.louts'),this.$t('layoutNav.research'),this.$t('layoutNav.researchChild.magazine'),this.$t('layoutNav.researchChild.pisom'),this.$t('layoutNav.researchChild.classOnline'),,this.$t('layoutNav.consult')],
            layoutFooter:[this.$t('layoutFooter.tel'),this.$t('layoutFooter.email'),this.$t('layoutFooter.phone'),this.$t('layoutFooter.address'),this.$t('layoutFooter.weChat')]
        }
    },
   mounted(){
        window.addEventListener('scroll', this.handleScroll)
   },
   methods:{
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var searchTop = document.querySelector('#searchBar').offsetTop
        // console.log(scrollTop)
          // if (scrollTop > offsetTop) {
          //   this.searchBarFixed = true
          // } else {
          //   this.searchBarFixed = false
          // }
          if(scrollTop>0){
            searchTop = 85 - Number(scrollTop);
            if(searchTop<=0){
              document.querySelector('#searchBar').style.opacity="0.9"
              document.querySelector('#searchBar').style.top ='0px';
            }else{
              document.querySelector('#searchBar').style.top = searchTop+'px';
            }
          }else{
            document.querySelector('#searchBar').style.opacity="1"
            document.querySelector('#searchBar').style.top = '85px';
          }
      },
      handleCommand(command) {
        // this.$message('click on item ' + command);
        // this.logos[0].logoImg=command.logoImg
        // this.logos[0].country=command.country
        switch(command.lang){
            case "zh":
                this.logoActive=this.logos[0].logoImg
                this.countryActive=this.logos[0].country
                break;
            case "en":
                this.logoActive=this.logos[1].logoImg
                this.countryActive=this.logos[1].country
                break;
        }
        this.$i18n.locale =command.lang
        // console.log(command)
      },
    //   changeLang(index){
    //       console.log(index)
    //   }
   }
}
</script>

<style lang="scss">
    $official-color: #20528f;
    $official-hoverColor:#0e3361;
    $official-footerColor:#2c6daf;
    $official-footerFontColor:#699bda;
    $official-otherColor:#8fb8fb;
    .mt50{
        margin-top: 50px;
    }
    .noPr15{
        padding-right: 0;
    }
    .searchBar{
        transition: opacity .3s;
        box-shadow: 0 4px 8px rgba(0, 0, 0, .28);
    }
    .plpr0{
        padding-left: 0;
        padding-right: 0;
    }
    .logoContainer{
        padding: 20px 0;
    }

    .nav-bg{
        background-color: $official-color;
        z-index: 999;
        position: relative;
        width: 100%;
    }
    .navbar{
        margin-bottom: 0;
        background-color: $official-color;
        border-color: $official-color;
    }
    .navbar-default .navbar-nav>li>a{
        color: #fff;
        transition: all .2s;
        font-size: 16px;
        // font-weight: 600;
        letter-spacing: 1px;
    }
    .navbar-default .navbar-nav>.active>a, .navbar-default .navbar-nav>.active>a:focus, .navbar-default .navbar-nav>.active>a:hover {
        color: #fff;
        background-color: $official-hoverColor;
    }
    .navbar-default .navbar-nav>li>a:focus, .navbar-default .navbar-nav>li>a:hover {
        color: #fff;
        background-color: $official-hoverColor;
    }
    .navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:focus, .navbar-default .navbar-nav>.open>a:hover {
        color: #fff;
        background-color: $official-hoverColor;
    }
    .navbar-default .navbar-toggle {
        border-color: #fff;
        right: 15px;
    }
    .navbar-default .navbar-toggle .icon-bar {
        background-color: #fff;
    }

    .navbar-default .navbar-toggle:hover {
        background-color: #fff;
    }
    .navbar-default .navbar-toggle:focus{
         background-color: $official-hoverColor;
    }

    .navbar-nav {
        margin: 0 -15px;
        position: relative;
    }
    /* 选择语言*/
    .selectLang{
        position: absolute;
        right: 15px;
        top: 25px;
        a{
            color: #777;
        }
        .activelogo{
            border: none;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.28);
            border-radius: 50%;
        }
    }
    .el-dropdown-menu{
        z-index: 10000 !important;
    }
    /* 判断吸顶 */

    .isFixed{
        position:fixed;
        top:85px;
        z-index:9999;
        width: 100%;
        // opacity: .9;
    }

    /* footer */
    .footer{
      padding: 20px 0;
      background-color: $official-footerColor;
    }
    .footer{
      color: #FFF;
    }
    .footer>.container{
        padding-left: 0;
        padding-left: 0;
    }
    .footer .contact{
      font-weight: 700;
      color: #FFF;
      font-size: 28px;
      font-family: -webkit-pictograph,'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .footer .contact>span{
      font-weight: normal;
      font-size: 14px;
      font-family: "微软雅黑",Arial, Helvetica, sans-serif;
      letter-spacing: 1px;
    }
    .contact-info{
      padding-left: 0;
      list-style: none;
    }
    .contact-info>li{
      line-height: 2;
      color: $official-footerFontColor;
      font-family: Arial, Helvetica, sans-serif
    }
    .footer-bottom{
      padding: 20px 0;
      background-color: #2f2f2f;
    }
    .footer-bottom>.container{
        padding-left: 0;
        padding-right:0;
    }
    .footer-company{
      color: #969696;
      letter-spacing: 1px;
    }
    .company-en{
      font-size: 18px;
    }
    .copyright{
      padding-top: 40px;
      font-size: 13px;
      color: #969696;
    }
    .aboutUs{
        font-weight: 700;
        margin: 20px 0 10px 0;
        color: $official-otherColor;
    }
   .aboutUs-info>li>a{
        color: $official-footerFontColor;
    }
    .aboutUs-info{
        padding-left: 0;
    }
    .aboutUs-info>li{
        list-style: none;
        line-height:2.3;
    }
    .wechatBox{
        display: inline-block;
    }
    @media (max-width: 768px){
    .navbar-default .navbar-nav .open .dropdown-menu>li>a {
          color: #fff
      }

     .nav-bg{
        background-color: $official-color;
        z-index: 999;
        position: fixed;
        width: 100%;
    }
    .navContainer{
        padding-left: 15px;
        padding-right: 1px;
    }
    .content{
        padding-top: 52px;
    }
    .footer>.container,
    .footer-bottom>.container{
        padding-left: 15px;
        padding-right:15px;
    }
}
</style>
