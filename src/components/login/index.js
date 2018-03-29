import React, {Component} from 'react';
import './styles.styl';
import logo from './logo.png'
import {
  login
} from '../../services/http'

export default class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
          user: {
            email: '',
            password: ''
          }
        }

        this.changeValue = this.changeValue.bind(this)
        this.submit = this.submit.bind(this)
    }

    changeValue (key, value) {
      this.setState({
        user: {
          ...this.state.user,
          [key]: value
        }
      })
    }

    submit (event) {
      event.preventDefault()
      login(this.state.user)
        .then(console.log)
        .catch(console.warn)
    }

    render() {
        return (
            <div className='form'>
                <div className='form_logo'>
                    <img src={logo} alt="Brand"/>
                </div>
                <div className='form_title'>
                    Log<span>I</span>n
                </div>
                <form className='form_items' onSubmit={this.submit}>
                    <div className='form_inputs'>
                        <input
                            name="email"
                            type='text'
                            value={this.state.user.email}
                            onChange={event => this.changeValue('email', event.target.value)}
                            required
                        />
                        <label>Username or email</label>
                    </div>
                    <div className='form_inputs'>
                        <input
                            name="password"
                            type='password'
                            value={this.state.user.password}
                            onChange={event => this.changeValue('password', event.target.value)}
                            required
                        />
                        <label>Password</label>
                    </div>
                    <button type="submit" className='form_button'>Log In</button>
                </form>
                <div className='form_other '>
                    <a href='#'>Forgot password?</a>
                    <a href='/registration'>Registration</a>
                </div>
            </div>
        );
    }

}
