<template>
  <div class="banner-M-com">
      <el-carousel :interval="4000" arrow="always" height="175px">
        <el-carousel-item v-for="(list,index) in bannerList" :key="index" v-if="index<4">
          <img :src="list.content03" alt="" class="img-responsive">
        </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bannerList:[]
    }
  },
  methods:{
    loadBanner(){
      // const type = new URLSearchParams();
      // type.append('type','官网首页banner');
      this.axios({
        type:"get",
        url:"/manager/official/list.do",
        params:{
              'type':'官网首页banner'
            }
      }).then((res)=>{
        // console.log(res.data.data)
        this.bannerList=res.data.data
      })
    }
  },
  mounted(){
    this.loadBanner()
  }
}
</script>

<style lang="scss">
</style>
