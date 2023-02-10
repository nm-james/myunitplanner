import { Link } from "react-router-dom";

export function CreateNavigationButton(text, link, first, redirect) {
    const styling = {
        backgroundColor: "#413e49",
        padding: "0.625% 1.75%",
        marginRight: "0.5%",
        display: "inline-block",
        color: "#cac9d3",
        borderRadius: "1px",
    }
    if (first === true) {
        styling.backgroundColor = "#35456e"
        styling.color = "white"
    }
    let newBtn = '';
    if (redirect) {
        newBtn = <Link to={link} style={styling} className="navButton">{text}</Link>
    }
    else
    {
        newBtn = <a href={link}  rel="noreferrer" target="_blank" style={styling} className="navButton">{text}</a>
    }
    console.log(newBtn);
    return newBtn;
}
