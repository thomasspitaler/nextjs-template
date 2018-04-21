import React from 'react'
import { Link } from '../../routes'

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
            
        </header>
)

export default Header
