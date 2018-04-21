import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'
import dotenv from 'dotenv'

dotenv.config()
const GRAPHQL_URL = process.env.GRAPHQL_URL
const GRAPHQL_TOKEN = process.env.GRAPHQL_TOKEN

const config = {
    link: new HttpLink({
        uri: GRAPHQL_URL,
        headers: {
            Authorization: `Bearer ${GRAPHQL_TOKEN}`
        }
    })
}

export default withData(config)
