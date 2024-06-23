/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import CurrencyAPI from '@everapi/currencyapi-js';
import { useDispatch, useSelector } from 'react-redux';
import { addToExchange, selectExchangeRate, RemoveFromExchange } from '../../toolkit/Slices/CompareSlice';
import Select from 'react-select'
const CurencyConverter = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const currencyApi = new CurrencyAPI('cur_live_zo3SNsyrE33qwfyIRATycSlvKygALqHT97nNiEtj');
        const fetchLatestRates = async () => {
            try {
                if (selectedCurrency === 'USD') {
                    dispatch(RemoveFromExchange());
                } else {
                    const response = await currencyApi.latest({
                        base_currency: 'USD',
                        currencies: selectedCurrency.trim()
                    });
                    console.log(response?.data[selectedCurrency]);
                    dispatch(addToExchange(response?.data[selectedCurrency]))
                }

            } catch (error) {
                console.error('Error fetching latest rates:', error);
            }
        };

        if (selectedCurrency) {
            fetchLatestRates();
        }

    }, [selectedCurrency]);

    const handleCurrencyChange = (e) => {
        setSelectedCurrency(e.target.value);
    };

    return (
        <div>
            <form id="latest_rates_form" >
                <select
                    id="target_currency"
                    name="target_currency"
                    value={selectedCurrency}
                    onChange={handleCurrencyChange}

                    className="font-bold   border bg-gray-100 text-sm  rounded-full py-[7px] p-2  hover:cursor-pointer  "
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="CAD">CAD</option>
                    <option value="PKR">PKR</option>
                    <option value="INR">INR</option>
                </select>
            </form>
        </div>
    );
}

export default CurencyConverter;
