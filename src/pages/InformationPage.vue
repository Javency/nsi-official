<template>
    <div class="infoCenter-com">
        <!-- 头条新闻 -->
        <news-banner class="pt60"></news-banner>
        <!-- 新闻列表 -->
        <news-list class="mt50"></news-list>
    </div>
</template>

<script>
import NewsBanner from '../components/information/newsbanner'
import NewsList from '../components/information/newList'
export default {
    components:{
        NewsBanner,
        NewsList
    }
}
</script>

<style lang="scss">
    .pt60{
        padding-top: 60px;
    }
    .mt50{
        margin-top: 50px;
    }
    .infoCenter-com{}
</style>
