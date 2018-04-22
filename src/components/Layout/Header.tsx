import React from 'react'
import { Link } from '../../routes'
import { Dimensions } from '../../settings'

interface IHeaderProps {
    className?: string
}

const Header: React.SFC<IHeaderProps> = (props) => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link route="index"><a>Index</a></Link>
                </li>
                <li>
                    <Link route="about"><a>About</a></Link>
                </li>
            </ul>
        </nav>
        <style jsx>{`
            header {
                padding-left: ${Dimensions.paddingPageSides};
                padding-right: ${Dimensions.paddingPageSides};
            }

            ul {
                list-style: none;
                padding-left: 0;
                display: flex;
            }

            ul li {
                margin-right: 1em;
            }
        `}</style>
    </header>
)

export default Header
