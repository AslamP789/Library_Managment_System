import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
    //name,age,email,phonenumber,
    let [name,setName]=useState("")
    let [age,setAge]=useState("")
    let [email,setEmail]=useState("")
    let [phonenumber,setPhoneNumber]=useState("")
    let navigate=useNavigate();
    
    let handleSubmit=(e)=>{
        e.preventDefault();
        let userData={name,age,email,phonenumber}
        fetch("http://localhost:4567/user",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
        alert('user added Sucessfully')
        navigate('/admin/user_list')

    }

    return ( 
        <div className="adduser">
            <h1>Add a new_User</h1>
            <div className="user_form">
                <form action="" onSubmit={handleSubmit} >
                    <div className="name">
                        <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className="age">
                        <input type="number" placeholder="Enter your age" min='1' value={age} onChange={(e)=>setAge(e.target.value)} />
                    </div>
                    <div className="user_email">
                        <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="user_phonenumber">
                        <input type="tel" placeholder="Enter phone Number" minLength='10' maxLength='10' value={phonenumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
                    </div>
                    <button>Add User</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddUser;