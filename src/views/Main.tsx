import React, { Fragment } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

interface MainProps extends WithTranslation {
	path: string
}

class Main extends React.Component<MainProps> {
	render() {
		const { t, i18n } = this.props
		return (
			<Fragment>
				<div id='main'>
					<p>Hello World!</p>
				</div>
			</Fragment>
		)
	}
}

export default withTranslation()(Main)
