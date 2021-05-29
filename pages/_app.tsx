import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import '../styles/globals.css'
import { reduxConfig, reduxWrapper } from "../src/Store/store"
const { store, persistor } = reduxConfig();
import withReduxSaga from "next-redux-saga"

function MyApp({ Component, pageProps }) {
  return  <PersistGate loading={null} persistor={persistor}>
         <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
        </PersistGate>
}

export default reduxWrapper.withRedux(withReduxSaga(MyApp));
