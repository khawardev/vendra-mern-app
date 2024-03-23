/* eslint-disable react/no-deprecated */
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './toolkit/store.jsx';
import { Toaster } from 'react-hot-toast';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
        <Toaster />
    </Provider>
);