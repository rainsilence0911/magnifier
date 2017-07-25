<template>
    <div id="app">
        <control-panel/>
    </div>
</template>

<script>
import ControlPanel from './components/ControlPanel';
export default {
    name: 'app',
    components: {
        ControlPanel
    }
};
</script>

<style>
html, body {
    margin: 0;
    height: 100%;
}
#app {
    height: 100%;
}
</style>
