import React from 'react'
import { Link } from '../../routes'
import { Dimensions } from '../../settings'

interface IHeaderProps {
    className?: string
}

const Header: React.SFC<IHeaderProps> = (props) => (
    <header>
        <nav>
            <Link route="index">
                <a>
                <img src="/static/img/logo-simple-bytes.svg" alt="Logo of Simple Bytes"/>
                </a>
            </Link>
            <ul>
                <li>
                    <Link route="index"><a>Home</a></Link>
                </li>
                <li>
                    <Link route="news index"><a>News</a></Link>
                </li>
                <li>
                    <Link route="about"><a>About</a></Link>
                </li>
            </ul>
        </nav>
        <style jsx>{`
            header {
                padding-top: 1em;
                padding-left: ${Dimensions.paddingPageSides};
                padding-right: ${Dimensions.paddingPageSides};
                display: flex;
            }

            img {
                width: 100px;
                margin-right: 1em;
            }

            ul {
                list-style: none;
                padding-left: 0;
                display: inline-flex;
            }

            ul li {
                margin-right: 1em;
            }
        `}</style>
    </header>
)

export default Header
