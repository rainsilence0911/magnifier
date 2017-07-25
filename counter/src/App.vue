<template>
    <div id="app">
        <summary-panel/>
        <operation-panel/>
    </div>
</template>

<script>
import SummaryPanel from './components/SummaryPanel';
import OperationPanel from './components/OperationPanel';
export default {
    name: 'app',
    components: {
        SummaryPanel,
        OperationPanel
    }
};
</script>

<style>

</style>
