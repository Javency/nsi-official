<template>
    <div class="newsList-com" v-loading="loading">
        <div class="container">
            <div class="row">
                <div class="col-md-3 list" v-for="(list,index) in newsList" :key="index">
                    <div class="list-box">
                        <div class="list-img-box">
                            <a href="javascript:;" class="img-box"><img :src="list.coverImage" alt="" height="270" @click="toDetail(list.id)"></a>
                        </div>
                        <div class="list-content-box">
                            <h3><a href="javascript:;" :title="list.title" @click="toDetail(list.id)">{{list.title}}</a></h3>
                            <p :title="list.summary">{{list.summary}}</p>
                        </div>
                        <div class="list-share-box">
                            <span class="time">{{list.updateTime|formatDate}}</span>
                            <p class="text-right">分享到：
                                <el-popover class="text-center" placement="top-start" title="打开微信 “扫一扫”" width="190" trigger="hover" content="微信二维码">
                                    <img width="150" :src="'http://qr.liantu.com/api.php?text='+list.articleUrl" alt="">
                                    <span slot="reference" title="分享到微信" class="iconfont icon-weixin weiChat"></span>
                                </el-popover><span @click="shareWibo(list.articleUrl,list.title,list.coverImage)" title="分享到微博" class="iconfont icon-weibo2 weibo"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt20">
                <div class="col-md-12 text-center">
                    <a href="javascript:;" class="loadMore" @click="addMore">{{addMoreHtml}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            pageNum:1,
            newsList:[],
            loading:true,
            addMoreHtml:"加载更多"
        }
    },
    filters:{
        formatDate(time,option){
            time = Date.parse(time)
            const d = new Date(time);
            const now = Date.now();
            const diff = (now - d) / 1000;

            if (diff < 30) {
                return '刚刚'
            } else if (diff < 3600) { // less 1 hour
                return Math.ceil(diff / 60) + '分钟前'
            } else if (diff < 3600 * 24) {
                return Math.ceil(diff / 3600) + '小时前'
            } else if (diff < 3600 * 24 * 2) {
                return '1天前'
            }
            if (option) {
                return parseTime(time, option)
            } else {
                return d.getMonth() + 1 + '月' + d.getDate() + '日'
            }
        }
    },
    methods:{
        addMore(){
            this.addMoreHtml="加载中..."
            this.pageNum++
            const params = new URLSearchParams();
            params.append('pageNum', this.pageNum);
            params.append('pageSize', 8);
            this.axios({
                method: 'post',
                url: '/article/list.do',
                data: params
            }).then((res)=>{
                const msg=res.data.data.list
                // console.log(msg)
                for(let i=0;i<msg.length;i++){
                    this.newsList.push(msg[i])
                }
                this.loading=false
                this.addMoreHtml="加载更多"
            })
        },
        toDetail(id){
            console.log(id)
            this.$router.push({name:"detailNews",params:{id:id}})
        },
        shareWibo(url,title,picurl){
            let sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+title+'&url='+url+'&content=utf-8&sourceUrl='+url+'&pic='+picurl;
            window.open(sharesinastring,'newwindow','height=400,width=400,top=100,left=100');
        }
    },
    beforeMount(){
        const params = new URLSearchParams();
        params.append('pageNum', this.pageNum,);
        params.append('pageSize', 16);
        this.axios({
             method: 'post',
             url: '/article/list.do',
             data:params
        }).then((res)=>{
            const msg=res.data.data.list
            // console.log(msg)
            this.newsList=msg
            this.loading=false
            this.pageNum=2
        })
    },
    beforeRouteUpdate (to, from, next) {
        console.log("router更新前")
    }
}
</script>

<style lang="scss">
    .mt20{
        margin-top: 20px;
    }
    .newsList-com{
        @mixin transitionAnimate{
            -webkit-transition: all 0.3s ease 0s;
            -ms-transition: all 0.3s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
        }
        padding: 30px 0;
        background: #fafafa;
        margin-bottom: -50px;
        img{
            display: inline-block;
            max-width: 100%;
            height: auto;
            border-radius: 2px;
        }
        .list{
            padding: 10px;
            background-color: #fff;
            @include transitionAnimate;
            margin-bottom: 15px;
            &:hover{
                background-color: #fff;
                box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.10);
                border-radius: 2px;
                z-index: 2
            }
            &:hover{
                .list-share-box{
                    opacity: 1;
                }
            }
            .list-img-box{
               .img-box{
                    display: inline-block;
                    @include transitionAnimate;
                    &:hover{
                        opacity: .8;
                    }
                    img{
                        min-height: 181px;
                        background-color: #e4e4e4
                    }
                }
            }
            .list-content-box{
                padding: 15px 10px 0;
                background: #FFF;
                // min-height: 215px;
                min-height: 190px;
                h3{
                    margin-top: 0;
                    margin-bottom: 10px;
                    max-height: 80px;
                    overflow: hidden;
                    a{
                        display: inline-block;
                        line-height: 1.4;
                        font-size: 19px;
                        font-weight: 600;
                        color: #333333;
                        letter-spacing: 0;
                        overflow: hidden;
                        @include transitionAnimate;
                        font-family: "PingFangSC-Regular", "PingFang SC", "Microsoft YaHei", Arial, Helvetica, "WenQuanYi Micro Hei", "tohoma,sans-serif";
                        &:hover{
                            text-decoration: none;
                            color: #44638a;
                        }
                    }
                }
                p{
                    color: #999;
                    line-height:1.5;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                    max-height: 102px;
                }

            }
            .list-share-box{
                opacity: 1;
                transition: all .3s;
                position: relative;
                .time{
                    position: absolute;
                    color: #7c7c7c;
                    bottom: 2px;
                    left: 10px;
                }
                p{
                    color: #999;
                    margin-bottom: 0;
                    span{
                        font-size: 18px;
                        cursor: pointer;
                        transition: all .3s;
                        &:hover{
                            opacity: .8;
                        }
                    }
                    .weiChat:hover{
                        color: #49aa00;
                    }
                    .weibo:hover{
                        color: #ff001c;
                    }
                    .weiChat{
                        margin-right: 10px;
                    }
                }
            }
        }
        .loadMore{
            display: inline-block;
            border-radius: 20px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            padding: 0 40px;
            color: #FFF;
            border: 1px solid #4790E5;
            -webkit-transition: all 0.1s ease 0s;
            -ms-transition: all 0.1s ease 0s;
            -o-transition: all 0.1s ease 0s;
            transition: all 0.1s ease 0s;
            background-image: linear-gradient(-180deg, #4790E5 0%, #52A5F4 100%);
            box-shadow: 0 5px 30px #ccc;
            &:hover,
            &:link{
                text-decoration: none;
            }
            &:active{
                text-decoration: none;
                transform: scale(0.9);
                color: #FFF;
                border: #52A5F4;
                background-image: linear-gradient(-180deg, rgb(64, 135, 216) 0%, rgb(64, 131, 194) 100%);
                box-shadow: 0 5px 30px #52A5F4
            }
        }
    }
</style>
