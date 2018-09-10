<template>
    <div class="vipPage-com">
        <div class="banner text-center">
            <img src="../assets/img/vip/banner.jpg" alt="">
        </div>
        <!-- 会员卡 -->
        <div class="container pt45">
            <div class="row">
                <div class="col-md-3">
                    <a href="javascript:;"><img src="../assets/img/vip/vip01.jpg" alt="" class="vipCard"></a>
                </div>
                <div class="col-md-3">
                    <a href="javascript:;"><img src="../assets/img/vip/vip02.png" alt="" class="vipCard"></a>
                </div>
                <div class="col-md-3">
                    <a href="javascript:;"><img src="../assets/img/vip/vip03.png" alt="" class="vipCard"></a>
                </div>
                <div class="col-md-3">
                    <a href="javascript:;"><img src="../assets/img/vip/vip04.png" alt="" class="vipCard"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .vipPage-com{
        padding-top: 52px;
        @media (max-width: 768px) {
            padding-top: 0;
        }
        img{
            display: inline-block;
            max-width: 100%;
            height: auto;
        }
        .pt45{
            padding-top: 45px;
        }
        a{
            display: inline-block;
            .vipCard{
                    border-radius: 4px;
                }
        }
        
    }
</style>
