export function CreateTitle(text, font, height) {
    const styling = {
        display: "inline-block", 
        verticalAlign: height, 
        marginLeft: "1%",
        fontSize: font + "vw",
        color: "white",
    }
    return (
        <h1 style={styling}>{text}</h1>
    );
}