<<<<<<< HEAD
// /* eslint-disable react/no-deprecated */
// import { createRoot } from 'react-dom';
// import App from './App.jsx';
// import { Provider } from 'react-redux';
// import store from './toolkit/store.jsx';
// // import { Toaster } from 'react-hot-toast';

// // Use createRoot instead of ReactDOM.render
// createRoot(document.getElementById('root')).render(
//     <Provider store={store}>
//         <App />
//         {/* <Toaster /> */}
//     </Provider>
// );
import ReactDOM from 'react-dom';
=======
/* eslint-disable react/no-deprecated */
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import { Provider } from 'react-redux';
// import store from './toolkit/store.jsx';
// import { Toaster } from 'react-hot-toast';

// createRoot(document.getElementById('root')).render(
//     <Provider store={store}>
//         <App />
//         <Toaster />
//     </Provider>
// );


>>>>>>> af7d35543d77f829d5cc9fb26b6d61c262d635b0
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './toolkit/store.jsx';
import { Toaster } from 'react-hot-toast';
<<<<<<< HEAD
import ErrorBoundary from './ErrorBoundary.jsx'
ReactDOM.render(
    <Provider store={store}>
          <ErrorBoundary>
        <App />
        </ErrorBoundary>
        <Toaster />
    </Provider>,
    document.getElementById('root')
=======
import ErrorBoundary from './ErrorBoundary.jsx';
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
        <Toaster />
    </Provider>
>>>>>>> af7d35543d77f829d5cc9fb26b6d61c262d635b0
);
