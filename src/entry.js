import {foo,bar} from './math';
import data from './data/test.json'
import "./css/test.css";
document.write("this is a webpack demo"+'<br/>');
document.write("111111111111111111111111111111111111"+'<br/>');
document.write(foo(3)+'<br/>');
document.write(bar(3)+'<br/>');
document.write(JSON.stringify(data)+'<br/>');