
import { useSelector } from "react-redux";

const Mydashboard = () =>{
    const allbook = useSelector( state=>state.Booklist );
    const alluser = useSelector ( state=>state.Userlist );
    const apidata = useSelector( state=>state.Apilist);
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-primary"> All Data From Redux Store </h1>
                </div>
                <div className="row mb-5 mt-5">
                {
                    apidata.map((data, index)=>{
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

            </div>
            <div className="row mt-4">
                {
                    allbook.map((name, index)=>{
                        return(
                            <div className="col-lg-3 mb-3 text-center" key={index}>
                                <h3 className="text-primary shadow-lg p-3"> 
                                    {name} 
                                </h3>
                            </div>
                        )
                    })
                }
            </div>

            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-primary"> User List </h1>
                    <table className="mt-4 table table-bordered">
                        <thead>
                            <tr className="bg-light text-primary">
                               <th>Full Name</th>
                               <th>Mobile No</th>
                               <th>City</th>
                               <th>Education</th>
                               <th>Skills</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                alluser.map((user, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td> {user.name} </td>
                                            <td> {user.mobile} </td>
                                            <td> {user.city} </td>
                                            <td> {user.edu} </td>
                                            <td> {user.skill} </td>
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

export default Mydashboard;