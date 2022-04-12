import styles from './styles.module.scss';

import { GrClose } from 'react-icons/gr';

import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

export function LevelUpModal() {
    const { handleLevelUpModalClose } = useContext(ChallengesContext)

    return (
        <div className={styles.levelUpModalOverlay}>
            <div className={styles.levelUpModalContainer}>
                <div>
                    <strong>2</strong>
                </div>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>
                <GrClose
                    style={{
                        position: 'absolute',
                        right: '1.5rem',
                        top: '1.5rem',
                        color: 'var(--text)',
                        cursor: 'pointer'
                    }}
                    onClick={handleLevelUpModalClose}
                />
            </div>
        </div>
    );
}
