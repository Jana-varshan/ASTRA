import { OrbState } from "../types/OrbState";

export const getStatusText = (state: OrbState): string => {
    switch (state) {
        case OrbState.IDLE:
            return "System Online";

        case OrbState.LISTENING:
            return "Listening...";

        case OrbState.THINKING:
            return "Thinking...";

        case OrbState.SPEAKING:
            return "Speaking...";

        case OrbState.SUCCESS:
            return "Task Complete";

        case OrbState.ERROR:
            return "System Error";

        case OrbState.SLEEP:
            return "Sleeping";

        default:
            return "Unknown";
    }
};