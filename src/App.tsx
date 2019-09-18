import * as React from 'react'
import { Container } from 'react-bootstrap'
import {
	I18nextProvider,
	withTranslation,
	WithTranslation
} from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import i18n from './translations/i18n'
import Router from './Router'

interface AppProps extends WithTranslation {}

class App extends React.Component<any, AppProps> {
	render() {
		return (
			<div id='app-root'>
				<I18nextProvider i18n={i18n}>
					<BrowserRouter>
						<Container id='container-main'>
							<Header />
							<Router />
							<Footer />
						</Container>
					</BrowserRouter>
				</I18nextProvider>
			</div>
		)
	}
}

export default withTranslation()(App)
