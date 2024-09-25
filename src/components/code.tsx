import SyntaxHighlighter from "react-syntax-highlighter";

export default function Code({children}: any) {
    return(
        <SyntaxHighlighter wrapLines showLineNumbers codeTagProps={{ className: 'text-shadow-none' }} customStyle={{ background: 'none', textShadow: 'none', color: 'white' }} >
        {children}
    </SyntaxHighlighter>
    )
}