<script context="module">
  import { gql } from "graphql-request";
  import client from "$lib/gql";

  const settingsQuery = gql`
  {
    banner: Banner {
      show
      text
      link
    }
    navs: Navbar {
      links {
        link
        text
        tab
      }
    }
  }
  `
  export async function load() {
    const data = await client.request(settingsQuery)
    const { navs: { links }, banner } = data

    return {
      props: {
        banner,
        links,
      }
    }
  }
</script>

<script>
  import '../app.css';

  export let banner
  export let links
</script>


{#if banner.show}
  <div class="fixed top-0 left-0 w-full bg-pink-600 text-white px-4 text-center py-2">
    <h1 class="text-xl">
      <a class="font-bold" href={banner.link}>
        {banner.text}
      </a>
    </h1>
  </div>
{/if}

<div class="container mx-auto px-4 mt-8 py-8 flex">
  <div class="w-3/5">
    <slot />
  </div>
  <div class="rounded border border-black flex-grow ml-4 p-4">
    <h1 class="text-lg font-bold">Important Links</h1>
    <ul>
      {#each links as link}
        <li>
          <a href={link.link} target={ link.tab ? "_blank" : "" }>
            {link.text}
            {#if link.tab}
            (o)
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
