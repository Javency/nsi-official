<template>
    <div class="newsList-com">
        <div class="container">
            <div class="row">
                <div class="col-md-3 list" v-for="(list,index) in newsList" :key="index">
                    <div class="list-box">
                        <div class="list-img-box">
                            <a href="javascript:;" class="img-box"><img :src="list.coverImage" alt="" height="270"></a>
                        </div>
                        <div class="list-content-box">
                            <h3><a href="javascript:;" :title="list.title">{{list.title}}</a></h3>
                            <p :title="list.summary">{{list.summary}}</p>
                        </div>
                        <div class="list-share-box">
                            <p class="text-right">分享到：<el-popover class="text-center" placement="top-start" title="打开微信 “扫一扫”" width="190" trigger="hover" content="这是二维码"><img width="150" src="../../assets/img/layoutImg/wechat_QR.png" alt=""><span slot="reference" title="分享到微信" class="iconfont icon-weixin weiChat"></span></el-popover><span title="分享到微博" class="iconfont icon-weibo2 weibo"></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt20">
                <div class="col-md-12 text-center">
                    <a href="javascript:;" class="loadMore" @click="addMore">加载更多</a>
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
            newsList:[]
        }
    },
    methods:{
        addMore(){
            // const _self=this
            this.pageNum++
            // console.log(this.pageNum)
            const params = new URLSearchParams();
            params.append('pageNum', this.pageNum,);
            params.append('pageSize', 8);
            this.axios({
             method: 'post',
             url: 'http://192.168.0.191:8080/nsi-1.0/manager/article/list.do',
             data: params
        }).then((res)=>{
            const msg=res.data.data.list
            console.log(msg)
            for(let i=0;i<msg.length;i++){
                this.newsList.push(msg[i])
            }
        })
        }
    },
    beforeMount(){
        // const _self=this
        const params = new URLSearchParams();
        params.append('pageNum', this.pageNum,);
        params.append('pageSize', 8);
        this.axios({
             method: 'post',
             url: 'http://192.168.0.191:8080/nsi-1.0/manager/article/list.do',
             data:params
        }).then((res)=>{
            const msg=res.data.data.list
            // console.log(msg)
            this.newsList=msg
        })
    }
}
</script>

<style lang="scss">
    .mt20{
        margin-top: 20px;
    }
    .newsList-com{
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
            -webkit-transition: all 0.3s ease 0s;
            -ms-transition: all 0.3s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
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
                    -webkit-transition: all 0.5s ease 0s;
                    -ms-transition: all 0.5s ease 0s;
                    -o-transition: all 0.5s ease 0s;
                    transition: all 0.5s ease 0s;
                    &:hover{
                        opacity: .8;
                    }
                }
            }
            .list-content-box{
                padding: 15px 10px 0;
                background: #FFF;
                min-height: 215px;
                h3{
                    margin-top: 0;
                    margin-bottom: 15px;
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
                        -webkit-transition: all 0.3s ease 0s;
                        -ms-transition: all 0.3s ease 0s;
                        -o-transition: all 0.3s ease 0s;
                        transition: all 0.3s ease 0s;
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
                opacity: 0;
                transition: all .3s;
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
            color: #999;
            border: 1px solid #e5e5e5;
            -webkit-transition: all 0.5s ease 0s;
            -ms-transition: all 0.5s ease 0s;
            -o-transition: all 0.5s ease 0s;
            transition: all 0.5s ease 0s;
            background-image: linear-gradient(-180deg, rgb(226, 226, 226) 0%, #fff 100%);
            &:hover{
                text-decoration: none;
                transform: scale(1.1);
                color: #FFF;
                border: #52A5F4;
                background-image: linear-gradient(-180deg, #4790E5 0%, #52A5F4 100%);
                box-shadow: 0 5px 30px #52A5F4
            }
        }
    }
</style>
