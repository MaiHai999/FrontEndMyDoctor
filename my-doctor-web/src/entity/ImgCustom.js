

import '../styles/EntityStyle.css'


function ImageCustom(props) {
    const { src, alt } = props;

    return (
        <img
            src={src}
            alt={alt}
            className="custom-image"
        />
    );
}

export default ImageCustom;
