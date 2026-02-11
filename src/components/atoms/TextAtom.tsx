import type {JSX, ReactNode} from "react";

//definiendo el tipo de props que va a recibir el conponente
type TextAtomProps = {
    children: ReactNode;
    variant?: keyof  JSX.IntrinsicElements; //'p', 'h1', 'span'
    className?: string;
};

function TextAtom({children, variant = 'p', className}: TextAtomProps){
    const Tag = variant;
    return <Tag className={className}>{children}</Tag>
}

export default TextAtom;