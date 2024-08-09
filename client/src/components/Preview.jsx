import React from 'react';
import DOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown';
const Preview = ({ code }) => {
    // Sanitize HTML code to prevent XSS attacks

    return (
        <div className="preview-container">
            <h2 className="text-xl font-semibold mb-2">Preview</h2>
            <ReactMarkdown>{code}</ReactMarkdown>
        </div>
    );
};

export default Preview;
