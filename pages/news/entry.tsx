import React from 'react'
import Layout from '../../src/components/Layout/Layout'
import BodyRenderer from '../../src/components/BodyRenderer/BodyRenderer'
import PageProps from '../../src/lib/PageProps'

interface NewsPageQueryParams {
   slug: string
}

type NewsPageProps = PageProps<NewsPageQueryParams>

const NewsPage: React.SFC<NewsPageProps> = (props) => {
    const slug = props.url.query.slug
    const someRichContent = `
        <p>A real app would get this content via a GraphQL query, using the slug as a variable.</p>

        <p>To get started, you can check the source code of the the <a href="/about">about page</a>,
        which uses a GraphQL query to get part of its content. It is located at <code>pages/about.tsx</code>.</p>

        <p>For more details see the
        <a href="https://www.apollographql.com/docs/react/essentials/queries.html">Apollo Documentation</a>.</p>
    `
    return (
        <Layout>
            <h1>Some Breaking News</h1>
            <p>Slug: {slug}</p>
            <BodyRenderer>{ someRichContent }</BodyRenderer>
        </Layout>
    )
}

export default NewsPage
