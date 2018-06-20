<template>
    <div class="infoCenter-com">
        <!-- 今日新闻 -->
        <news-banner class="pt60"></news-banner>
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
    .pt60{
        padding-top: 60px;
    }
    .infoCenter-com{}
</style>
