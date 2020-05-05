import React from "react";

export default function EditMode(props) {
    let script = document.createElement("script");
    script.src = "https://www.editmode.app/assets/chunks.js";
    script.async = true;
    document.body.append(script);

    return(
        <div>
            {props.children}
        </div>
    );
}