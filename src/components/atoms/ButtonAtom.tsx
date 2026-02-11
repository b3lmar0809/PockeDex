import type {ButtonHTMLAttributes} from "react";

type ButtonAtomProp = {
    text: string;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function ButtomAtom({text, className, ...props}: ButtonAtomProp) {
    return(
        <button className={className} {...props}>
            {text}
        </button>
    )
}
export default ButtomAtom;