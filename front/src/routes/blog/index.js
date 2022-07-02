import { gql } from "graphql-request";
import client from "$lib/gql";

const postsQuery = gql`
{
  posts: Posts {
    docs {
      id
      title
      author {
        email
      }
    }
  }
}
`

export const get = async () => {
  const { posts: { docs: posts } } = await client.request(postsQuery)

  return {
    body: {
      posts,
    },
  }
}
