import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Container } from '../components/Container';
import { ContentWrapper } from '../components/ContentWrapper';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';

import { CountDownContextProvider } from '../contexts/CountdownContext';
import { ChallengesContextProvider } from '../contexts/ChallengesContext';

type HomeProps = {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Home({ level, currentExperience, challengesCompleted} : HomeProps) {

    return (
        <ChallengesContextProvider level={level} currentExperience={currentExperience} challengesCompleted={challengesCompleted}>
        <Container>
            <Head>
                <title>Início | Moveit</title>
            </Head>
            <ExperienceBar />
            <CountDownContextProvider>
                <ContentWrapper>
                    <div>
                        <Profile />
                        <CompletedChallenges />
                        <Countdown />
                    </div>
                    <div>
                        <ChallengeBox />
                    </div>
                </ContentWrapper>
            </CountDownContextProvider>
        </Container>
        </ ChallengesContextProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { level, currentExperience, challengesCompleted } = context.req.cookies

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
        },
    };
};
