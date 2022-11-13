import { GraphQLClient } from "graphql-request";

const endpoint = `${process.env.HYGRAPH_ENDPOINT}`
const tokenWithBearer = `Bearer ${process.env.HYGRAPH_TOKEN}`

export const client = new GraphQLClient(endpoint, {
    headers: {
        Authorization: tokenWithBearer
    }
})