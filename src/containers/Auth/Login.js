import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginAPI } from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            eyeshowpass: false,
            messingCode: ''
        }
    }
    //even
    handleChangeUsername = (even) => {
        this.setState({
            username: even.target.value,
        })
    }
    handleChangePassword = (even) => {
        this.setState({
            password: even.target.value,
        })
    }
    handleClickHidenPassWord = () => {
        this.setState({
            eyeshowpass: !this.state.eyeshowpass,
        })
    }
    //login
    handleLogin = async () => {
        this.setState({
            messingCode: ''
        })
        try {
            let data = await handleLoginAPI(this.state.username, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    messingCode: data.message,
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
                console.log('login success', data.user);
            }

        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        messingCode: error.response.data.message,
                    })

                }
            }


        }
    }

    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-login'>
                            login
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>UserName:</label>
                            <input type='text'
                                className='form-control'
                                placeholder='Enter your username:'
                                value={this.state.username}
                                onChange={(even) => this.handleChangeUsername(even)}
                            />

                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>PassWord:</label>
                            <div className='login-input-password'>
                                <input type={this.state.eyeshowpass ? 'text' : 'password'}
                                    className='form-control'
                                    placeholder='Enter your username:'
                                    onChange={(even) => this.handleChangePassword(even)}
                                />
                                <span
                                    onClick={() => this.handleClickHidenPassWord()}
                                ><i
                                    className={this.state.eyeshowpass ? "far fa-eye eye-icon" : "far fa-eye-slash eye-icon"}
                                ></i></span>
                            </div>


                        </div>
                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.messingCode}
                        </div>
                        <div className='col-12 '>
                            <button className='btn-login'
                                onClick={() => this.handleLogin()}
                            >Login</button>
                        </div>
                        <div className='col-12 forgot-password'>
                            <span>Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center mt-3'>
                            <span className='text-other-login'>Or Login with</span>

                        </div>
                        <div className='col-12 social-login'>
                            <i className="fab fa-google-plus-g google-icon"></i>
                            <i className="fab fa-facebook-f  facebook-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        langguage: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
