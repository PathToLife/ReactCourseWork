import React, {Component} from 'react';

/**
 * Catches runtime errors from components and prints out some user feedback
 * Only use this if you have some code that may fail any you can't control that
 *
 * Nice tool to know, but not a tool that you should use anywhere in your application
 */
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true, errorMessage:error})
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;