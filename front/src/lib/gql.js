import { GraphQLClient } from 'graphql-request'

// Run GraphQL queries/mutations using a static function
// request(endpoint, query, variables).then((data) => console.log(data))

const endpoint = 'http://localhost:3000/api/graphql'

const client = new GraphQLClient(endpoint, { headers: {} })

export default client
