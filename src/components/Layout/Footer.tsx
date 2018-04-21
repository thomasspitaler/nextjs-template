import React from 'react'
import { Colors, Fonts, Dimensions, Breakpoints } from '../../settings'

interface IFooterProps {
    className?: string
}

const Footer: React.SFC<IFooterProps> = (props) => (
    <footer className={props.className}>
        <p>
            { (new Date()).getFullYear() } Simple Bytes
        </p>
        <style jsx>{`
            footer {
                color: ${Colors.fontInverse};
                background: ${Colors.backgoundInverse};
                text-align: center;
                padding-top: 2rem;
                padding-bottom: 2rem;
            }

            @media screen and (max-width: ${Breakpoints.mobile}) {
                footer {
                    text-align: left;
                    padding-left: ${Dimensions.paddingPageSides};
                    padding-right: ${Dimensions.paddingPageSides};
                }
            }
        `}</style>
    </footer>
)

export default Footer
