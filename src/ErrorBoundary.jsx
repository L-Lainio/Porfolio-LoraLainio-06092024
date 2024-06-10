import { Component } from 'react';
import PropTypes from 'prop-types'; // Ensure PropTypes is imported

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        console.error(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return this.props.fallback || <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
  fallback: PropTypes.element.isRequired, // Assuming fallback is a React element
  children: PropTypes.node.isRequired, // Assuming children is a React node
};

export default ErrorBoundary;
