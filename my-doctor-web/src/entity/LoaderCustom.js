import "../styles/EntityStyle.css";
import { RingLoader } from 'react-spinners';


function LoaderCustom({ color = "#123abc", loading = false, size = 60 }){
    return (
        <RingLoader
          color={color}
          loading={loading}
          className="custom-loader"
          size={size}
        />
      );
}


export default LoaderCustom;