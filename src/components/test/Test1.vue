<template>
  <div class="hello">
    test1: {{ foo }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Model, Inject, InjectReactive } from "vue-property-decorator";

@Component
export default class Test1 extends Vue {
  @Inject() readonly foo!: string
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
