import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { signin } from '../actions/userActions'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'

export default function SigninScreen(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const redirect = props.location.search? props.location.search.split('=')[1]:'/'

    const userSignin= useSelector((state)=> state.userSignin)
    const {userInfo,loading,error} = userSignin;

    const dispatch = useDispatch();
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(signin(email,password))
        //
    }
    useEffect(() => {
       if(userInfo){
           props.history.push(redirect)
       } 
       
    }, [userInfo,redirect,props.history])
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
                        <h2>Sign In</h2>
                        <form onSubmit={submitHandler}>
                                               
                            <div className="form-control">
                                <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" required/>
                            </div>
                        
                            <div className="form-control">
                                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required/>
                            </div>
                            <button className="button-positive" type="submit">
                                Sign In
                            </button>
                            <div>
                                <br/>
                                New Customer? 
                                <Link to="/register" style={{color:"#1abc9c"}}>&nbsp;Create your account</Link> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
