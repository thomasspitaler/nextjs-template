import React from 'react'
import { Colors, Dimensions, Breakpoints } from '../../settings'

interface IFooterProps {
    className?: string
}

const Footer: React.SFC<IFooterProps> = (props) => (
    <footer className={props.className}>
        <p>
            <span className="copyleft">&copy;</span>
            { ' ' + (new Date()).getFullYear()  + ' '}
            <a href="https://simplebytes.at">Simple Bytes</a>
        </p>
        <style jsx>{`
            footer {
                text-align: center;
                padding-top: 2rem;
                padding-bottom: 2rem;
            }

            footer, footer p {
                color: ${Colors.fontInverse};
                background: ${Colors.backgoundInverse};
            }

            .copyleft {
                display: inline-block;
                -moz-transform: scaleX(-1);
                -o-transform: scaleX(-1);
                -webkit-transform: scaleX(-1);
                transform: scaleX(-1);
                filter: FlipH;
                -ms-filter: "FlipH";
            }

            a {
                color: ${Colors.fontInverse};
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
