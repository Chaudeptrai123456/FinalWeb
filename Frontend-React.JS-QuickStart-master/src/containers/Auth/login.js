import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import  {handlelogin}  from '../../services/userservice';
 
 
import './login.scss'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            isshowpassword:false,
            password:''
        }
    }
    handlechangeusername = (event)=>{
        this.setState({
            email: event.target.value
        })
        console.log(event.target.value)
    }
    handlechangepassword = (event)=>{
        this.setState({
            password: event.target.value
        })
        console.log(event.target.value)
    }
     
    handlelogin = async()=>{
         await handlelogin(this.state.email,this.state.password)
    }


    handleshowpassword=()=>{
        this.setState({
        isshowpassword:!this.state.isshowpassword
        })
    }

    render() {


        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center-login'>Login</div>
                        <div className='login-input'>
                            <div className='col-12 form-group row'>
                            <label>email</label> <br></br>
                            <input type="email" 
                                className='class-control input'  
                                placeholder='Enter your email'
                                value={this.state.email}   
                                onChange={(event)=>{this.handlechangeusername(event)}} 
                            />
                            </div>
                        </div>
                       <div className='login-input'>
                            <div className='col-12 form-group row'>
                                <label>Password</label> <br></br>
                                <div >
                                    <input
                                        className='class-control input'
                                         type={this.state.isshowpassword ? 'password':'text'} 
                                         
                                        placeholder='Enter your password'
                                        value={this.state.password}    

                                        onChange={(event)=>{this.handlechangepassword(event)}}
                                    />
                                      

                                    <i onClick={()=>{this.handleshowpassword()}} className={this.state.isshowpassword ?'far fa-eye':'far fa-eye-slash'}></i>

                                     
                                </div>
                              
                            </div>
                       </div>
                        
                         
                       
                         
                            <button className='col-12 button-login' 
                                onClick={()=>this.handlelogin()}
                            >
                                Login
                            </button>

                         
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
