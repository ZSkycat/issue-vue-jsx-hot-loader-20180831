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
    render() {
        return (
            <div id="app">
                <Hello />
                <World />
                <Happy />
            </div>
        );
    },
})
export default class App extends Vue {}
