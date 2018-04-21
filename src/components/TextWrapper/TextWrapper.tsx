import React from 'react'
import { Dimensions } from '../../settings'

interface ITextWrapperProps {
    children?: any
    className?: string
}

const TextWrapper:React.SFC<ITextWrapperProps> = (props) => (
    <div className={props.className}>
        {props.children}
        <style jsx>{`
            div {
                margin: 0;
                padding-left: ${Dimensions.paddingPageSides};
                padding-right: ${Dimensions.paddingPageSides};
                line-height: 1.7;
            }
        `}</style>
    </div>
)

export default TextWrapper
