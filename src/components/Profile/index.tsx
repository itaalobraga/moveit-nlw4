import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./styles.module.scss";

type ProfileProps = {}

export const Profile = (props: ProfileProps) => {
    const { level } = useContext(ChallengesContext)

  return (
      <div className={styles.profileContainer} >
          <img src="./images/profilePic.jpeg" alt="Diego Fernades" />
          <div>
              <strong>Ítalo Braga</strong>
              <p>
                  <img src="./images/Up.svg" />
                  Level {level}
              </p>
          </div>
      </div>
  );
}