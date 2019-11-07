<template>
  <div class="post-tags">
    <v-chip
      v-for="tag in post.tags"
      :key="tag.id"
      class="ma-2"
      :to="$url(tag.path)"
    >
      <v-icon left>
        mdi-label
      </v-icon>
      {{ tag.title }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: null
    }
  }
};
</script>
