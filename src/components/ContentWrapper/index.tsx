import { ReactNode } from 'react';
import styles from './styles.module.scss'

type ContentWrapperProps = {
    children: ReactNode;
}

export function ContentWrapper({ children }: ContentWrapperProps) {
    return <div className={styles.contentContainer}>{children}</div>;
}