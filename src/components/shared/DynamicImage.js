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

  renderImage() {
    const { src, alt } = this.props;
    const onLoad = () => this.setState({ loading: false });

    if (src) {
      return (
        <a href={src} target="_blank" rel="noopener noreferrer">
          <img alt={alt} src={src} onLoad={onLoad} />
        </a>
      )
    }
  }

  render() {
    const { loading } = this.state;

    return (
      <div className={'dynamic-image ' + (loading ? 'loading' : '')}>
        { this.renderImage()  }
      </div>
    )
  }
}

export default DynamicImage;
