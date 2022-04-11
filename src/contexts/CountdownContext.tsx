import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

type CountDownContextProviderProps = {
    children: ReactNode;
}

type CountDownContextProps = {
    isActive: boolean;
    hasFinished: boolean;
    minutes: number;
    seconds: number;
    startCountDown: () => void;
    stopCountDown: () => void;
};

let timer: NodeJS.Timer

export const CountDownContext = createContext({} as CountDownContextProps);

export function CountDownContextProvider({ children } : CountDownContextProviderProps) {
    // 20 x 60 representa 20 minutos em segundos.
    const [time, setTime] = useState(0.1 * 60);

    // Determina se o countdown está ativo ou não.
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    // "Math.floor" faz o arrendondamento de um número.
    //  Aqui eu pego os segundos e divido por 60, que vai resultar nos minutos.
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const { startNewChallenge } = useContext(ChallengesContext);

    function startCountDown() {
        setIsActive(true);
    }

    function stopCountDown() {
        setIsActive(false);
        clearTimeout(timer);
        setTime(0.1 * 60);
        setHasFinished(false);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            timer = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setIsActive(false);
            setHasFinished(true);
            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <CountDownContext.Provider
            value={{ isActive, hasFinished, minutes, seconds, startCountDown, stopCountDown}}
        >
            {children}
        </CountDownContext.Provider>
    );
}