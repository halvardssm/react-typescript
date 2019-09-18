import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Redirect, Route, Switch } from 'react-router-dom'
import Main from './views/Main'

export const ROUTE_HOME = '/'

interface RouterProps extends WithTranslation {}

class Router extends React.Component<RouterProps> {
	render() {
		const { i18n, t } = this.props

		return (
			<Switch>
				{/*Main pages*/}
				{<Route path={ROUTE_HOME} exact component={Main} />}

				{/*Default redirect if no match*/}
				<Redirect to={ROUTE_HOME} />
			</Switch>
		)
	}
}

export default withTranslation()(Router)
