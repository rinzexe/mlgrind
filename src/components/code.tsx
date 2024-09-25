import SyntaxHighlighter from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Code({children}: any) {
    return(
        <SyntaxHighlighter wrapLines showLineNumbers codeTagProps={{ className: 'text-shadow-none' }} customStyle={{ background: 'none', textShadow: 'none', color: 'white' }} >
        {children}
    </SyntaxHighlighter>
    )
}