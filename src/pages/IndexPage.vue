<template>
    <div class="indexPage-com">
        <!-- banner -->
        <Banner class="mt30"/>
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
                        <div class="col-md-6" v-for="(news,index) in recentNews" :key="index" v-if="index<2">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="news-content">
                                        <img src="" alt="" width="100%" height="200px" class="news-img">
                                    </div>
                                    </div>
                                <div class="col-md-8">
                                    <div class="newsBox">
                                        <h5 class="mt0 multiline"><a href="javascript:;" class="news-title">{{news.title}}</a></h5>
                                        <p class="news-articel multiline">{{news.content}}</p>
                                        <span class="news-time">{{news.time}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="fourNews">
                      <div class="row mt30">
                          <!-- 四条新闻标题 -->
                          <div class="col-md-6" v-for="(news,index) in recentNews" :key="index" v-if="index>=2&&index<7">
                              <div class="newsInfo">
                                  <div class="row">
                                    <div class="col-md-10">
                                      <p class="multiline newsInfo-title"><a href="javascript:;" class="newsInfo-detail">{{"• "+news.title}}</a></p>
                                    </div>
                                    <div class="col-md-2">
                                      <span class="newsInfo-time">{{news.time}}</span>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12 text-right">
                        <router-link :to="{path:'/page01'}">更多&gt;&gt;</router-link>
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
                            <div class="activities-current animated fadeInLeft" v-for="currentEvent in activitiesCurrent" v-if="currentEvent.content06==currentSerialNum" :key="currentEvent.content06">
                                <h1 class="activitiesTitle"><a href="javascript:;">{{currentEvent.content02}}</a></h1>
                                <h1 class="activities-zh"><a href="javascript:;">{{currentEvent.content01}}</a></h1>
                                <p class="activities-info">{{currentEvent.content03}}</p>
                                <p class="activities-info bottomLine">{{currentEvent.content04}}</p>
                                <p class="activities-article multiline">{{currentEvent.textcontent01}}</p>
                            </div>
                        </div>
                        <div class="col-md-5 col-md-offset-1">
                          <div class="othersActivities">
                            <div class="row">
                              <div class="col-md-6 plpr0" v-for="(activities,index) in activitiesCurrent" @mouseenter="active(index)" :key="index">
                                <a href="javascript:;">
                                  <div class="othersBox" :class="'othersBox0'+(index+1)">
                                    <!-- <div class="othersBox-bg"></div> -->
                                    <div class="othersBox-content">
                                      <p>{{activities.content01}}</p>
                                      <p>{{activities.content03}}</p>
                                    </div>
                                  </div>
                                </a>
                              </div>
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
    import Banner from '../components/index/banner.vue'

    var currentSerialNum=0;
    export default {
        components: {
           Banner
        },
        name: 'carrousel',
        data() {
            return {
                // 最新动态
                recentNews:[
                  {
                    title:"世界杯身价榜：法国居首德国第五",
                    time:"2018.06.13",
                    content:"Lorem ipsum dolor sit amet. Repellat doloremque necessitatibus quis debitis quam, autem quas porro recusandae at consectetur adipisicing elit. Repellat doloremque necessitatibus quis debitis quam, autem quas porro recusandae at quaerat alias rem nemo sequi itaque reprehenderit odit cumque iusto ratione?"
                  },
                  {
                    title:"习近平：创新是我们能否过坎的关键",
                    time:"2018.06.13",
                    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque necessitatibus quis debitis quam, autem quas porro recusandae at quaerat alias rem nemo sequi itaque reprehenderit odit cumque iusto ratione?"
                  },{
                    title:"一镜到底绝密视频！10个故事 一个不一样的上合峰会",
                    time:"2018.06.13",
                    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque necessitatibus quis debitis quam, autem quas porro recusandae at quaerat alias rem nemo sequi itaque reprehenderit odit cumque iusto ratione?"
                  },
                  {
                    title:"探秘中国首个滨海发射场：长征五号为何选择这里？",
                    time:"2018.06.13",
                    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque necessitatibus quis debitis quam, autem quas porro recusandae at quaerat alias rem nemo sequi itaque reprehenderit odit cumque iusto ratione?"
                  },
                  {
                    title:"韩媒：朝韩决定重新开通东西海岸军事热线",
                    time:"2018.06.13",
                    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque necessitatibus quis debitis quam, autem quas porro recusandae at quaerat alias rem nemo sequi itaque reprehenderit odit cumque iusto ratione?"
                  },
                  {
                    title:"丁仲礼:全面理解中国共产党领导是中国社会主义的本质特征",
                    time:"2018.06.13",
                    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque necessitatibus quis debitis quam, autem quas porro recusandae at quaerat alias rem nemo sequi itaque reprehenderit odit cumque iusto ratione?"
                  }
                ],
                // 当前活动文章
                currentSerialNum:0,
                activitiesCurrent:[]
            }
        },
        methods:{
            active:function(index){
                this.currentSerialNum=index
                // console.log(currentSerialNum)
            }
        },
        mounted(){
            const params = new URLSearchParams();
            params.append('type',"官网首页活动");
            this.axios({
                method: 'post',
                // url:"http://192.168.0.159:8080/nsi-1.0/manager/official/list.do",
                url:"/manager/official/list.do",
                data:params
            }).then((res)=>{
                // console.log(res)
                this.activitiesCurrent=res.data.data
            })
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
    .mt15{
      margin-top: 15px;
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
    .indexPage-com{
      padding-top: 52px;
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
      filter: grayscale(50%);
      opacity: 0.88;
      background-size: contain;
    }
    .othersBox01{
        background: url("../assets/img/index/othersBox01.jpg") no-repeat;
    }
    .othersBox02{
        background: url("../assets/img/index/othersBox02.jpg") no-repeat;
    }
    .othersBox03{
        background: url("../assets/img/index/othersBox03.jpg") no-repeat;
    }
    .othersBox04{
        background: url("../assets/img/index/othersBox04.jpg") no-repeat;
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
      background-color: rgba(0, 0, 0, .5);
      /* opacity: .7; */
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
