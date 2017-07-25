<template>
    <div class="magnifier-background" :style="selectedImage"></div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            selectedImage: 'selectedImage'
        })
    }
};
</script>
<style scoped>
.magnifier-background {
    background-repeat: no-repeat;
    background-size: 1024px 768px;
    height: 100%;
}
</style>
