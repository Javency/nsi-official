<template>
    <div>
        <div class="bg">
            <!-- banner -->
            <swiper :options="swiperOption" ref="mySwiper" class="swipercontainer">
               <!-- slides -->
               <swiper-slide class="bg">
                   <div class="container bg-content"><img src="../assets/img/banner01.jpg" alt="" class="img-responsive"></div>
                   <div class="bgblur bg01"></div>
               </swiper-slide>
                <swiper-slide class="bg">
                   <div class="container bg-content"><img src="../assets/img/banner02.jpg" alt="" class="img-responsive"></div>
                   <div class="bgblur bg02"></div>
               </swiper-slide>
               <!-- <swiper-slide class="bg bg02"><div class="container"><img src="../assets/img/banner02.jpg" alt="" class="img-responsive"></div></swiper-slide>
               <swiper-slide class="bg bg01"><div class="container"><img src="../assets/img/banner01.jpg" alt="" class="img-responsive"></div></swiper-slide>
               <swiper-slide class="bg bg02"><div class="container"><img src="../assets/img/banner02.jpg" alt="" class="img-responsive"></div></swiper-slide>
               <swiper-slide class="bg bg01"><div class="container"><img src="../assets/img/banner01.jpg" alt="" class="img-responsive"></div></swiper-slide>
               <swiper-slide class="bg bg02"><div class="container"><img src="../assets/img/banner02.jpg" alt="" class="img-responsive"></div></swiper-slide> -->
               <!-- Optional controls -->
               <div class="swiper-pagination"  slot="pagination"></div>
               <div class="swiper-button-prev" slot="button-prev"></div>
               <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
            <!-- 悬浮框 -->
            <!-- <div class="event">
                <div class="container">
                   <div class="event-box event-top">

                   </div>
                   <div class="event-box event-bottom">

                   </div>
                </div>
            </div> -->
        </div>
        <div class="container-fulid">
            <div class="container newestPlpr0">
                <!-- 最新动态 -->
                <div class="newest pt50">
                    <!-- title -->
                    <div class="index-title">
                        <span class="line left-line"></span>
                        <h3 class="text-center">最新动态</h3>
                        <h3 class="text-center mt0"><small>Recent Developments</small></h3>
                        <span class="line right-line"></span>
                    </div>
                    <div class="row pt50">
                        <!-- 两则新闻概要 -->
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="news-content">
                                        <img src="" alt="" width="100%" height="200px" class="news-img">
                                    </div>
                                    </div>
                                <div class="col-md-8">
                                    <div class="newsBox">
                                        <h5 class="mt0 multiline"><a href="javascript:;" class="news-title">世界杯身价榜：法国居首德国第五</a></h5>
                                        <p class="news-articel multiline">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor accusantium esse repellendus minima soluta. Odit ab eum omnis facere? Corrupti eius, sapiente natus nemo eveniet pariatur perspiciatis sunt distinctio consequatursapiente natus nemo eveniet pariatur perspiciatis sunt distinctio consequatur.</p>
                                        <span class="news-time">2018.06.13</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="news-content">
                                        <img src="" alt="" width="100%" height="170px" class="news-img">
                                    </div>
                                    </div>
                                <div class="col-md-8">
                                    <div class="newsBox">
                                        <h5 class="mt0 multiline"><a href="javascript:;" class="news-title">世界杯身价榜：法国居首德国第五</a></h5>
                                        <p class="news-articel multiline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat enim laudantium expedita aliquam a ipsum voluptas ut mollitia et dolores consectetur ea placeat ad repudiandae inventore, quas sit dolore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor accusantium esse repellendus minima soluta. Odit ab eum omnis facere? Corrupti eius, sapiente natus nemo eveniet pariatur perspiciatis sunt distinctio consequatur.</p>
                                        <span class="news-time">2018.06.13</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fourNews">
                      <div class="row mt30">
                          <!-- 四条新闻标题 -->
                          <div class="col-md-6">
                              <div class="newsInfo">
                                  <div class="row">
                                    <div class="col-md-10">
                                      <p class="multiline newsInfo-title"><a href="javascript:;" class="newsInfo-detail">• 世界杯身价榜：法国居首德国第五?</a></p>
                                    </div>
                                    <div class="col-md-2">
                                      <span class="newsInfo-time">2018.06.13</span>
                                    </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="newsInfo">
                                  <div class="row">
                                    <div class="col-md-10">
                                      <p class="multiline newsInfo-title"><a href="javascript:;" class="newsInfo-detail">• Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque necessitatibus quis debitis quam, autem quas porro recusandae at quaerat alias rem nemo sequi itaque reprehenderit odit cumque iusto ratione?</a></p>
                                    </div>
                                    <div class="col-md-2">
                                      <span class="newsInfo-time">2018.06.13</span>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-md-6">
                              <div class="newsInfo">
                                  <div class="row">
                                    <div class="col-md-10">
                                      <p class="multiline newsInfo-title"><a href="javascript:;" class="newsInfo-detail">• Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque necessitatibus quis debitis quam, autem quas porro recusandae at quaerat alias rem nemo sequi itaque reprehenderit odit cumque iusto ratione?</a></p>
                                    </div>
                                    <div class="col-md-2">
                                      <span class="newsInfo-time">2018.06.13</span>
                                    </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-6">
                              <div class="newsInfo">
                                  <div class="row">
                                    <div class="col-md-10">
                                      <p class="multiline newsInfo-title"><a href="javascript:;" class="newsInfo-detail">• Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque necessitatibus quis debitis quam, autem quas porro recusandae at quaerat alias rem nemo sequi itaque reprehenderit odit cumque iusto ratione?</a></p>
                                    </div>
                                    <div class="col-md-2">
                                      <span class="newsInfo-time">2018.06.13</span>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
                <!-- 近期活动 -->
                <div class="activities pt50">
                   <!-- title -->
                    <div class="index-title">
                      <span class="line left-line"></span>
                      <h3 class="text-center">近期活动</h3>
                      <h3 class="text-center mt0"><small>Recent Activities</small></h3>
                      <span class="line right-line"></span>
                    </div>
                    <!-- 活动概要 -->
                    <div class="activitiesBox pt50">
                      <div class="row">
                        <div class="col-md-6">
                            <div class="activities-current animated fadeInLeft" v-for="currentEvent in activitiesCurrent" v-if="currentEvent.serialNum==currentSerialNum" :key="currentEvent.serialNum">
                                <h1 class="activitiesTitle"><a href="javascript:;">{{currentEvent.titleEN}}</a></h1>
                                <h1 class="activities-zh"><a href="javascript:;">{{currentEvent.titleZH}}</a></h1>
                                <p class="activities-info">{{currentEvent.time}}</p>
                                <p class="activities-info bottomLine">{{currentEvent.spot}}</p>
                                <p class="activities-article multiline">{{currentEvent.content}}</p>
                            </div>
                        </div>
                        <div class="col-md-5 col-md-offset-1">
                          <div class="othersActivities">
                            <div class="row">
                              <div class="col-md-6 plpr0" v-for="(activities,index) in othersActivities" @mouseenter="active(index)" :key="index">
                                <a href="javascript:;">
                                  <div class="othersBox" :class="activities.className">
                                    <!-- <div class="othersBox-bg"></div> -->
                                    <div class="othersBox-content">
                                      <p>{{activities.title}}</p>
                                      <p>{{activities.time}}</p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <!-- <div class="col-md-6 plpr0">
                                <a href="javascript:;">
                                  <div class="othersBox othersBox02">
                                    <div class="othersBox-bg"></div>
                                    <div class="othersBox-content">
                                      <p>新荷学校大会</p>
                                      <p>2018.06.05-2018.06.07</p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="col-md-6 plpr0">
                                <a href="javascript:;">
                                  <div class="othersBox othersBox03">
                                    <div class="othersBox-bg"></div>
                                    <div class="othersBox-content">
                                      <p>新荷学校大会</p>
                                      <p>2018.06.05-2018.06.07</p>
                                    </div>
                                  </div>
                                </a>
                              </div>
                              <div class="col-md-6 plpr0">
                                <a href="javascript:;">
                                  <div class="othersBox othersBox04">
                                    <div class="othersBox-bg"></div>
                                    <div class="othersBox-content">
                                      <p>新荷学校大会</p>
                                      <p>2018.06.05-2018.06.07</p>
                                    </div>
                                  </div>
                                </a>
                              </div> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // require('swiper/dist/css/swiper.css')
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    var currentSerialNum=0;
    export default {
        components: {
            swiper,
            swiperSlide
        },
        name: 'carrousel',
        data() {
            return {
                // 轮播
                swiperOption: {
                    autoplay: {
                        disableOnInteraction: false,
                    },
                    loop: true,
                    spaceBetween: 30,
                    effect: 'fade',
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                },
                // 当前活动文章
                currentSerialNum:0,
                activitiesCurrent:[
                    {   
                        serialNum:0,
                        titleEN:"Standarization Unlocks the Promising Future",
                        titleZH:"新荷学校大会",
                        time:"2018.06.05-2018.06.07",
                        spot:"广州某某某饭店",
                        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptatibus cum animi eius expedita deleniti saepe assumenda voluptates mollitia, nesciunt praesentium, id sit? Odio assumenda perferendis eos unde nisi eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis minus ut pariatur ab dolores omnis. Sed beatae odit provident consequatur fugiat eius id libero maiores omnis perferendis, perspiciatis numquam."
                    }, 
                    {
                        serialNum:1,
                        titleEN:"VIS Conference",
                        titleZH:"VIS研讨会",
                        time:"2018.06.13-2018.06.20",
                        spot:"北京某某某饭店",
                        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptatibus cum animi eius expedita deleniti saepe assumenda voluptates mollitia, nesciunt praesentium, id sit? Odio assumenda perferendis eos unde nisi eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis minus ut pariatur ab dolores omnis. Sed beatae odit provident consequatur fugiat eius id libero maiores omnis perferendis, perspiciatis numquam."
                    },
                     {
                        serialNum:2,
                        titleEN:"HR Human Resources Conference",
                        titleZH:"HR人力资源研讨会",
                        time:"2018.06.05-2018.06.07",
                        spot:"北京某某某饭店",
                        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptatibus cum animi eius expedita deleniti saepe assumenda voluptates mollitia, nesciunt praesentium, id sit? Odio assumenda perferendis eos unde nisi eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis minus ut pariatur ab dolores omnis. Sed beatae odit provident consequatur fugiat eius id libero maiores omnis perferendis, perspiciatis numquam."
                    },
                     {
                        serialNum:3,
                        titleEN:"To Be Continue",
                        titleZH:"敬请期待",
                        time:"2018.06.05-2018.06.07",
                        spot:"上海某某某饭店",
                        content:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptatibus cum animi eius expedita deleniti saepe assumenda voluptates mollitia, nesciunt praesentium, id sit? Odio assumenda perferendis eos unde nisi eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis minus ut pariatur ab dolores omnis. Sed beatae odit provident consequatur fugiat eius id libero maiores omnis perferendis, perspiciatis numquam."
                    }
                ],
                // 近期活动
                othersActivities:[
                    {
                        title:"新荷学校大会",
                        time:"2018.06.05-2018.06.07",
                        bg:require('../assets/img/othersBox01.jpg'),
                        className:"othersBox01"
                    },
                    {
                        title:"VIS研讨会",
                        time:"2018.06.05-2018.06.07",
                        bg:require('../assets/img/othersBox02.jpg'),
                        className:"othersBox02"
                    },
                    {
                        title:"HR人力资源研讨会",
                        time:"2018.06.05-2018.06.07",
                        bg:require('../assets/img/othersBox03.jpg'),
                        className:"othersBox03"
                    },
                    {
                        title:"新荷学校大会",
                        time:"2018.06.05-2018.06.07",
                        bg:require('../assets/img/othersBox04.jpg'),
                        className:"othersBox04"
                    }
                ]
            }
        },
        methods:{
            active:function(index){
                this.currentSerialNum=index
                console.log(currentSerialNum)
            }
        }
    }
