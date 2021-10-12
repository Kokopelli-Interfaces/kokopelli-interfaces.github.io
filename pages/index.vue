<template lang='pug'>
.index-page
  article-page(
    :markdown='markdown',
    :crumbs='[]',
    :modules='modules',
    :relatedModules='modules'
  )
</template>

<script>
import ArticlePage from '~/components/ArticlePage'
import modules from '~/lib/modules.js'

export default {
  components: {
    ArticlePage
  },
  async asyncData ({ $axios, app, params }) {
    const path = `/markdown/index.md`
    const markdown = await $axios.$get(path)
    return { markdown }
  },
  data: () => ({
    modules
  })
}
</script>
