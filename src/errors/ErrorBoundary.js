import React from 'react';
import {Text} from 'react-native'
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false,error:'' , errorInfo:'' };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);
    this.setState({error:error,errorInfo:errorInfo})
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Text>Something went wrong. Error caught in React</Text>;
    }

    return this.props.children; 
  }
}
export default ErrorBoundary;