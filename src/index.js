import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Link, Routes, Route, Router, BrowserRouter} from 'react-router-dom';
import './index.css';
// import App from './App';
import './App.css'
import reportWebVitals from './reportWebVitals';
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById('root'));

function User(){

    const baseUrl = "http://localhost:8080";

    const[user1, setUser1] = useState({});
    const [user_id, setUser_id] = useState();
    const [user_role, setUser_role] = useState();
    const [user_username, setUser_username] = useState();
    const [user_birth, setUser_birth] = useState();
    const [user_phone, setUser_phone] = useState();
    const [user_userid, setUser_userid] = useState();
    const [user_password, setUser_password] = useState();
    const [user_email, setUser_email] = useState();
    const [user_yn, setUser_yn] = useState();


    useEffect(()=>{
        console.log("씨발useeffect");
        getUser();
    },[]);

    async function getUser(){
        await axios
            .get(baseUrl + "/mypage/1/edit")
            .then((response) => {
                console.log("씨발1");
                console.log(response.data);
                // setUser1(response.data);
                setUser_id(response.data.id);
                setUser_role(response.data.role);
                setUser_username(response.data.userName);
                setUser_birth(response.data.birth);
                setUser_phone(response.data.phoneNumber);
                setUser_userid(response.data.userId);
                setUser_password(response.data.password);
                setUser_email(response.data.email);
                setUser_yn(response.data.userYN);
            })
            .catch((error)=>{
                console.log("씨발");
                console.log(error);
            })
    }

    const user = [{component : "user_id"},
        {component : "user_name"},
        {component : "user_birth"},
        {component : "user_email"},
        {component : "user_phone"}]

    const inputhandleChange = (e) => {
        e.preventDefault();
        setUser1(e.target.value);
    }


    const handleChange_id = (e)=>{
        e.preventDefault();
        setUser_id(e.target.value);
    }
    const handleChange_role = (e)=>{
        e.preventDefault();
        setUser_role(e.target.value);
    }
    const handleChange_username = (e)=>{
        e.preventDefault();
        setUser_username(e.target.value);
    }
    const handleChange_birth = (e)=>{
        e.preventDefault();
        setUser_birth(e.target.value);
    }
    const handleChange_phone = (e)=>{
        e.preventDefault();
        setUser_phone(e.target.value);
    }
    const handleChange_userid = (e)=>{
        e.preventDefault();
        setUser_userid(e.target.value);
    }
    const handleChange_password = (e)=>{
        e.preventDefault();
        setUser_password(e.target.value);
    }
    const handleChange_email = (e)=>{
        e.preventDefault();
        setUser_email(e.target.value);
    }
    const handleChange_yn = (e)=>{
        e.preventDefault();
        setUser_yn(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios
            .post(baseUrl + "/mypage/1/edit", {
                id:user_id,
                role:user_role,
                userName:user_username,
                birth:user_birth,
                phoneNumber:user_phone,
                userId:user_userid,
                password:user_password,
                email:user_email,
                userYN:user_yn,
            })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>id<input type="text" required={true} value={user_id} onChange={handleChange_id}></input></p>
                <p>role<input type="text" required={true} value={user_role} onChange={handleChange_role}></input></p>
                <p>username<input type="text" required={true} value={user_username} onChange={handleChange_username}></input></p>
                <p>birth<input type="text" required={true} value={user_birth} onChange={handleChange_birth}></input></p>
                <p>phone<input type="text" required={true} value={user_phone} onChange={handleChange_phone}></input></p>
                <p>userid<input type="text" required={true} value={user_userid} onChange={handleChange_userid}></input></p>
                <p>password<input type="text" required={true} value={user_password} onChange={handleChange_password}></input></p>
                <p>email<input type="text" required={true} value={user_email} onChange={handleChange_email}></input></p>
                <p>userYN<input type="text" required={true} value={user_yn} onChange={handleChange_yn}></input></p>
                <button type="submit">수정</button>
            </form>
        </div>
    )
}


function App() {

    return (
        <div>
            <h2>메인 페이지</h2>
            <Link to="/mypage/1/edit"> 유저 테스트 </Link>

                <Routes>
                    <Route path="/mypage/1/edit" element={<User/>}></Route>
                </Routes>


        </div>
    )
}

root.render(
    <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </BrowserRouter>
        );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();