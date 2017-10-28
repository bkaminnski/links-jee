import React from 'react';
import Email from './Email.jsx';
import Password from './Password.jsx';
import LoginFormStore from './LoginFormStore.js';

export default class LoginForm extends React.Component {

    constructor() {
        super();
        this.store = new LoginFormStore(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return <div className="vertically-aligned with-shadow">
            <div className="container" style={{ maxWidth: '450px' }}>
                <div className="well well-lg">
                    <p style={{ color: 'rgb(128, 128, 128)', fontFamily: 'verdana', fontSize: '32px', lineHeight: '25px', paddingBottom: '25px', fontWeight: 'normal', textAlign: 'center' }}>
                        <span className="glyphicon glyphicon-link" aria-hidden="true"></span><span style={{ color: 'rgb(64, 64, 64)' }}>Link</span><span style={{ fontWeight: 'bold' }}>Link</span>
                    </p>
                    <form onSubmit={this.onSubmit}>
                        <Email
                            id={this.state.keyPrefix + '-email'}
                            key={this.state.keyPrefix + '-email'}
                            ref={(login) => { this.store.addAttributeComponent('email', login); }}
                            attributeName="email"
                            initialValue=""
                            onChange={this.onChange}
                        />
                        <Password
                            id={this.state.keyPrefix + '-password'}
                            key={this.state.keyPrefix + '-password'}
                            ref={(login) => { this.store.addAttributeComponent('password', login); }}
                            attributeName="password"
                            initialValue=""
                            onChange={this.onChange}
                        />
                        <div className="text-right" role="group" aria-label="Add">
                            <button type="submit" className="btn btn-default">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    }

    onChange(attributeName, attributeValue, attributeValid) {
        this.store.onChange(attributeName, attributeValue, attributeValid);
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.store.allAttributesAreValid()) {
            this.store.login();
        } else {
            this.store.focusOnFirstInvalidAttributeComponent();
        }
    }
}
