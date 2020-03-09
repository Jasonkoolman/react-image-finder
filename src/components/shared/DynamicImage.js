import React, { Component } from 'react';

class DynamicImage extends Component {
  state = {
    loading: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.src && this.props.src !== prevProps.src) {
      this.setState({ loading: true })
    }
  }

  render() {
    const { src, alt } = this.props;
    const onLoad = () => this.setState({ loading: false });

    return (
      <div className='dynamic-image'>
        { this.state.loading.toString() }
        { src && <img alt={alt} src={src} onLoad={onLoad} /> }
      </div>
    )
  }
}

export default DynamicImage;
