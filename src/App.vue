<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg=1 />
    {{ com }}
    <button @click="changeCom">changeCom</button>
    <Test1></Test1>
    <span>
      app内容: {{ appName }}
    </span>
    <Test2 :name= appName @update:name = updateTest2></Test2>
    <TestThree :name3 = name3 @updateName= updateName></TestThree>
    changeComText: {{ changeComText }}
    eText: {{ eText }}
    <div v-for="item in arr" :key="item.index">
      <div>{{ item }}</div>
    </div>
    <button @click="changeArr">changeArr</button>
    <router-link to="/foo">foo</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Provide, ProvideReactive } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Test1 from "./components/test/Test1.vue"
import Test2 from "./components/test/Test2.vue"
import TestThree from "./components/test/Test3.vue"
import { captchaSent } from "./api/musicCloud"

const symbol = Symbol('baz')
@Component({
  components: {
    HelloWorld,
    Test1,
    Test2,
    TestThree
  }
})
export default class App extends Vue {
  checked = 'hello'
  appName = 'liwenju'
  com = 'lllll'
  name3 = '777777'
  changeComText = ''
  arr = ['a', 'b', 'c']
  a = {
    e: 'eee'
  }
  eText = ''
  getMessage() {
    // captchaSent({
    //   phone: 18822642964
    // }).then(res => {
    //   console.log(res)
    // }, err => {
    //   console.log(err || '发送验证码失败')
    // }).catch(err => {
    //   console.log(err)
    // })

  }
  changeArr() {
    this.arr.splice(0, 1, 't')
  }
  changeCom() {
    this.a.e = '4444'
    this.foo = 'foo444444'
  }
  updateName(value) {
    this.name3 = value
  }
  updateTest2(value) {
    this.appName = value
  }
  @Watch('com') onComChanged(val: string, oldVal: string) {
    this.changeComText = val + 'change'
  }
  @Watch('a', { deep: true }) onEChanged(val: string, oldVal: string) {
    this.eText = val + 'change'
  }
  @Provide() foo = 'foo'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
