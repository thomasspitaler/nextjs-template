import React from 'react'
import { Link } from '../../src/routes'
import Layout from '../../src/components/Layout/Layout'

const NewsPage: React.SFC = () => {
    const slug = 'some-breaking-news'
    return (
        <Layout>
            <h1>News</h1>
            <p>A real app would fetch the news list via GraphQL.</p>
            <ul>
                <li>
                    <Link route="news entry" params={{ slug }}><a>Some Breaking News</a></Link>
                </li>
            </ul>
        </Layout>
    )
}

export default NewsPage
