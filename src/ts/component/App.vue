<template>
    <div id="app">
        <Hello></Hello>
        <World></World>
        <Happy></Happy>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Hello from './Hello';
import World from './World';
import Happy from './Happy';

@Component<App>({
    name: 'App',
    components: {
        Hello,
        World,
        Happy,
    },
})
export default class App extends Vue {}
</script>
