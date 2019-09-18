import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

interface FooterProps extends WithTranslation {}

class Footer extends React.Component<FooterProps> {
    render() {
        const { t } = this.props

        return <footer id='footer'></footer>
    }
}

export default withTranslation()(Footer)
