<template>
    <div class="periodical-com">
        <!-- 内参 -->
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="internal">
                        <h1 class="title">内参<span class="year">2017</span></h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3" v-for="(list,index) in internalReferList">
                    <div class="internalRefer-book">
                            <a href="javascript:;" class="internalRefer-box" slot="reference">
                            </a>
                        <h4 :title="list.bookName" class="bookName" @click="openTips">{{list.bookName}}</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="internal">
                        <h1 class="title">内参<span class="year">2016</span></h1>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-3" v-for="(list,index) in internalReferList">
                    <div class="internalRefer-book">
                        <a href="javascript:;" class="internalRefer-box">

                        </a>
                        <h4 :title="list.bookName" class="bookName">{{list.bookName}}</h4>
                    </div>
                </div>
            </div>
        </div>
        <!-- 报告 -->
         <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="internal">
                        <h1 class="title">报告<span class="year">2017</span></h1>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3" v-for="(report,index) in reportList">
                    <div class="internalRefer-book">
                        <a href="javascript:;" class="internalRefer-box">

                        </a>
                        <h4 :title="report.bookName" class="bookName">{{report.bookName}}</h4>
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
            internalReferList:[
                {
                    bookName:"国际学校内参1",
                    imgSrc:""
                },
                {
                    bookName:"国际学校内参2",
                    imgSrc:""
                },
                {
                    bookName:"国际学校内参3",
                    imgSrc:""
                },
                {
                    bookName:"国际学校内参4",
                    imgSrc:""
                }
            ],
            reportList:[
                {
                    bookName:"报告1",
                    imgSrc:""
                },
                {
                    bookName:"报告2",
                    imgSrc:""
                },
                {
                    bookName:"报告3",
                    imgSrc:""
                },
                {
                    bookName:"报告4",
                    imgSrc:""
                }
            ]
        } 
    },
    methods:{
        openTips(){
            // this.$notify.info({
            //     title: '提示',
            //     message: '点击即可下载期刊&报告电子版',
            //     duration: 0,
            //     offset: 150
            // });
        const h = this.$createElement;
        this.$notify({
                title: '温馨提示',
                message: h('i', { style: 'color: teal'}, '点击书面即可下载期刊&报告电子版'),
                offset: 150,
                type:'info',
                duration:10000
            });
        }
    },
    mounted(){
        this.openTips()
    },
    // destroyed(){
    //    Notification.close()
    // }
}
</script>

<style lang="scss">
    .periodical-com{
        @mixin transitionAnimate{
            -webkit-transition: all 0.3s ease 0s;
            -ms-transition: all 0.3s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
        }
        .internal{
            padding: 50px 0 20px;
            .title{
                display: inline-block;
                font-family: PingFangSC-Semibold;
                font-size: 48px;
                color: #c8c8c8;
                letter-spacing: 10px;
                line-height: 48px;
                height: 50px;
                position: relative;
                margin-bottom: 40px;
                .year{
                    position: absolute;
                    right: -12px;
                    top: 48px;
                    font-size: 20px;
                    color: #d2d1d1;
                    letter-spacing: 0;
                    line-height: 20px;
                }
            }
        }
        .internalRefer-book{
            width: 100%;
            min-height: 345px;
            .bookName{
                color: #a3a3a3;
                font-size: 22px;
                margin-top: 15px;
                overflow: hidden;
                text-overflow: -o-ellipsis-lastline;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                min-height: 24px;
                max-height: 24px;

            }
            .internalRefer-box{
                display: inline-block;
                width: 100%;
                min-height: 345px;
                background-color: #e4e4e4;
                @include transitionAnimate;
                &:hover{
                    box-shadow: 0 15px 15px 0 rgba(15, 37, 64, 0.20);
                    text-decoration: none;
                    z-index: 2;
                }
            }
        }
    }
</style>
