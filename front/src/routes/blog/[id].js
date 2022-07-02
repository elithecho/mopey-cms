import { gql } from "graphql-request";
import client from "$lib/gql";

const postQuery = gql`
query getPost($id: String!) {
  post: Post(id: $id) {
    id
    title
    content
    author {
      email
    }
  }
}
`

export const get = async ({ params }) => {
  const { post } = await client.request(postQuery, { id: params.id})

  return {
    body: {
      post,
    },
  }
}
