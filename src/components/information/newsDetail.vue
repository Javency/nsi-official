<template>
    <div class="newsDetail-com">
        <h1>{{detail.title}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            listId:"",
            detail:{}
        }
    },
    methods:{
         fetchDate(){
            this.listId = this.$route.params.id;
            this.axios({
                method:"get",
                url: 'http://192.168.0.191:8080/nsi-1.0/article/detail.do',
                params:{
                    articleId:this.listId
                }
            }).then((res)=>{
                console.log(res)
                this.detail=res.data.data
            })
        }
    },
    created(){
        this.fetchDate();
    },
    // mounted(){
    //     this.listId = this.$route.params.id;
    //     alert(this.listId)
    //     // const params = new URLSearchParams();
    //     this.axios({
    //         method:"get",
    //         url: 'http://192.168.0.191:8080/nsi-1.0/article/detail.do',
    //         params:{
    //             articleId:this.listId
    //             }
    //     }).then((res)=>{
    //         console.log(res)
    //     })
    // },
    watch:{
        "$route": "fetchDate"
    }
}
</script>

<style>

</style>
