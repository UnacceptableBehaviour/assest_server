import { collidingBalls } from './collision_canvas.js';
// note on using import - module syntax
// https://bobbyhadz.com/blog/javascript-syntaxerror-cannot-use-import-statement-outside-module

// use .mjs in node?
// https://exerror.com/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module-when-importing-ecmascript-6/



console.log('collidingBalls(); - - - S');
document.addEventListener('DOMContentLoaded', (event) => {
    collidingBalls();
});
console.log('collidingBalls(); - - - E');

// So FOUR ways to schedule work:
// - - - - Summary
// f() calls push onto the stack
// setTimeout(callback, timeout) passes callback to eventTable / Web API
//                  - this puts callBack in the msgQ at appropriate time - set by timeout
// requestAnimationFrame(callback) puts callback into start of the rendering steps
//                  - rendering steps: callback, Style Calcs, Layout Tree, Pixel Render
//                  - aka RAF callback
// Event Loop:
// Execute off stack first. (UNTIL EMPTY)
// Pull callbacks from msgQ push to stack
// RAF callback - RenderQ - exec renderQ 60FPS insert between msgQ call back as appropiate
// MicrotasksQ (used for Promises) - Waits until stack empty, then highest priority, keep being serviced until uTaskQ empty!
//
// Event Loop in 3m
// https://www.youtube.com/watch?v=5YcMKYTZZvk
//
// Event Loop - in Depth
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
//
// Node Event Loop
// https://www.youtube.com/watch?v=zphcsoSJMvM
//
// Event Loop Visualized - how requestAnimationFrame fits into the picture, and microTasks 27m30
// https://www.youtube.com/watch?v=cCOL7MC4Pl0

// SUMMARY - FOUR ways to schedule work:
// 1. function call - uses stack
// 2. setTimeout(callback, timeout) - puts callback on msgQ
// 3. RAF call back - this._raf = window.requestAnimationFrame(this._animateHandler) - exec callback before rendering
// 4. uTaskQ - add syntax for scheduling callback

// pre import / require
// Revealing Module Pattern (IIFE) (pre import / require)
var revealingModule = (function () {
    var privateVar = "Ben Thomas";
    function setNameFn( strName ) {
        privateVar = strName;
    }
    function getNameFn() {
        return privateVar;
    }
    return {
        setName: setNameFn,
        getName: getNameFn,
    };
})(); //  (IIFE) immediately invoked function expression

console.log(revealingModule.getName());
revealingModule.setName( "Paul Adams" );
console.log(revealingModule.getName());


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// https://www.toptal.com/javascript/interview-questions

