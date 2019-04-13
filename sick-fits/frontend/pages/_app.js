import App, { Container } from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
    render() {
        const { Component } = this.props;

        return (
            <Container>
                <Page>
                    <Component />
                </Page>
            </Container>
        )
    }
}

export default MyApp;

// This container is going to be a wrapper that goes on top of all of the other components
// We probably don't want to render anything visually in this container
// just receive the component and render that, and pass state to it.