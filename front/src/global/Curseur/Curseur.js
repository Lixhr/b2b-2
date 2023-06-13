
import './Curseur.css';



function createCustomCursor() {
    let cursor = document.getElementById('myCustomCursor');
     if (cursor) {

     } else {
         cursor = document.createElement("div");
         cursor.setAttribute("id", "myCustomCursor");
         document.body.appendChild(cursor);
         initCustomCursor(cursor);
     }
 }

 
 function initCustomCursor(cursor) {
     document.body.onmousemove = function(e) {
         cursor.style.setProperty('--x', (e.clientX) + 'px');
         cursor.style.setProperty('--y', (e.clientY) + 'px');
     }
 }



createCustomCursor();

function Curseur() {
  return (
    <div className="App">
    </div>
  );
}

export default Curseur;

