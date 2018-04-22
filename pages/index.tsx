import React from 'react'
import Layout from '../src/components/Layout/Layout'

const HomePage: React.SFC = () => (
    <Layout>
        <h1>Next.js Template</h1>
        <p>Have fun with next.js and apollo!</p>
        <style jsx>{`
            p {
                background: #bada55;
                padding: 2em;
                border-radius: 5px;
            }
        `}</style>
    </Layout>
)

export default HomePage
