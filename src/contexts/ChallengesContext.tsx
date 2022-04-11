import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json'

type ChallengesContextProviderProps = {
    children: ReactNode;
};

type ChallengesContextProps = {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: {
        type: string;
        description: string;
        amount: number;
    };
    experienceToNextLevel: number;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
};

export const ChallengesContext = createContext<ChallengesContextProps>(
    {} as ChallengesContextProps
);

export function ChallengesContextProvider({ children }: ChallengesContextProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];

        new Audio('/notification.mp3').play();

        setActiveChallenge(challenge);

    }

    function resetChallenge() {
        setActiveChallenge(null)
        
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;
        
        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();

        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1);
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                activeChallenge,
                experienceToNextLevel,
                startNewChallenge,
                resetChallenge,
                completeChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}
