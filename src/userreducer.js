const Userlist = (state=[], action) =>{
    
    let userdata = Object.assign([], state);

    if(action.type==="adduser"){
        userdata.push( action.userinfo );
    }
    if (action.type==="removeuser"){
        userdata.splice( action.userindex , 1);
    }
    return userdata;

}

export default Userlist;