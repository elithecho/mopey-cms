<script>
  export let posts
</script>

<h1 class="text-3xl font-bold">Our blog!</h1>

<div class="py-8">
  {#each posts as post}
    <hr class="border-black">
    <div class="py-4">
      <h2 class="text-lg font-bold">
        <a href={`/blog/${post.id}`}>
          {post.title}
        </a>
      </h2>
      <h3>
        by {post.author.email}
      </h3>
    </div>
  {/each}
  <hr class="border-black">
</div>
