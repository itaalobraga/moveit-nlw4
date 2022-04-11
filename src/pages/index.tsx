import { CompletedChallenges } from '../components/CompletedChallenges';
import { Container } from '../components/Container';
import { ContentWrapper } from '../components/ContentWrapper';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountDownContextProvider } from '../contexts/CountdownContext';

export default function Home() {
    return (
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
    );
}
