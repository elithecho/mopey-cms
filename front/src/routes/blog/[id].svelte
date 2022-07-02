<script>
  // https://payloadcms.com/docs/fields/rich-text#generating-html
  export let post
</script>

<h1 class="text-3xl font-bold">{post.title}</h1>

<div class="py-8 post">
  {#each post.content as content}
    <svelte:element this={content.type || 'div'}>
      {#each content.children as child }
        <svelte:element this={child.bold ? 'strong' : 'span'}>
        {child.text}
        </svelte:element>
      {/each}
    </svelte:element>
  {/each}
</div>
