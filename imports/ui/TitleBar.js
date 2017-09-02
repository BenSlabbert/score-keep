import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {

    renderSubTitle() {
        if (this.props.subtitle) {
            return <h2>{this.props.subtitle}</h2>;
        }
    }

    render() {
        return (
            < div >
                <h1>{this.props.title}</h1>
                {this.renderSubTitle()}
            </div >
        );
    }
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};

TitleBar.defaultProps = {
    title: 'Default Title'
};