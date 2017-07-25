<template>
    <div>
        <div>Summary:{{ summary }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            summary: 'summary'
        })
    }
};
</script>

<style scoped>
</style>
