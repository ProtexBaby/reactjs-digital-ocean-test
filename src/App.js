import { Unity, useUnityContext } from "react-unity-webgl/"
import './index.css'

function App() {
  /*const { unityProvider } = useUnityContext({
    codeUrl: `/W2/W2.wasm`,
    dataUrl: `/W2/W2.data`,
    frameworkUrl: `/W2/W2.freamwork.js`,
    loaderUrl: `/W2/W2.loader.js`
  });*/

  const { unityProvider } = useUnityContext({
    codeUrl: `/unity-build/communication-tests.wasm`,
    dataUrl: `/unity-build/communication-tests.data`,
    frameworkUrl: `/unity-build/communication-tests.framework.js`,
    loaderUrl: `/unity-build/communication-tests.loader.js`,
  });

  return (
    <div className="App">
    <header className="App-header">
      <h1>Hello World</h1>
      <p>Lets learn React...</p>
      <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
    </header>
  </div>
  );
}

export default App;
