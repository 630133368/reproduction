<template>
  <div class="home">
    <p>This is Home</p>
    <p>Development environment I can cache</p>
    <input type="text"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Home extends Vue {
  private created() {
    console.log(this.$options.name);
  }
}
</script>
