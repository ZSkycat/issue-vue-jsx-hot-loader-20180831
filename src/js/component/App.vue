<template>
    <div id="app">
        <Hello></Hello>
    </div>
</template>

<script>
import Vue from 'vue';
import Hello from './Hello';

export default Vue.extend({
    name: 'App',
    components: {
        Hello,
    },
});
</script>
