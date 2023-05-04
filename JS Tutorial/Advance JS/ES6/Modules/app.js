import {name, code as c, withdraw} from './modules/user.js';    // Renamed code as c
// OR import everything which is exported using
import * as usr from './modules/user.js';
// then call it as 
usr.code();

import { default as df, withdraw as wd, dp } from './modules/account.js';

console.log(name);
// console.log(age);  // Error as permission for this is not granted

c();
withdraw();
wd();
dp();     

df();



//       Aggregate Modular
// import { circle } from './modules/shapes/circle.js'
// import { triangle } from './modules/shapes/triangle.js'
// import { square } from './modules/shapes/square.js'

//      Rather than writing three import statements, we can export it in shapes.js, and then import all the shapes from there
import * as shp from './modules/shape.js'
console.log('\n\t\t\t\t\t\t\t  Aggregate Modular ');
shp.circle();
shp.square();
shp.triangle();


