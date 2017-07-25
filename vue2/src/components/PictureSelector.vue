<template>
    <div>Switch Picture:
        <select value="0" @change="changeSelectImage($event)">
            <option value="0">A</option>
            <option value="1">B</option>
            <option value="2">C</option>
            <option value="3">D</option>
        </select>
    </div>
</template>
<script>
import ImageLoader from '../manager/ImageLoader';
export default {
    methods: {
        changeSelectImage (e) {
            this.$store.dispatch('changeSelectImage', {
                index: (e.target || e.srcElement).value
            });
        }
    },
    mounted () {
        var store = this.$store;
        ImageLoader.init((param) => {
            store.dispatch('getAllImages', param);
        });
    }
};
</script>
