import Vue from 'vue';
import Hello from './Hello';

export default Vue.extend({
    name: 'App',
    components: {
        Hello,
    },
    render() {
        return (
            <div id="app">
                <Hello />
            </div>
        );
    },
});
