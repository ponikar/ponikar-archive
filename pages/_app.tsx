import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import '../styles/globals.css'
import { reduxConfig, reduxWrapper } from "../src/Store/store"
const { store, persistor } = reduxConfig();
import withReduxSaga from "next-redux-saga"
import Toast from "../src/components/Toast/toast.component";

function MyApp(props) {
    return <PersistGate loading={null} persistor={persistor}> 
            <App {...props} />
      </PersistGate>
}


const App = ({ Component, pageProps  }) => {


  return <Provider store={store}>
          <Component {...pageProps} />
          <Toast />
      </Provider>
}

export default reduxWrapper.withRedux(withReduxSaga(MyApp));
