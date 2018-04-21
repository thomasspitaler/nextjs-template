import React from 'react'
import { Query } from 'react-apollo'
import withData from '../src/lib/withData'
import Layout from '../src/components/Layout/Layout'
import CenteredWrapper from '../src/components/CenteredWrapper/CenteredWrapper'
import TextWrapper from '../src/components/TextWrapper/TextWrapper'
import { READ_GITHUB_PROFILE_QUERY } from './readGithubProfile.graphql'

const AboutPage: React.SFC = () => (
    <Layout>
        <CenteredWrapper>
            <TextWrapper>
                <Query query={READ_GITHUB_PROFILE_QUERY}>{({ loading, error, data }) => {
                    if (loading) { return <p>Loading ...</p> }
                    if (error) { return <p>Error :(</p> }

                    const { viewer } = data
                    return (
                        <p>Hello, { viewer.name}!</p>
                    )
                }}</Query>
            </TextWrapper>
        </CenteredWrapper>
        <style jsx>{`
        `}</style>
    </Layout>
)

export default withData(AboutPage)
