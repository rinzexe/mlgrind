import SyntaxHighlighter from "react-syntax-highlighter";

export default function Code({ children }: { children: React.ReactNode }) {
    return (
        <SyntaxHighlighter wrapLines showLineNumbers codeTagProps={{ className: 'text-shadow-none' }} customStyle={{ background: 'none', textShadow: 'none', color: 'white' }} >
            {children?.toString() || ""}
        </SyntaxHighlighter>
    )
}