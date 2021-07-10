import React from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";

// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Create new plugin instance
const PDFView = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
      <Viewer
        fileUrl="https://firebasestorage.googleapis.com/v0/b/auth-double-slash.appspot.com/o/vishwajitds182%40gmail.com%2FassiXd.pdf?alt=media&token=04b2f0a1-f99e-43d9-b3df-9e2411523813"
        plugins={[
          // Register plugins
          defaultLayoutPluginInstance,
        ]}
      />
    </Worker>
  );
};

export default PDFView;
