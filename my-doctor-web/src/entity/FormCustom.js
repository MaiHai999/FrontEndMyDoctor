



import './EntityStyle.css'


function FormCustom(props) {
    // Extract props
    const { children } = props;

    return (
        <form className="custom-form">
            {children}
        </form>
    );
}

export default FormCustom;
