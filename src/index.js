import { DataTable } from "./UI/DataTable";
// import { comments } from "./comments";
import {fleet} from "./data"
const root = document.getElementById("root");
const root1 = document.getElementById("root1");
let dt = new DataTable(fleet); 
dt.appendToElement(root);
