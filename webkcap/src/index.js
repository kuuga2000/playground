import _ from "lodash";
import "./style.css";
import Icon from "./trees-5555938_960_720.jpg";
import Data from './data.xml';
import Notes from './data.csv';

//No warning
import DataJson from "./data.json";

//Warning shown, this is not allowed by the spec
//import { foo } from "./data.json";

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

function component() {
    const element = document.createElement("div");

    element.innerHTML = _.join(["Hello","webpackx"], " ");
    element.classList.add("hello");

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);
    console.log(DataJson);

    console.log(toml.title); // output `TOML Example`
    console.log(toml.owner.name); // output `Tom Preston-Werner`

    console.log(yaml.title); // output `YAML Example`
    console.log(yaml.owner.name); // output `Tom Preston-Werner`

    console.log(json.title); // output `JSON5 Example`
    console.log(json.owner.name); // output `Tom Preston-Werner`

    return element;
}

document.body.appendChild(component());