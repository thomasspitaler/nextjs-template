import React from 'react'
import withData from '../src/lib/withData'
import Layout from '../src/components/Layout/Layout'

const HomePage: React.SFC = () => (
    <Layout>
        <h1>Next.js Template</h1>
        <p>Have fun with next.js and apollo!</p>
        <style jsx>{`
        `}</style>
    </Layout>
)

export default withData(HomePage)
