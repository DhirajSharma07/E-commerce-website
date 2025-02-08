import React from 'react'

function Shoppage() {
     function Openpage(){
        window.open("https://www.youtube.com/@krish_tyagi_gaming")
     }
  return (
    <div id='shoppage'>

        hello
        <button onClick={Openpage}> click me!</button>
      
    </div>
  )
}

export default Shoppage
