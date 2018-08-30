import { Component, Vue } from 'vue-property-decorator';

@Component<Hello>({
    name: 'Hello',
})
export default class Hello extends Vue {
    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        );
    }
}
