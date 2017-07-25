<template>
    <div ref="container" class="magnifier-outter-range" :style="containerPosition">
        <div class="magnifier-inner-range" :style="imagePosition"></div>
        <div class="magnifier-bar"></div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import DragManager from '../manager/DragManager';
export default {
    computed: {
        ...mapGetters({
            containerPosition: 'containerPosition',
            imagePosition: 'imagePosition'
        })
    },
    mounted () {
        DragManager.register(this.$refs.container, this.onComponentDragMove);
    },
    methods: {
        onComponentDragMove (param) {
            this.$store.dispatch('calculateMagnifierPosition', {
                deltaX: param.deltaX,
                deltaY: param.deltaY
            });
        }
    }
};
</script>
<style scoped>
.magnifier-outter-range {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: #aaa;
    border-radius: 50%;
    cursor: move;
}

.magnifier-inner-range {
    width: 190px;
    height: 190px;
    border-radius: 50%;
    margin: 5px;
    overflow: hidden;
    background-size: 1920px 1080px;
    z-index: 2;
    position: absolute;
}

.magnifier-bar {
    width: 84px;
    height: 24px;
    border-radius: 12px;
    background-color: #aaa;
    z-index: 1;
    top: 155px;
    left: 120px;
    position: absolute;
    transform: rotate(45deg);
}
</style>
