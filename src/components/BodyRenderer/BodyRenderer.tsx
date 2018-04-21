import React from 'react'

interface IBodyRenderer {
    children: string
    className?: string
} 

const BodyRenderer: React.SFC<IBodyRenderer> = (props) => {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: props.children }}
            className={props.className}
        />
    )
}

export default BodyRenderer
