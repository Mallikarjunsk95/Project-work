import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Myuser = () => {
    let[name, pickName] = useState("");
    let[mobile, pickMobile] = useState("");
    let[city, pickCity] = useState("");
    let[edu, pickEdu] = useState("");
    let[skill, pickSkill] = useState("");
    let[msg, updateMsg] = useState("");
    let dispatch = useDispatch();

    const save = () =>{
        let newuser = {name:name, mobile:mobile, city:city, edu:edu, skill:skill};
        let dispatchData = {type:"adduser", userinfo:newuser};
        dispatch(dispatchData);
        updateMsg(name + " - Save Successfully !");
        pickCity(""); pickEdu(""); pickMobile(""); pickName(""); pickSkill("");
    }

    let alluser = useSelector( state=>state.Userlist );

      const deleteuser =(index, name)=>{
        let dispatchData = {type:"removeuser" , userindex:index}
        dispatch(dispatchData);
        updateMsg(name + "-deleted successfully");
      }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-center"> Manage Users : {alluser.length} </h1>
                    <p> {msg} </p>
                    <p>
                        <input type="text" className="m-3" placeholder="Full Name"
                        onChange={obj=>pickName(obj.target.value)} 
                        value={name}/>

                        <input type="text" className="m-3" placeholder="Mobile No"
                        onChange={obj=>pickMobile(obj.target.value)} 
                        value={mobile}/>

                        <input type="text" className="m-3" placeholder="City"
                        onChange={obj=>pickCity(obj.target.value)} 
                        value={city}/>

                        <input type="text" className="m-3" placeholder="Education"
                        onChange={obj=>pickEdu(obj.target.value)} 
                        value={edu}/>

                        <input type="text" className="m-3" placeholder="IT Skills"
                        onChange={obj=>pickSkill(obj.target.value)} 
                        value={skill}/>

                        <button className="btn btn-info m-3" onClick={save}>Save</button>
                    </p>
                    <table className="mt-4 table table-bordered">
                        <thead>
                            <tr className="bg-light text-primary">
                               <th>User Id</th>
                               <th>Full Name</th>
                               <th>Mobile No</th>
                               <th>City</th>
                               <th>Education</th>
                               <th>Skills</th>
                               <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alluser.map((user, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td> {index} </td>
                                            <td> {user.name} </td>
                                            <td> {user.mobile} </td>
                                            <td> {user.city} </td>
                                            <td> {user.edu} </td>
                                            <td> {user.skill} </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={deleteuser.bind(this, index, name)}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Myuser;