import fs from 'fs';
import path from 'path';
import styles from './fuel-monitoring.css'
; // Import the CSS module
const FuelMonitoringPage = () => {
  // Get the directory where the images are located
  const imagesDirectory = path.join(process.cwd(), 'public');

  // Read the files in the directory
  const fileNames = fs.readdirSync(imagesDirectory);

  // Filter the files to include only images and exclude those starting with 'Logo'
  const imageFiles = fileNames.filter((file) => {
    const extname = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(extname) && !file.startsWith('Logo');
  });

  return (
    <div className={styles.fuelMonitoringContainer}>
      <h1 className={styles.fuelMonitoringTitle}>Fuel Monitoring</h1>
      <div className={styles.responsiveImageGrid}>
        {imageFiles.map((image, index) => {
          const imageName = path.basename(image, path.extname(image)); // Remove the extension
          return (
            <div key={index} className={styles.imageItem}>
              <img
                src={`/${image}`} // The path to the image in the public directory
                alt={imageName} 
                className={styles.responsiveImage}
              />
              <p className={styles.imageName}>{imageName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FuelMonitoringPage;







