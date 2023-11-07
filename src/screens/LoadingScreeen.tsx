import { useEffect, useState } from "react";
import Logo from '../assets/logo.png'
import Screw from '../assets/loading_screen/pngwing_com-min.png'



const LoadingScreen = () => {


    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (replace with your actual loading logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set to 3000 milliseconds (3 seconds)
  }, []);

    const animationStyle = {
        animation: 'spin 3s linear infinite',
    };

    const loaderStyle = {
        display: isLoading ? 'flex' : 'none',
    };

    return(
        <div className="loader absolute top-0 left-0 w-full h-screen justify-center items-center flex-col z-50 bg-wood-pattern" style={loaderStyle}>
            <img src={Logo} className="bg-red"/>
          <img
            src={Screw}
            alt="Loading Image"
            style={animationStyle}
          />
        <style>
          {`
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg) scale(60%);
              }
            }
            .hidden {
              display: none;
            }
          `}
        </style>
        </div>

    )
}

export default LoadingScreen


