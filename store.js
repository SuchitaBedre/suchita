import { createStore } from "redux";
import reducer from './reducer'

const initialStage= {loogedin:false}
const mystore=createStore(reducer,initialStage);

export default mystore;