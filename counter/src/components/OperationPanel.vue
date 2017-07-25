<template>
    <div>
        <div><input type="button" @click="addCount()" value="+"></div>
        <div><input type="button" @click="subtractCount()" value="-"></div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: mapActions(['addCount', 'subtractCount'])
};
</script>
