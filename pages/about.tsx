import React from 'react'
import { Query } from 'react-apollo'
import withData from '../src/lib/withData'
import Layout from '../src/components/Layout/Layout'
import githubProfileQuery from './getGithubProfile.graphql'

const AboutPage: React.SFC = () => (
    <Layout>
        <h1>About</h1>
        <Query query={githubProfileQuery}>{({ loading, error, data }) => {
            if (loading) { return <p>Loading ...</p> }
            if (error) { return <p>Error :(</p> }

            const { viewer } = data
            return (
                <p>Hello, { viewer.name}!</p>
            )
        }}</Query>
    </Layout>
)

export default withData(AboutPage)
