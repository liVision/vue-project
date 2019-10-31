<template>
  <div class="hello">
    {{ syncedName }}
    <button @click="changeName3">changeName3</button>
  </div>
</template>

<script>

export default {
  props: {
    name3: {
      type: String
    }
  },
  computed: {
    syncedName: {
      get() {
        return this.name3
      },
      set(value) {
        this.$emit('updateName', value)
      }
    }
  },
  methods: {
    changeName3() {
      console.log(33)
      this.syncedName = '33333'
      console.log(this.syncedName)
    }
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
