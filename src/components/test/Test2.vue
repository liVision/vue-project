<template>
  <div class="hello">
    {{ syncedName }}
    <button @click="changeName">changeName2</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, PropSync } from "vue-property-decorator";

@Component
export default class Test2 extends Vue {
  @PropSync('name', { type: String }) syncedName!: string
  changeName() {
    console.log(22222)
    this.syncedName = 'wang'
    console.log(this.syncedName)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
