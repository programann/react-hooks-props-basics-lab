import React from "react";
import user from "../data/user";


function Links(props){
    return(
        <>
        <h3>Links</h3>
        <a href={props.link}>{user.links.github}</a>
        <a href={props.link}>{user.links.linkedin}</a>
        </>
    )
}

export default Links;