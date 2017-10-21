import React from 'react';
import Url from './Url.jsx';

export default class LinkItem extends React.Component {
    render() {
        return (
            <div className="list-group">
                <a href={this.props.link.url} className="list-group-item" target="_blank">
                    <Url url={this.props.link.url} />
                    {this.props.link.components}
                </a>
            </div>
        )
    }
}