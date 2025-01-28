import { ChangeEvent, useRef } from "react";
import styles from './CurrencyInput.module.scss';

const digitWidths: { [key: string]: number } = {
    '1': 23,
    '0': 29, '2': 29, '3': 29, '4': 29,
    '5': 29, '6': 29, '7': 29, '8': 29, '9': 29,
};

interface CurrencyInputProps {
    currency: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CurrencyInput = ({ currency, value, onChange }: CurrencyInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleContainerClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const calculateWidth = (text: string): number => {
        return text.split('').reduce((totalWidth, char) => totalWidth + (digitWidths[char] || 0), 0);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container} onClick={handleContainerClick}>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    className={styles.input}
                    style={{ width: `${calculateWidth(value)}px` }}
                    ref={inputRef}
                />
                <span className={styles.currency}>{currency}</span>
            </div>
            <div className={styles.progressBar}>
                <div className={`${styles.progressBarItem} ${styles.active}`}>
                    <span className={styles.text}>25%</span>
                </div>
                <div className={styles.progressBarItem}>
                    <span className={styles.text}>50%</span>
                </div>
                <div className={styles.progressBarItem}>
                    <span className={styles.text}>75%</span>
                </div>
                <div className={styles.progressBarItem}>
                    <span className={styles.text}>100%</span>
                </div>
            </div>
        </div>
    );
};

export default CurrencyInput;