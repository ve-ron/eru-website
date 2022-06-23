import { useLocation } from "react-router-dom";

export const withState = (Component) => {
    const Wrapper = (props) => {
        const { state } = useLocation();
        console.log(state)
        return (
            <Component state={state}
            {...props}
            />
        )
    };
    return Wrapper;
}