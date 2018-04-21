import React, { Component } from 'react'
import Button from 'material-ui/Button'
import Cookies from 'js-cookie'
import classNames from 'classnames'
import { Colors } from '../../settings'
import { Link } from '../../routes'

const COOKIE_NAME = 'cookies_accepted'
const COOKIE_VALID_DAYS = 365

interface ICookieBannerProps {
    className?: string
}

interface ICookieBannerState {
    visible: boolean
}

class CookieBanner extends Component<ICookieBannerProps, ICookieBannerState> {
    constructor(props) {
        super(props)

        this.state = {
            visible: !this.hasAcceptedCookies()
        }

        this.handleClick = this.handleClick.bind(this)
    }

    public render(): JSX.Element {
        const className = classNames(
            'cookie-banner',
            this.props.className,
            { 'cookie-banner-visible': this.state.visible }
        )

        if (!this.state.visible) { return <div className={className}></div> }

        return (
           <div className={className}>
                <p>
                Sie stimmen durch die Nutzung unserer Website zu, dass Cookies auf Ihrem Gerät gespeichert werden
                und Google Analytics zum Einsatz kommt, um Ihnen den bestmöglichen Service zu bieten.
                Siehe dazu auch unsere <Link route="privacy"><a>Datenschutzerklärung</a></Link>.
                </p>
                <p>
                    <Button
                        onClick={this.handleClick}
                        variant="raised"
                        color="primary"
                    >
                        Ok
                    </Button>
                </p>
                <style jsx>{`
                    .cookie-banner.cookie-banner-visible {
                        display: block;
                    }

                    .cookie-banner {
                        display: none;
                        box-sizing: border-box;
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        
                    }

                    .cookie-banner p {
                        margin: 1em;
                    }

                    .cookie-banner,
                    .cookie-banner p,
                    .cookie-banner a {
                        color: ${Colors.background};
                        background: ${Colors.cookieBannerBackground};
                    }

                    a {
                        font-weight: bold;
                    }
                `}</style>
            </div>
        )
    }

    private handleClick() {
        this.setHasAcceptedCookies()
        this.hideBanner()
    }

    private setHasAcceptedCookies() {
        Cookies.set(COOKIE_NAME, 'true', { expires: COOKIE_VALID_DAYS });
    }

    private hasAcceptedCookies(): boolean {
        return Cookies.get(COOKIE_NAME) !== undefined
    }

    private hideBanner() {
        this.setState({ visible: false })
    }
}

export default CookieBanner
