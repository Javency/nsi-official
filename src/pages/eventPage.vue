<template>
    <div class="eventPage-com">
        <event-banner/>
        <event-list/>
    </div>
</template>

<script>
import eventBanner from '../components/event/eventBanner'
import eventList from '../components/event/eventList'
export default {
    components:{
        eventBanner,
        eventList
    }
}
</script>

<style lang="scss">
    .eventPage-com{
      padding-top: 52px;
    }
</style>
