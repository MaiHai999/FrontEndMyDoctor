
import './EntityStyle.css'


function ButtonCustom(props){
    const { type, onClick, children } = props; 

    return (
        <button
            type={type} 
            onClick={onClick} 
            className="custom-button" 
        >
            {children} 
        </button>
    );

}

export default ButtonCustom;