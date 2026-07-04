import styles from "./Scene.module.css";

interface SceneProps {
    children: React.ReactNode;
}

const Scene = ({ children }: SceneProps) => {
    return (
        <main className={styles.scene}>
            {children}
        </main>
    );
};

export default Scene;