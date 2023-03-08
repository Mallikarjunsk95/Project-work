const Apilist = (state=[], action) =>{
    
    let apidata =Object.assign([], state);

    if (action.type==="newdata"){
        apidata = action.allapidata;
    }
    return apidata;
    
}

export default Apilist;