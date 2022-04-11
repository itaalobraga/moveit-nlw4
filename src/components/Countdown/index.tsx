import { useContext } from 'react';
import { CountDownContext } from '../../contexts/CountdownContext';

import styles from './styles.module.scss';

let timer: NodeJS.Timer;

export function Countdown() {
    const { minutes, seconds, hasFinished, isActive, startCountDown, stopCountDown } = useContext(CountDownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
        <>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button disabled className={styles.countDownButton} type="button">
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                            type="button"
                            onClick={stopCountDown}
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button
                            className={styles.countDownButton}
                            type="button"
                            onClick={startCountDown}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}
        </>
    );
}
