
import { combineReducers } from "redux";

import Booklist from "./bookreducer";
import Userlist from "./userreducer";
import Apilist from "./apireducer";

const Mainreducer = combineReducers(
    {Booklist , Userlist, Apilist}
);

export default Mainreducer;