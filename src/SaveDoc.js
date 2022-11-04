import { jsPDF } from "jspdf";
import React from "react";

// Default export is a4 paper, portrait, using millimeters for units

 function SaveDoc(){
    const doc = new jsPDF();

    function save(){
        doc.text("Hello world!", 10, 10);
        doc.save("a4.pdf");
    };
    
    return (
        <button onClick={save} style={{display: 'block', margin: 'auto', marginTop: '1em'}}>Save</button>
    )
};

export default SaveDoc;

