import { defineComponent } from 'vue'
import { version } from '../../package.json'

export default defineComponent({
  setup () {
    return () => <div>Foo {version}</div>
  }
})
