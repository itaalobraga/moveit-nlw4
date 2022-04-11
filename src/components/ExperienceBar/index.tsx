import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from './styles.module.scss';

type ExperienceBarProps = {};

export const ExperienceBar = (props: ExperienceBarProps) => {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <div className={styles.experienceBarContainer}>
            <span>0 xp</span>
            <div>
                <div style={{width: `${percentToNextLevel}%`}} />
                <span style={{left: `${percentToNextLevel}%`}}> {currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </div>
    );
};
