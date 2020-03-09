import React, { Component } from 'react';

class DynamicImage extends Component {
  state = {
    loading: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.src && this.props.src !== prevProps.src) {
      // the image source is defined and different then the current
      // source, so we can safely assume a (fresh) image is loading
      this.setState({ loading: true })
    }
  }

  render() {
    const { src, alt } = this.props;
    const onLoad = () => this.setState({ loading: false });

    return (
      <div className='dynamic-image'>
        { src && <img alt={alt} src={src} onLoad={onLoad} /> }
      </div>
    )
  }
}

export default DynamicImage;
