import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "./Update.css"
function Update() {
    const [FullName, setFullName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [Address, setAddress] = useState('');
    const [ServiceCategory, setServiceCategory] = useState('');
    const [Specialisation, setSpecialisation] = useState('');
    const [Experience, setExperience] = useState('');
    const [ToolsOwned, setToolsOwned] = useState('');
    const [Availability, setAvailability] = useState('');

    const params=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails=async()=>{
        console.log(params)
        let result=await fetch(`http://localhost:5000/product/${params.id}`)
        result =await result.json()
        setFullName(result.FullName)
        setPhoneNumber(result.PhoneNumber)
        setAddress(result.Address)
        setServiceCategory(result.ServiceCategory)
        setSpecialisation(result.Specialisation)
        setExperience(result.Experience)
        setToolsOwned(result.ToolsOwned)
        setAvailability(result.Availability)
    }
    const updteProduct=async()=>{
        console.log(FullName,PhoneNumber,Address,ServiceCategory,Specialisation,Experience,ToolsOwned,Availability)
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
        method:'put',
        body:JSON.stringify({FullName,PhoneNumber,Address,ServiceCategory,Specialisation,Experience,ToolsOwned,Availability}),
        headers:{
            'Content-type':"application/json"
        }
        })
        result =await result.json()
        console.log(result)
        navigate("/AdminPage")
    }
return (
    
    <div className="update-product-7624">
        <h1 >Update Service</h1>
        <input type="text" placeholder="Enter Name" className="inputx" onChange={(e)=>setFullName(e.target.value)} value={FullName} />
        <input type="text" placeholder="Enter phone" className="inputx" onChange={(e)=>setPhoneNumber(e.target.value)} value={PhoneNumber} />
        <input type="text" placeholder="Enter Address" className="inputx" onChange={(e)=>setAddress(e.target.value)} value={Address} />
        <input type="text" placeholder="Enter category" className="inputx" onChange={(e)=>setServiceCategory(e.target.value)} value={ServiceCategory} />
        <input type="text" placeholder="Enter Specialisation" className="inputx" onChange={(e)=>setSpecialisation(e.target.value)} value={Specialisation} />
        <input type="text" placeholder="Enter Experience" className="inputx" onChange={(e)=>setExperience(e.target.value)} value={Experience} />
        <input type="text" placeholder="Enter Tools" className="inputx" onChange={(e)=>setToolsOwned(e.target.value)} value={ToolsOwned} />
        <input type="text" placeholder="Enter Availability" className="inputx" onChange={(e)=>setAvailability(e.target.value)} value={Availability} />
        <button className="appButton inputx" onClick={updteProduct}>Update Product</button>
    </div>
);

}

export default Update
