import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import './UnityMap.css';



function UnityMap() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "/assets/230927.loader.js",
    dataUrl: "/assets/230927.data.unityweb",
    frameworkUrl: "/assets/230927.framework.js.unityweb",
    codeUrl: "/assets/230927.wasm.unityweb",
  });

  return (
    <React.Fragment>
      {!isLoaded && (
        <div className="unity-container">
          <div className="loading-screen">
            <div className="image-container">
              <img src='/images/3DTheater.png' alt='3D Theater' />
            </div>
            <div className="loading-content">
              <h2>Loading 3D Map...</h2>
              <div className="progress-circle">
              <h2>{Math.round(loadingProgression * 100)}%</h2>
                {/* You can add a circular loading indicator here */}
                {/* Example: */}
                <div className="circle"></div>
                <div className="mask full">
                  <div className="fill"></div>
                </div>
              </div>
              <p>🚀 Get Ready! 🚀</p>
              {/* Add images, videos, or other loading content */}
            </div>
          </div>
        </div>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "100%",
          justifySelf: "center",
          alignSelf: "center",
          visibility: isLoaded ? "visible" : "hidden"
        }}
      />
    </React.Fragment>
  );
}

export default UnityMap;