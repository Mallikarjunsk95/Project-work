
const Booklist = (state=[], action) =>{

    let bookdata = Object.assign([], state);

    if(action.type==="addbook"){
        bookdata.push( action.bname );
    }

    if(action.type==="removebook"){
        bookdata.splice( action.bookindex, 1 );
    }

    return bookdata;

}

export default Booklist;