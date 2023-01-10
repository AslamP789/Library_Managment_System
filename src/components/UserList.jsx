import { useState,useEffect } from "react";
import '../styles/UserList.css'
const UserList = () => {
    let [lists, setLists]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
         let response=await fetch("http://localhost:4567/user")
         let data=await response.json();
         setLists(data)
        }
        fetchData();
    },[])
    let handleDelete=(id,name)=>{
        setLists(lists.filter(x=>x.id!==id))
        alert(`${name} user is removed`)
    }
    return ( 
        <div className="userlist">
            <h2>UserList:{lists.length}</h2>
            <div className="userlist_section">
                {
                    lists.map(data=>(
                        <div className="list">
                        <h3><b>Name:</b>{data.name}</h3>
                        <p><b>Age:</b>{data.age}</p>
                        <p><b>email:</b>{data.email}</p>
                        <p><b>PhNo:</b>{data.phonenumber}</p>
                        <button onClick={()=>handleDelete(data.id,data.name)} >Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default UserList;