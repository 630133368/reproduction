<template>
  <div class="about">
    <p>This is about</p>
    <p>I can cache both development and production environments</p>
    <input type="text"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class About extends Vue {
  constructor () {
    super()
    console.log(this.$options.name)
    const _this: any = this
    _this.$options.__proto__.name = 'About'
    console.log(this.$options.name)
  }
}
</script>
