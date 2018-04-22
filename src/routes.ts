const createRoutes = require('next-routes')

const routes = createRoutes()

routes
    // .add('<name of route>', '<url pattern>', '<path to page>')
    .add('index', '/', 'index')
    .add('about', '/about', 'about')
    .add('news index', '/news', 'news/index')
    .add('news entry', '/news/:slug', 'news/entry')

const Link = routes.Link
const Router = routes.Router

export default routes
export { Link, Router }
