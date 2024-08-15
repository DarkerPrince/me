import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import {pdfjs} from 'react-pdf'
import resume from '../../assets/resume/resume.pdf'
import resume2 from '../../assets/resume/resume2.pdf'

import {GoCloudDownload} from 'react-icons/go'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ResumeShowPage() {
  
  
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const downloadResumePDF = () => {
    fetch(resume).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'LuelSisay-resume.pdf';
            alink.click();
        })
    });
  }





  function onDocumentLoadSuccess({ numPages }) {
    setPageNumber(numPages)
    setNumPages(numPages);
  }
  console.log("Here are some difficulties on the page of the temps " , numPages)

  return (
    <div>
        <div onClick={downloadResumePDF} className='animate-bounce fixed flex right-12 bottom-12 h-16 w-16 items-center justify-center rounded-full bg-leulePrime z-30'>
        <GoCloudDownload className='text-2xl text-white'/>
        </div>
    <div className='flex h-full items-center justify-center '>
      <Document file={resume2} options={{workerSrc: "pdf.worker.js"}}  onLoadSuccess={onDocumentLoadSuccess} className = "h-[2430px] overflow-hidden" onLoadError={console.error}>
         <Page  scale={2} pageNumber={pageNumber} renderTextLayer={false}  renderMode="canva" className=""/>
      </Document>
    </div>
    </div>
  );
}