import { ChangeEvent, useState } from "react";
import styles from './App.module.scss';
import CurrencyInput from './CurrencyInput';

function App() {
    const [rubValue, setRubValue] = useState<string>('10000');
    const [usdtValue, setUsdtValue] = useState<string>('100');


    const handleRubInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, '');
        setRubValue(inputValue);
    };

    const handleUsdtInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value.replace(/[^0-9]/g, '');
        setUsdtValue(inputValue);
    };

    return (
        <div className={styles.container}>
            <div className={styles.inputsWrapper}>
                <CurrencyInput
                    currency="RUB"
                    value={rubValue}
                    onChange={handleRubInputChange}
                />
                <CurrencyInput
                    currency="USDT"
                    value={usdtValue}
                    onChange={handleUsdtInputChange}
                />
            </div>
        </div>
    );
}

export default App;