import "../node_modules/material-design-lite/material.min.css";
import "../node_modules/material-design-lite/material.min.js";
import { DataTable } from "./UI/DataTable";
const { FleetDataService } = require("./services/fleet-data-service");
const { fleet } = require("./data");
const root = document.getElementById("root");
dt.appendToElement(root);
