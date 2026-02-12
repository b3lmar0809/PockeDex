import type {ButtonHTMLAttributes, ReactNode} from "react";

type ButtonAtomProp = {
    className?: string;
    children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function ButtomAtom({ className, children, ...props}: ButtonAtomProp) {
    return(
        <button className={className} {...props}>
            {children}
        </button>
    )
}
export default ButtomAtom;