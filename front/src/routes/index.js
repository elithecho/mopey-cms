import client from '$lib/gql'
import { gql } from 'graphql-request'

const HOME_QUERY = gql`
{
  home: Homepage {
    Text
  }

  banner: Banner {
    show
    text
    link
  }
}
`

export const get = async () => {
  const { home, banner } = await client.request(HOME_QUERY)
  console.log(banner)

  return {
    body: {
      home,
      banner
    }
  }
}
