import {createStore} from "redux";
import notesReducer from "./Reducers/NoteReducer";

const store = createStore(notesReducer)

export default store;