//const delay = 4;
//// synchronous - bad - blocks rendering
//// forEach is on the stack until all aelemnts processed so if they take a long time they could block rendering
//[1,2,3,4].forEach( element => {
//    console.log(`This coulds be a huge call ${element}`);
//    let count = 0;
//    while (count < delay) {
//      count += 1;
//      console.log(count);
//    }
//});
//
//
//function asyncCallbackArray(arr) {
//  arr.forEach(
//    callback => { setTimeout( a => { console.log(`Asynch callback ${callback}`); }, 0 ) }
//  );
//}
//
//asyncCallbackArray([1, 2, 3, 4]);
//
//console.log('\n\nTESTS from ');
//const sum = (m) => {
//    return (n) => { return m + n; };
//};
//
//console.log(sum(2)(3));
//
//// for (var i = 0; i < 5; i++) {    // I think this creates i on the heap so all console logs 5 ln 72
//for (let i = 0; i < 5; i++) {       // using let assigns the number as expected
//  var btn = document.createElement('button');
//  btn.appendChild(document.createTextNode(`Button ${i}`));
//  btn.addEventListener('click', function(){ console.log(i); });
//  document.body.appendChild(btn);
//}
//
//// quite a COMMON PATTERN to KEEP THE STACK CLEAR - and thus not blocke evernts & rendering
//function readHugeList() { return [11,22,33,44,55,66] };
//var list = readHugeList();
//var nextListItem = function() {     // the recursive functionality is retained by 
//    var item = list.pop();          // pushing the next call onto the eventQ - leaving the stack clear
//
//    if (item) {
//        console.log(item); // process the list item...
//        setTimeout( nextListItem, 0);
//    }
//};
//nextListItem();
//
//
//
//// JS weirdness
//var a={},
//    b={key:'b'},
//    c={key:'c'};
//
//a[b]=123;   // the parameter b is stringified to "[object Object]" as opposed to using object id as in python
//a[c]=456;   // the parameter c is stringified to "[object Object]"
//
//console.log('> a[b] - - - - - S');
//console.log(a[b]);  // so this yields 456
//console.log(b.toString());
//console.log(c.toString());
//console.log('> a[b] - - - - - E');
//
////Create a function that, given a DOM Element on the page, will visit the element itself and all of its
////descendents (not just its immediate children). For each element visited, the function should pass that
////element to a provided callback function.
////
////The arguments to the function should be:
////a DOM element
////a callback function (that takes a DOM element as its argument)
//
//function elementInspect(element) {
//  console.log(elment);
//}
//
//function processTaregtAndDescendants(theElement, callback) {
//  var descendants = Array.from(theElement.querySelectorAll("*"));
//  
//  descendants.unshift(theElement);
//
//  descendants.forEach( e => { callback(e); } );
//}
////processTaregtAndDescendants(target, elementInspect);
//
//// Their answer
//// Visiting all elements in a tree (DOM) is a classic Depth-First-Search algorithm application. Here’s an example solution:
//function Traverse(p_element,p_callback) {
//   p_callback(p_element);
//   var list = p_element.children;
//   for (var i = 0; i < list.length; i++) {
//       Traverse(list[i],p_callback);  // recursive call
//   }
//}
//
//
//
//const a = Array(10).fill(1).map((n,i) => n+i);        
//cl(a);    // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
////const b = Array.from((new Agent(1, 2)).repeat(5));      // fails
////const b = Array.from(random.range(0, 20).repeat(5));    // fails
//
//const b = Array.from('20'.repeat(5)); 
//cl(b);    // (10) ['2', '0', '2', '0', '2', '0', '2', '0', '2', '0']
//cl('20'.repeat(5)); // 2020202020
//
//const c = Array.from({length: 5}, (v, i) => i);
//cl(c);    // (5) [0, 1, 2, 3, 4]
//
//cl({length: 5});  //{length: 5} ?? is not object w/ param 'length' value = 5 ?
//
//const d = Array.from({length: 5}, (v, i) => new Agent(1, 2) );
//cl(d);    // (5) [Agent, Agent, Agent, Agent, Agent]
//
//const e = Array(5).forEach( (element, index) => { cl(index); index });
//cl(`e ${e}`); // e undefined
//              // forEach skips undefined elements - so there's not even an output from cl(index)
//
////const f = Array(5).fill(1).forEach( (element, index) => { index; } ); // undefined
//const f = Array(5).fill(1).forEach( (element, index) => { cl(index); index });
//cl(`f ${f}`); // f undefined
//              // forEach skips undefined elements - so there's not even an output from cl(index)
////0
////1
////2
////3
////4
////f undefined
//
//const g = Array.apply(null, Array(5)).map(function () {})
//cl(`g ${g}`);   // g ,,,,
//                // apply does not skip undefined 
//
//const h = Array.apply(null, Array(5)).map( e => { return new Agent(1,3); })
//cl(`h ${h}`);   // h [object Object],[object Object],[object Object],[object Object],[object Object]
//cl(h);          // (5) [Agent, Agent, Agent, Agent, Agent]
//cl(`h[0]x ${h[0].pos.x}`);  // h[0]x 1
//cl(`h[0]y ${h[0].pos.y}`);  // h[0]y 3
//                
//                
//const i = Array.from({length: 5}, (e) => new Agent(1, 2) );
//cl(`i ${i}`);    // (5) [object Object],[object Object],[object Object],[object Object],[object Object]
//
//const j = Array.from({length: 5}, (e) => new Agent(1, 2) );
//cl(`j ${j}`);    // (5) [Agent, Agent, Agent, Agent, Agent]                
//
//const k = Array.from({length: 5}, (e) => new Agent(random.rangeFloor(0, 1024), random.rangeFloor(0, 1024)) );
//cl(k);           // (5) [Agent, Agent, Agent, Agent, Agent]    

    
// questions on Function.protoype.apply()

// Q's from here https://masteringjs.io/tutorials/fundamentals/foreach-break






