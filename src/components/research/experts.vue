<template>
    <div class="experts-com">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="title">专家智库</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 col-xs-6" v-for="(experts,index) in expertsList">
                    <div class="expertsBox">
                        <div class="imgBox text-center">
                            <img width="135" :src='experts.imgUrl' alt="" class="img-responsive">
                        </div>
                        <div class="infoBox">
                            <p class="info-name text-center">{{experts.name}}</p>
                            <p class="info-desc">{{experts.desc}}</p>
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
            expertsList:[
                {
                    imgUrl:require('../../assets/img/research/experts/bqEVQcUF.jpg'),
                    name:'张文静',
                    desc:'好未来教育集团CareerChina创始人，总经理。自从业以来，成功为多家知名教育机构引进欧美母语工签外籍人才上千人次'
                },{
                    imgUrl:require('../../assets/img/research/experts/gaUBRBYL.jpg'),
                    name:'陈红霞',
                    desc:'15年国际学校/国际教育机构/集团跨文化人力资源管理经验，曾在北京某知名全 IB 体系的K12国际学校任人力资源部主任职务4年'
                },{
                    imgUrl:require('../../assets/img/research/experts/oXTTmXao.jpg'),
                    name:'蒋蕊',
                    desc:'英国斯特灵大学毕业，硕士学历，近十年签证办理经验，曾就职于知名上市公司外籍签证部门'
                },{
                    imgUrl:require('../../assets/img/research/experts/pvnRwehf.jpg'),
                    name:'高美华',
                    desc:'15年的从业经验中在世界五百强某外资银行6年以及先后在上海重庆两家知名外籍子女学校任职9年，任人力资源总监'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .experts-com{
        @mixin transitionAnimate{
            -webkit-transition: all 0.3s ease 0s;
            -ms-transition: all 0.3s ease 0s;
            -o-transition: all 0.3s ease 0s;
            transition: all 0.3s ease 0s;
        }
        padding-top: 54px;
        padding-bottom: 30px;
        background-color: #f8f8f8;
        .title{
            font-family: PingFangSC-Semibold;
            font-size: 48px;
            color: #c8c8c8;
            letter-spacing: 10px;
            line-height: 48px;
            height: 50px;
            position: relative;
            margin-bottom: 40px;
            @media (max-width: 768px) {
                font-size: 30px;
                margin-bottom: 20px;
            }
        }
        .expertsBox{
            padding: 15px;
            background-color: #fff;
            box-shadow: 0 10px 15px 0 rgba(0,0,0,.02), 0 15px 40px 0 rgba(0,0,0,.02);
            margin-bottom: 30px;
            @include transitionAnimate();
            .imgBox{
                img{
                    border-radius: 2px;
                    display: inline-block !important;
                }
            }
            .infoBox{
                .info-name{
                    padding-top: 10px;
                    color: #20528f;
                    font-size: 22px;
                }
                .info-desc{
                    // padding:0 15px;
                    line-height: 20px;
                    color: #999;
                    font-size: 14px;
                    min-height: 80px;
                    max-height: 80px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    @media (max-width: 768px) {
                        min-height: 97px;
                        max-height: 97px;
                    }
                }
            }
            &:hover{
                background-color: #fff;
                box-shadow: 0 10px 15px 0 rgba(0,0,0,.05), 0 15px 40px 0 rgba(0,0,0,.08);
            }
            @media (max-width: 768px) {
                height: 310px;
            }
        }
        @media (max-width: 768px) {
            padding-top: 0;
        }
    }
</style>
