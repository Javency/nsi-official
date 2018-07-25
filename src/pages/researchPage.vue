<template>
    <div class="research-com">
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .research-com{
        padding-top: 52px;
        @media (max-width: 768px) {
            padding-top: 0;
        }
        margin-bottom: -50px;
    }
</style>
