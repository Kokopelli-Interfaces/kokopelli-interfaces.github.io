<template lang='pug'>
nuxt-link.logo(:to='{ name: "index", params: { } }', title='Kokopelli')
  kokopelli-logo.kokopelli-logo
</template>

<script>
import KokopelliLogo from '~/assets/images/kokopelli-logo.svg?inline'

export default {
  components: {
    KokopelliLogo
  }
}
</script>

<style lang='scss' scoped>
@import "~/assets/sass/utils.scss";

.logo {
  height: 30px;
  @include center;

  .kokopelli-logo {
    vertical-align: top;
  }
}
</style>
