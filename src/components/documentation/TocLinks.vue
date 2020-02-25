<template>
  <v-navigation-drawer
    id="documentation-toc"
    v-model="drawerRight"
    v-scroll="onScroll"
    app
    clipped
    right
  >
    <ul class="pt-8 mb-6 documentation-toc">
      <li class="mb-2">
        <h3 class="body-1 text--primary">
          Contents
        </h3>
      </li>
      <ul
        v-if="subtitles.length"
        class="menu-item submenu"
      >
        <li
          v-for="(subtitle,i) in subtitles"
          :key="subtitle.value"
          :class="{
            'documentation-toc__link--subheader': subtitle.depth ===3,
            'mb-2': i + 1 !== subtitles.length,
            'primary--text': activeIndex === i,
            'text--disabled': activeIndex !== i
          }"
          :style="{
            borderColor: activeIndex === i ? 'currentColor' : undefined
          }"
          class="documentation-toc__link"
        >
          <a
            class="d-block"
            :href="subtitle.anchor"
            @click.stop.prevent="goTo(`${subtitle.anchor}`)"
          >{{ subtitle.value }}</a>
        </li>
      </ul>
    </ul>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'DocumentationTocLinks',
    props: {
      source: { type: String, default: '' },
      subtitles: { type: Array, default: () => [] },
      links: { type: Array, default: () => [] },
      path: { type: String, default: () => '/docs/' },
      drawerRight: { type: Boolean, default: null },
    },
    data: () => ({
      activeIndex: 0,
      currentOffset: 0,
      internalToc: [],
      tocTimeout: 0,
    }),
    computed: {},
    methods: {
      goTo (id) {
        this.$vuetify.goTo(id).then(() => {
          if (!id) return (document.location.hash = '')

          if (history.replaceState) {
            history.replaceState(null, null, id)
          } else {
            document.location.hash = id
          }
        })
      },
      findActiveIndex () {
        if (this.currentOffset < 100) {
          this.activeIndex = 0

          return
        }

        const list = this.subtitles.slice().reverse()
        const index = list.findIndex(item => {
          const section = document.getElementById(item.anchor.replace('#', ''))

          if (!section) return false

          return section.offsetTop - 100 < this.currentOffset
        })

        const lastIndex = list.length - 1

        this.activeIndex = index > -1 ? lastIndex - index : lastIndex
      },
      onScroll () {
        this.currentOffset =
          window.pageYOffset || document.documentElement.offsetTop || 0

        clearTimeout(this.timeout)

        this.timeout = setTimeout(this.findActiveIndex, 50)
      },
    },
  }
</script>

<style lang="scss">
#documentation-toc {
  .supporter-group__title {
    padding-left: 8px;
  }
}

.documentation-toc {
  list-style-type: none !important;
  margin: 0;
  padding: 32px 0 0;
  text-align: left;
  width: 100%;

  li {
    border-left: 2px solid transparent;
    padding: 0 24px 0 8px;
  }

  li a {
    color: inherit;
    font-size: 0.875rem;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.1s ease-in;
  }

  .supporter-group {
    justify-content: flex-start !important;
  }

  .documentation-toc__link--subheader {
    margin-left: 8px;
  }
}
</style>
