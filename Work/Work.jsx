import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Work extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {};

  static defaultProps = {};

  state = {};

  render() {
    const { className, children, ...others } = this.props;

    const cls = classnames({
      'components-work-render': true,
      [className]: !!className,
    });

    return (
      <div className={cls} {...others}>
        { children }
      </div>
    );
  }
}

export default Work;
