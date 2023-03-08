import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mybook = () =>{
    let[bookname, pickName] = useState("");
    let[msg, updateMsg] = useState("");
    let dispatch = useDispatch();
    
    let allbook = useSelector( state=>state.Booklist );

    const save = () =>{
       let dispatchData = {type:"addbook", bname:bookname};
       dispatch(dispatchData);
       toast(bookname + " Sent To Store....");
       pickName("");
    }

    const deleteBook = (index, name) =>{
        let dispatchData = {type:"removebook", bookindex:index};
        dispatch(dispatchData);
        toast(name + " - Deleted Successfully ");
    }

    return(
        <div className="container">
            <ToastContainer />
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-center"> Manage Books : {allbook.length} </h1>
                    <p className="text-danger"> {msg} </p>
                    <p>
                        Enter Book Name : 
                        <input 
                            type="text" 
                            className="m-3"
                            onChange={obj=>pickName(obj.target.value)} 
                            value={bookname} 
                        />
                        <button 
                            className="btn btn-info m-3" 
                            onClick={save}>Save
                        </button>
                    </p>
                </div>
                {
                    allbook.map((name, index)=>{
                        return(
                            <div className="mb-4 col-lg-2 text-center" key={index}>
                                <div className="bg-info text-white p-3 rounded">
                                    <h4> {name} </h4>
                                    <button 
                                        className="btn btn-danger btn-sm"
                                        onClick={deleteBook.bind(this, index, name)}>Delete
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Mybook;