</script>

<style>
    /* common */
    .others{
      padding-left: 0;
      padding-right: 0;
    }
    .pt50{
        padding-top: 50px;
    }
    .pl0{
        padding-left: 0;
    }
    .mt0{
        margin-top: 0;
    }
    .mt30{
      margin-top:30px;
    }
    .mt50{
      margin-top: 50px;
    }
    .multiline{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    /* banner */
    .swiper-button-prev{
        left: 30px;
    }
    .swiper-button-next{
        right: 30px;
    }
    .swipercontainer{
        position: relative;
    }
    .bg{
        position: relative;
    }
    .bgblur{
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
        background-size: 100%;
        top: 0;
        left: 0;
        background-position: center;
        background-size: cover;
        -webkit-filter: blur(50px);
        -moz-filter: blur(50px);
        -o-filter: blur(50px);
        -ms-filter: blur(50px);
        filter: blur(50px);
    }
    .bg-content{
        position: relative;
        z-index: 100;
        box-shadow: 0 12px 24px 0 rgba(7,17,27,.2);
        padding-left: 0;
        padding-right: 0;
    }
    .bg01{
        background: url("../assets/img/banner01.jpg");
    }
    .bg02{
        background: url("../assets/img/banner02.jpg");
    }

    /* 悬浮框 */
    .event-box{
        width: 220px;
        height: 220px;
        background-color: #CCC;
        position: absolute;
        z-index: 1;
        right: 200px;
        top: 0;
    }
    .event-top{
        top: 220px;
    }

    /* 最新动态 */
    .index-title{
        position: relative;
    }

    .line{
        display: block;
        position: absolute;
        width: 400px;
        height: 1px;
        background-color: #222;
        top: 30px;
    }

    .left-line{
        left: 50px;
    }

    .right-line{
        right: 50px;
    }

    .newestPlpr0{
        padding-left: 0;
        padding-right: 0;
    }

    .news-img{
        display: inline-block;
        width: 100%;
        height: 170px;
        background-color: #ccc;
    }
    .news-title{
        font-weight: 700;
        font-size: 17px;
        color: #3a899e;
        /* height: 38px;
        max-height: 36px; */
        line-height: 1.5;
    }
    .news-articel{
        -webkit-line-clamp:5;
        color: #93999F;
        min-height: 97px;
        max-height: 97px;
    }
    .news-time{
        color: #727475;
    }

    .newsInfo,.newsInfo-detail{
      color: #727475;
    }
    .newsInfo-title{
       -webkit-line-clamp:1;
    }
    .newsInfo-detail{
      font-size: 16px;
    }

    /* 近期活动 */
    .activities-current{
        position: absolute;
        width: 100%;
    }
    .activitiesTitle{
      font-weight: 700;
      position: relative;
      line-height: 1.5;
    }
    .activitiesTitle::before{
      display: block;
      content: "";
      position: absolute;
      bottom: -15px;
      left: 0;
      width: 100px;
      height:8px;
      background-color: #20528f;
    }
    .activities-zh{
      margin-top: 30px;
      font-weight: 600;
      line-height: 1.5;
      font-size: 32px;
      letter-spacing: 1px;
    }
    .activities-zh>a,.activitiesTitle>a{
      color: #222;
    }
    .activities-info{
      position: relative;
      color: #727475;
      font-size: 18px;
    }
    .bottomLine{
      padding-bottom: 15px;
      border-bottom: 1px solid #222
    }
    .activities-article{
      -webkit-line-clamp: 6;
      color: #727475;
      min-height: 192px;
      max-height: 192px;
      line-height: 2;
      font-size: 16px;
    }
    .othersBox{
      height: 250px;
      background: #CCC;
      position: relative;
      transition: all 0.3s ease;
      filter: grayscale(100%);
      opacity: 0.88;
      background-size: contain;
    }
    .othersBox01{
        background: url("../assets/img/othersBox01.jpg") no-repeat;
    }
    .othersBox02{
        background: url("../assets/img/othersBox02.jpg") no-repeat;
    }
    .othersBox03{
        background: url("../assets/img/othersBox03.jpg") no-repeat;
    }
    .othersBox04{
        background: url("../assets/img/othersBox04.jpg") no-repeat;
    }
    .othersBox-content{
      position: absolute;
      bottom: 15px;
      left: 15px;
      color: #FFF;
      padding:5px 10px;
      background-color: transparent;
      transition: all .3s;
    }
    .othersBox-content>p:last-of-type{
      margin-bottom: 0;
    }
    .othersBox:hover{
      filter: grayscale(0);
      opacity:1;
    }
    .othersBox:hover .othersBox-content{
      background-color: #222;
      opacity: .7;
    }
    .othersBox01:hover{
      transform: translate3d(-10px,-10px,0)
    }
    .othersBox02:hover{
      transform: translate3d(10px,-10px,0)
    }
    .othersBox03:hover{
      transform: translate3d(-10px,10px,0)
    }
    .othersBox04:hover{
      transform: translate3d(10px,10px,0)
    }
    @media(max-width: 789px){
        .bg{
            padding-left: 0;
            padding-right: 0;
        }
        .line{
            display: none;
        }
        .newestPlpr0{
            padding-left: 15px;
            padding-right: 15px;
        }
        .activities-current{
            position: relative;
        }
    }
</style>
