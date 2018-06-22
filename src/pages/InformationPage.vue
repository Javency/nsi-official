<template>
    <div class="infoCenter-com">
        <!-- 头条新闻 -->
        <news-banner class="pt60"></news-banner>
        <!-- 新闻nav -->
        <ul class="news-nav mt50">
          <li><router-link to=/InformationCenter/newestArticle>最新文章</router-link><i class="newsnavLine"></i></li>
          <li><router-link to=/InformationCenter/original>独家原创</router-link><i class="newsnavLine"></i></li>
          <li><router-link to="/InformationCenter/visitSchool">访校文章</router-link><i class="newsnavLine"></i></li>
          <li><router-link to="/InformationCenter/policy">政策解读</router-link><i class="newsnavLine"></i></li>
        </ul>
        <!-- 新闻列表 -->
        <transition name="slide-fade">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script>
import NewsBanner from '../components/information/newsbanner'
export default {
    components:{
        NewsBanner
    }
}
</script>

<style lang="scss">
    body{
      overflow-x: hidden;
    }
    .infoCenter-com{
      .slide-fade{
          position: absolute;left:0;right: 0;
        }
        .slide-fade-enter-active {
          transition: all 1.2s ease;
        }
        .slide-fade-leave-active {
          transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
        }
        .slide-fade-enter, .slide-fade-leave-to
        {
          left:0;right: 0;
          transform: translateX(50px);
          opacity: 0;
        }
        .pt60{
            padding-top: 60px;
        }
        .mt50{
            margin-top: 50px;
        }
      .news-nav{
        padding-left: 0;
        list-style: none;
        padding-top: 60px;
        padding-bottom: 20px;
        background: #fafafa;
        margin-bottom: 0;
        text-align: center;
        li{
          display: inline-block;
          position: relative;
          margin: 0 40px;
          padding: 5px;
          .newsnavLine{
            display: block;
            position: absolute;
            bottom: -10px;
            left: 0;
            content: "";
            background: #333;
            width: 100%;
            height: 2px;
            -webkit-transition: all 1s ease 0s;
            -ms-transition: all 1s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
            transform: rotateY(90deg);
          }
          &:hover .newsnavLine
            {
              transform: rotateY(0);
            }
          .router-link-active {
              text-decoration: none;
              font-weight: 600;
              color: #333;
              ~.newsnavLine{
                transform: rotateY(0);
              }
          }
          a{
            display: inline-block;
            font-weight: 500;
            color: #999;
            font-size: 20px;
            -webkit-transition: all 1s ease 0s;
            -ms-transition: all 1s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
            &:hover{
              text-decoration: none;
              font-weight: 600;
              color: #333;
            }
          }
        }
      }
    }
</style>
