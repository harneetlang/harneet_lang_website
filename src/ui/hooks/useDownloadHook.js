import {useState, useCallback}  from "react"
const useDownloadFile = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(null);

  const downloadFile = useCallback(async (filePath, fileName) => {
    setIsDownloading(true);
    setError(null);

    try {
      // Extract filename from path if not provided
      const finalFileName = fileName || filePath.split('/').pop();

      // Fetch the file
      const response = await fetch(filePath);
      
      if (!response.ok) {
        throw new Error(`Failed to download file: ${response.statusText}`);
      }

      const blob = await response.blob();
      
      // Create blob URL
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create temporary anchor and trigger download
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = finalFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up blob URL
      window.URL.revokeObjectURL(blobUrl);
      
      setIsDownloading(false);
      return true;
    } catch (err) {
      setError(err.message);
      setIsDownloading(false);
      console.error('Download failed:', err);
      return false;
    }
  }, []);

  return { downloadFile, isDownloading, error };
};

export default useDownloadFile
