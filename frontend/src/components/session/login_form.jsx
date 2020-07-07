import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../scss/layout/login_form.scss';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // when user has been authenticated, redirects to items for now.
    // will probably change to user home page or something later.
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/items');
        }
        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    // Render the session errors if there are any
    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='login-form-container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='login-form'>
                        <header className='login-head'>Log in</header>
                        <br/>
                        <div className='login-input-container'>
                            <input 
                                className='single'
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                                />
                            <br />
                            <input 
                                className='single'
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                                />
                            <br />
                            <input className='login-submit-button' type="submit" value="Log in" />
                            {this.renderErrors()}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);