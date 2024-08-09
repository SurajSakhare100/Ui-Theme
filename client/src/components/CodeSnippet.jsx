import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darkula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
const CodeSnippet = ({ language, code }) => {
    return (
        <SyntaxHighlighter language={language} style={darkula}>
            {code}
        </SyntaxHighlighter>
    );
};

export default CodeSnippet;
