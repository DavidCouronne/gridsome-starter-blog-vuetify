<template>
  <ul id="documentation-toc" class="pt-8 mb-6 documentation-toc">
    <li class="mb-2">
      <h3 class="body-1 text--primary">Contents</h3>
    </li>

    <!-- <template v-for="(item, i) in internalToc">
          <li
            v-if="item.visible"
            :key="i"
            :class="{
              'documentation-toc__link--subheader': item.subheader, 
              'mb-2': i + 1 !== internalToc.length,
              'primary--text': activeIndex === i,
              'text--disabled': activeIndex !== i
            }"
            :style="{
              borderColor: activeIndex === i ? 'currentColor' : undefined
            }"
            class="documentation-toc__link"
          >
            <a
              :href="`#${item.id}`"
              class="d-block"
              @click.stop.prevent="goTo(`#${item.id}`)"
              v-html="item.text"
            />
          </li>
    </template>-->
  </ul>
</template>

<script>
export default {
  name: 'DocumentationTocLinks'
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
