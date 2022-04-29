import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
 
 
 
import './login.scss'
class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
    }

  
    render() {
         

        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center-login'>Login</div>
                        <div className='login-input'>
                            <div className='col-12 form-group row'>
                            <label>Username</label> <br></br>
                            <input type="text" className='class-control input'  placeholder='Enter your username'/>
                            </div>
                        </div>
                       <div className='login-input'>
                            <div className='col-12 form-group row'>
                                <label>Password</label> <br></br>
                                <input type="password" className='class-control input'  placeholder='Enter your password'/>
                            </div>
                       </div>
                        
                         
                       
                         
                            <button className='col-12 button-login'>Login</button>

                         
                        <div className='col-12'>
                            <span className='forgotpassword'>Fogot your password</span>
                        </div>
                        <div className='col-12 row'>
                            <span className='text-center'>Or login with</span>
                        </div>
                        <div className='col-12 iconmeidasocial'>
                             <i className='fab fa-google-plus-g'></i>
                             <i className='fab fa-facebook-f'></i>

                        </div>
                    </div>
                </div>


            </div>
        
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
