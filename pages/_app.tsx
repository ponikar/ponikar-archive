import { PersistGate } from "redux-persist/integration/react"
import '../styles/globals.css'
import { reduxConfig, reduxWrapper } from "../src/Store/store"
const { persistor } = reduxConfig();
import withReduxSaga from "next-redux-saga"
import Toast from "../src/components/Toast/toast.component";
import BackPresser from "../src/components/BackPresser/backpresser.component";
import { BackPressContext } from "../src/components/BackPresser/back-presser.context";
import { useBackPresser } from "../src/components/BackPresser/back-presser.hook";

function MyApp(props) {
    return <PersistGate loading={null} persistor={persistor}> 
            <App {...props} />
      </PersistGate>
}


const App = ({ Component, pageProps  }) => {

 
      const [backProps, setAnyBackProps] = useBackPresser();
      
  return  <BackPressContext.Provider value={{ ...backProps, setAnyBackProps }}>
         <Component {...pageProps} />
            <Toast />
          { backProps.show &&  <BackPresser /> }
         </BackPressContext.Provider>
}

export default reduxWrapper.withRedux(withReduxSaga(MyApp));
