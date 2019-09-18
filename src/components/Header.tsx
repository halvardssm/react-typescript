import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

interface HeaderProps extends WithTranslation {}

class Header extends React.Component<HeaderProps> {
	render() {
		const { i18n, t } = this.props

		return <header id='header'></header>
	}
}

export default withTranslation()(Header)
