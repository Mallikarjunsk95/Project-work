import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Myapi = () =>{
    let [alldata, updateData] = useState( [] );
    let [msg, updateMsg] = useState("");


    const getData = ()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(userArray=>{
              updateData( userArray )
        })
    }
    useEffect(()=>{
        getData();
    },[1]);

    const dispatch = useDispatch();
    const save=()=>{
        let dispatchData = {type:"newdata" , allapidata:alldata};
        dispatch(dispatchData);
        toast( "All users sent to store...")
    }
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center mb-5">
                    <h1 className="text-info"> Manage API Data with Redux </h1>
                    <p>{msg}</p>
                    <button className="btn btn-danger" onClick={save}> Send Data To Redux </button>
                </div>
                {
                    alldata.map((data, index)=>{
                        return(
                            <div className="col-lg-3 mb-4 shadow-lg "key={index}>
                                <p>{data.name}</p>
                                <p>{data.email}</p>
                                <p>{data.phone}</p>
                                <p>{data.website}</p>
                            </div>
                        )
                    })
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default Myapi;