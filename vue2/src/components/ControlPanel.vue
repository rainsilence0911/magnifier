<template>
    <div class="magnifier-table">
        <div class="magnifier-cell">
            <picture-selector />
            <div class="magnifier-container">
                <picture-displayer/>
                <picture-magnifier/>
            </div>
        </div>
    </div>
</template>
<script>
import PictureSelector from './PictureSelector';
import PictureDisplayer from './PictureDisplayer';
import PictureMagnifier from './PictureMagnifier';

export default {
    components: {
        PictureSelector,
        PictureDisplayer,
        PictureMagnifier
    }
};
</script>
<style scoped>
.magnifier-table {
    height: 100%;
    display: table;
    margin: 0 auto;
}

.magnifier-cell {
    display: table-cell;
    vertical-align: middle;
}

.magnifier-container {
    width: 1024px;
    height: 768px;
    position: relative;
}
</style>
