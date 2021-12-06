import { toAMD, toUSD } from "./helper/converter.js";
import { updateFrom, updateTo } from "./helper/updater.js";

let fromInpt = document.getElementById("from-input");
let toInpt = document.getElementById("to-input");
let convertFrom = document.getElementById("convertFrom");
let convertTo = document.getElementById("convertTo");
const amdCur = document.getElementsByClassName("amd-class");
const usdCur = document.getElementsByClassName("usd-class");

fromInpt.addEventListener("change", (e) => {
  if (e.target.value >= 0) {
    toInpt.value = toAMD(e.target.value);
    console.log(e.target.value);
  }
});

toInpt.addEventListener("change", (e) => {
  if (e.target.value >= 0) {
    fromInpt.value = toUSD(e.target.value);
    console.log(e.target.value);
  }
});
