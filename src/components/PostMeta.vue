<template>
  <v-list-item-subtitle class="post-meta">
    Posted {{ post.date }}.
    <template v-if="post.timeToRead">
      <strong>{{ post.timeToRead }} min read.</strong>
    </template>
  </v-list-item-subtitle>
</template>

<script>
  export default {
    props: ['post'],
  }
</script>
