import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set PDF.js worker URL
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    return (
        <div>
            <Document
                file="/example.pdf" // Replace with your PDF file path or URL
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <div>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <button onClick={() => setPageNumber(pageNumber - 1)}>Previous</button>
                <button onClick={() => setPageNumber(pageNumber + 1)}>Next</button>
            </div>
        </div>
    );
};

export default PdfViewer;
