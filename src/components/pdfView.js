import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFView = ({ url }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
      {/* <h2>{JSON.stringify(url)}</h2> */}
      <Viewer
        fileUrl="https://firebasestorage.googleapis.com/v0/b/auth-double-slash.appspot.com/o/vishwajitds182%40gmail.com%2FTest%20Assi%201.pdf?alt=media&token=78347c7a-ed30-4f61-850e-38d8ff794dd9"
        plugins={[
          // Register plugins
          defaultLayoutPluginInstance,
        ]}
      />
    </Worker>
  );
};

export default PDFView;

// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";

// function PDFView(props) {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   return (
//     <div>
//       <h2>{props.url}</h2>
//       <Document file={props.url} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }

// export default PDFView;
