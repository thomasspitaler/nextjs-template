import React, { Component } from 'react'
import classNames from 'classnames'
import '../../styles/index.css'
import '../../pageEvents'
import { initGA, logPageView } from '../../lib/analytics'
import { ICustomWindow } from '../../types/window.d'
import { Colors, Fonts, Dimensions } from '../../settings'
import Header from './Header'
import Footer from './Footer'

declare let window: ICustomWindow

interface ILayoutProps {
    children?: any
    className?: string
}

class Layout extends Component<ILayoutProps> {
    public componentDidMount () {
        if (!window.GA_INITIALIZED) {
          initGA()
          window.GA_INITIALIZED = true
        }
        logPageView()
    }

    public render() {
        const className = classNames('layout', this.props.className)
        const children = this.props.children
        return (
            <div className={className}>
                <Header className="header" />
                <main>
                    {children}
                </main>
                <Footer className="footer" />
                <style jsx global>{`
                    .layout {
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                    }

                    .header, .footer {
                        flex: 0 0 auto;
                    }

                    main {
                        flex: 1 0 auto;
                        padding-left: ${Dimensions.paddingPageSides};
                        padding-right: ${Dimensions.paddingPageSides};
                    }

                    body {
                        background: ${Colors.background};
                    }

                    body, p, div, h1, h2, h3, h4, h5, h6 {
                        color: ${Colors.font};
                        line-height: ${Fonts.lineHeight};
                    }
                `}</style>
            </div>
        )
    }
}

export default Layout
