import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { register } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  
    const redirect = props.location.search
      ? props.location.search.split('=')[1]
      : '/';
  
    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;
  
    const dispatch = useDispatch();
    const submitHandler = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        alert('Password and confirm password are not match');
      } else {
        dispatch(register(name, email, password));
      }
    };
    useEffect(() => {
      if (userInfo) {
        props.history.push(redirect);
      }
    }, [props.history, redirect, userInfo]);
    return (
        <>
            <div className="showcase">
                <div className="container grid">
                    <div className="showcase-content">
                        <h1>Welcome to RedStore</h1><br/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit asperiores ut nulla ducimus? Rerum beatae iusto commodi doloremque sit neque facilis corporis culpa, porro debitis! Reiciendis doloremque rerum voluptas neque.</p>
                        <br/><Link to="#" className="btn btn-outline">Read more</Link>
                    </div>
                    <div className="showcase-form card" id="create">
                        
                        {loading && <LoadingBox></LoadingBox>}
                        {error && <MessageBox variant="danger">{error}</MessageBox>}
                        <h2>Register</h2>
                        <form onSubmit={submitHandler}>
                            <div className="form-control">
                                <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" required/>
                            </div>
                                               
                            <div className="form-control">
                                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" required/>
                            </div>
                        
                            <div className="form-control">
                                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required/>
                            </div>
                            <div className="form-control">
                                <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm Password" required/>
                            </div>
                            <button className="button-positive" type="submit">
                                Register
                            </button>
                            <div>
                                <br/><br/><br/>
                                Already have an account? 
                                <Link to={`/signin?redirect=${redirect}`} style={{color:"#1abc9c"}}>&nbsp;Sign-In</Link> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
