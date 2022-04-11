import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountDownContext } from '../../contexts/CountdownContext';
import styles from './styles.module.scss';


export function ChallengeBox() {
    const { activeChallenge, completeChallenge, resetChallenge } = useContext(ChallengesContext);
    const { stopCountDown } = useContext(CountDownContext)

    function handleChallengeSucceeded() {
        completeChallenge();
        stopCountDown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        stopCountDown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeBoxActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img
                            src={
                                activeChallenge.type === 'eye'
                                    ? '/images/Eye.svg'
                                    : '/images/Peso.png'
                            }
                            alt="Peso"
                        />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                            onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeBoxNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="/images/Icon.svg" alt="Seta" />
                        Avance de level complentando os desafios.
                    </p>
                </div>
            )}
        </div>
    );
}
