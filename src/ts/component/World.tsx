import { Component, Vue } from 'vue-property-decorator';

@Component<World>({
    name: 'World',
    render() {
        return (
            <div>
                <h1>World</h1>
            </div>
        );
    },
})
export default class World extends Vue {}
