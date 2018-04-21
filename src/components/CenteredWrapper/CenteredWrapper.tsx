import React from 'react'
import { Dimensions } from '../../settings'

interface ICenteredWrapperProps {
    children?: any
    className?: string
}

const CenteredWrapper: React.SFC<ICenteredWrapperProps> = (props) => (
    <div className={props.className}>
        {props.children}
        <style jsx>{`
            div {
                max-width: ${Dimensions.centeredMaxWidth};
                margin: 0 auto;
            }
        `}</style>
    </div>
)

export default CenteredWrapper
