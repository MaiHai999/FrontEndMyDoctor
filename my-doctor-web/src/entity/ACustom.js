


import './EntityStyle.css'


function ACustom(props){
    return (
        <a href={props.href} className="custom-a">
            {props.linkText}
        </a>
    );
}


export default ACustom;