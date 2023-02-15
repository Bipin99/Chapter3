import React from "react";
import ReactDOM from "react-dom/client";
const {createElement}= React
const heading1= React.createElement("h1",{},"namaste world from react element");
//this is how we write html in jsx(line6). babel will convert this jsx. It uses createElement under the hood like line 4 . i.e jsx=>createElement=>object=>Html(dom).
const heading2=<h1>Namaste world from jsx</h1>
const heading3=React.createElement("div",{},[createElement("h1",{}, "H1 tag "), createElement("h2",{},"H2 tag"),createElement("h3",{},"H3 tag") ])//creating nested h1, h2 , h3 using createElement
const root= ReactDOM.createRoot(document.getElementById("root"));


// Functional component in react should always start with a capital letter or it will not render it on UI. 

// creating nested h1, h2 , h3 using jsx
const ComponentH1 = () => {
  return (
    
   <>
    <h1>H1 tag</h1>
    <ComponentH2/>
    <ComponentH3/>
    </>
  )
}
const ComponentH2=()=>{
    return (
    <div>
        {console.log("hello")} {/*    can write any js code inside curly brackets. */}
        <h2>H2 tag</h2>
     </div>
    )
}
const ComponentH3=()=>{
    return(
        <div>
            <h3> H3 tag</h3>
        </div>
    ) 
}
root.render(<ComponentH1></ComponentH1>);// using as a tag name to call the functional component,having both open and closed tag 

root.render(ComponentH1());// invoke it as a normal function call
root.render(<ComponentH1/>);// we can call the function component by using it as a self closed tag name 


//root.render(heading3)// we can use root.render multiple times. however whichever comes at the end will be rendered.