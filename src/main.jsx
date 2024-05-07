/* eslint-disable react/no-deprecated */
import { createRoot } from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './toolkit/store.jsx';
// import { Toaster } from 'react-hot-toast';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
        {/* <Toaster /> */}
    </Provider>
);
// import ReactDOM from 'react-dom';
// import App from './App.jsx';
// import { Provider } from 'react-redux';
// import store from './toolkit/store.jsx';
// import { Toaster } from 'react-hot-toast';
// import ErrorBoundary from './ErrorBoundary.jsx'
// ReactDOM.render(
//     <Provider store={store}>
//           <ErrorBoundary>
//         <App />
//         </ErrorBoundary>
//         <Toaster />
//     </Provider>,
//     document.getElementById('root')
// );
