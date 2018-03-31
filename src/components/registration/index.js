import React, {Component} from 'react';
import './styles.styl';
import logo from './logo.png'
import {
  registrate
} from '../../services/http'

export default class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
          user: {
            name: '',
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
      registrate(this.state.user)
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
                    Reg<span>I</span>stration
                </div>
                <form className='form_items' onSubmit={this.submit}>
                    <div className='form_inputs'>
                        <input
                            name="name"
                            type='text'
                            value={this.state.user.name}
                            onChange={event => this.changeValue('name', event.target.value)}
                            required
                        />
                        <label>Name</label>
                    </div>
                    <div className='form_inputs'>
                        <input
                            name="email"
                            type='text'
                            value={this.state.user.email}
                            onChange={event => this.changeValue('email', event.target.value)}
                            required
                        />
                        <label>Email</label>
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
                    <a href='/login'>Login</a>
                </div>
            </div>
        );
    }

}
