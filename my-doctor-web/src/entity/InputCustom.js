
import '../styles/EntityStyle.css'



function InputCustom(props){
    const { type,value ,onChange, placeholder } = props;

    return(
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="custom-input"
        />
    );

}


export default InputCustom;