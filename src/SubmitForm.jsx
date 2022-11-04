import React, { useState, useEffect } from "react";

import { jsPDF } from "jspdf";

function SubmitForm() {   
   const [text, setText] = useState('');
   const [final, setFinal] = useState(1);
   const [once, setOnce] = useState(false);

   const doc = new jsPDF();

   function save(){
       doc.text(final, 10, 10);
       doc.save("a4.pdf");
   };

    useEffect(() =>{
        setFinal( prev => text);
    }, [text, once]
    )

   function handleSubmit(){
        setOnce(() => true);
   }

   function handleChange(event){
    setText(prev => event.target.value);
   }
   return (
    <>
        <form onSubmit={handleSubmit}>
                <label>
                Write Your Name:
                <textarea value={text} onChange={handleChange} style={styles.centerOne}/>
                </label>
        </form>
        <input onClick={save} type="submit" value="Submit" style={styles.centerOne}></input>
        {final}
    </>
)};

const styles = {
    centerOne: {display: 'block', margin: 'auto', marginTop: '1em'},
}

export default SubmitForm;