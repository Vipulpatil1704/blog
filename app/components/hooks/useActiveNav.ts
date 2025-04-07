import {useContext} from "react"
import {ActiveNavContext} from "../contexts/ActiveNavContext"

export const useActiveNav = () => {
    const context = useContext(ActiveNavContext);
    if (!context) {
        throw new Error("useActiveNav must be used within an ActiveNavProvider");
    }
    return context;

}