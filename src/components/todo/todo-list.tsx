import { PropType } from 'vue';

export default defineComponent({
  props: {
    todoArr: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
  },
  render() {
    return (
      <ul>
        {this.todoArr.map((todo, idx) => {
          return <li key={idx}>{todo}</li>;
        })}
      </ul>
    );
  },
});
