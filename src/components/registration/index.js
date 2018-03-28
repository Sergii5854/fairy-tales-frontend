import React, {Component} from 'react';
import './styles.styl';
import logo from './logo.png'


export default class Login extends Component {
    render() {
        return (
            <div className='form'>
                <div className='form_logo'>
                    <img src={logo} alt="Brand"/>
                </div>
                <div className='form_title'>
                    Reg<span>I</span>stration
                </div>
                <form className='form_items'>
                    <div className='form_inputs'>
                        <input
                            name="email"
                            type='text'
                            required
                        />
                        <label>username or email</label>
                    </div>
                    <div className='form_inputs'>
                        <input
                            name="password"
                            type='password'
                            required
                        />
                        <label>password</label>
                    </div>
                    <button type="submit" className='form_button'>Log In</button>
                </form>
                <div className='form_other '>
                    <a href='#'>forgot password?</a>
                    <a href='/login'>Login</a>
                </div>
            </div>
        );
    }

}