<template>
  <BlogLayout :post="$page.post">
    <s-e-o />

    <div class="post content-box">
      <div class="post__header">
        <v-img
          v-if="$page.post.cover_image"
          alt="Cover image"
          :aspect-ratio="16 / 9"
          :src="$page.post.cover_image"
        />
      </div>

      <h1>{{ $page.post.title }}</h1>
      <p>Posted {{ $page.post.date }}.</p>

      <div class="markdown" v-html="$page.post.content" />

      <div class="post__footer">
        <post-tags :post="$page.post" />
      </div>
    </div>

    <div class="post-comments">
      <!-- Add comment widgets here -->
    </div>

    <!-- <Author class="post-author" /> -->
  </BlogLayout>
</template>

<script>
import PostTags from '~/components/PostTags'
// import Author from '~/components/Author.vue'
import SEO from '~/components/base/SEO.vue'

export default {
  components: {
    // Author,

    PostTags,
    SEO
  },

  metaInfo() {
    return {
      title: `${this.$page.post.title} ${
        this.$page.post.tag ? '- ' + this.$page.post.tag.name : ''
      }`
    }
  },
  computed: {
    /* avatar () {
      return `/images/authors/${this.$page.post.author.id}.png`
    }, */
    /* postIsOlderThanOneYear () {
      let postDate = moment(this.$page.post.datetime)
      return moment().diff(postDate, 'years') > 0 ? true : false
    }, */

    ogImageUrl() {
      return this.$page.post.cover_image
    }
  },
  methods: {
    imageLoadError(e) {
      e.target.src = `/images/authors/default.png`
    },
    description(post, length, clamp) {
      if (post.description) {
        return post.description
      }
      length = length || 280
      clamp = clamp || ' ...'
      let text = post.content
        .replace(/<pre(.|\n)*?<\/pre>/gm, '')
        .replace(/<[^>]+>/gm, '')
      return text.length > length ? `${text.slice(0, length)}${clamp}` : text
    },
    titleCase(str) {
      return str
        .replace('-', ' ')
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
    }
  }
}
</script>

<static-query>
query {
  metadata{
    siteUrl
    pathPrefix
    }
    }
</static-query>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    author
    avatar
    cover_image
  }
}
</page-query>

<style lang="scss">
img {
  max-width: 100%;
}

.markdown {
  padding: 1rem;
}
</style>
