import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oacbob1lt601xi4crd2ob4/master',
    cache: new InMemoryCache()
})