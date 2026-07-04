import styles from "./Status.module.css";
import { useAstra } from "../../context/AstraContext";
import { OrbState } from "../../types/OrbState";
import { getStatusText } from "../../utils/stateText";

const Status = () => {
    const { orbState } = useAstra();

    return (
        <div className={styles.status}>
            <h2>ASTRA</h2>

            <p>{getStatusText(orbState)}</p>
        </div>
    );
};

export default Status;