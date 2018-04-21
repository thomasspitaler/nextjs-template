import React from 'react'
import withData from '../src/lib/withData'
import Layout from '../src/components/Layout/Layout'
import CenteredWrapper from '../src/components/CenteredWrapper/CenteredWrapper'
import TextWrapper from '../src/components/TextWrapper/TextWrapper'
import { Colors, Breakpoints } from '../src/settings'

const HomePage: React.SFC = () => (
    <Layout>
        <CenteredWrapper className="home">
            <TextWrapper>
                <h1>Next.js Template</h1>
                <p>Have fun with next.js and apollo!</p>
            </TextWrapper>
        </CenteredWrapper>
        <style jsx>{`
        `}</style>
    </Layout>
)

export default withData(HomePage)
