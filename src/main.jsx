import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './toolkit/store.jsx';
import { Toaster } from 'react-hot-toast';
import ErrorBoundary from './ErrorBoundary.jsx';
import { createRoot } from "react-dom/client";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const stripePromise = loadStripe('pk_test_51PUpYhIHfGUjY2IseEf4j2MfiX2Kfu3tncGKT2tmxuWv5wDKDeYijbjM0ePvbpa6K0CdwizV83FO6oGINjECmyxE00tH6lqM1G');
root.render(
    <Provider store={store}>
        <ErrorBoundary>
        <Elements stripe={stripePromise}>
            <App />
            </Elements>,
        </ErrorBoundary>
        <Toaster />
    </Provider>
);
