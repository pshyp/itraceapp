import fs from 'fs';
import path from 'path';
import styles from './fuel-monitoring.module.css'; // Import the CSS module

const FuelMonitoringPage = () => {
  const imagesDirectory = path.join(process.cwd(), 'public');
  const fileNames = fs.readdirSync(imagesDirectory);

  const imageFiles = fileNames.filter((file) => {
    const extname = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(extname) && !file.startsWith('Logo');
  });

  // Define a map of image names to their descriptions
  const descriptions = {
    FTC921: [
      'FT platform device',
      'High voltage power supply',
      'Longer performance, slower drainage',
    ],
    FTC961: [
      'FT platform device',
      'IP69K waterproof casing',
      'High voltage power supply',
    ],
    FTC881: [
      'FT platform device',
      'Fast installation',
      'High voltage power supply',
    ],
    FMC920: [
      'Eco driving scenario for all-round better driving',
      'Slim design to fit the tightest spaces',
      'Extensive remote monitoring possibilities',
    ],
    FMC650: [
      'Reliable global coverage and separate GNSS module',
      'Remote download of Tachograph files and live data',
      'CAN data reading from heavy vehicles and special machinery',
    ],
    FMM250: [
      'Protection against dust and water',
      'Built-in CAN bus data reading chip',
      'CAN data reading from EVs',
    ],
  };

  return (
    <div className={styles.fuelMonitoringContainer}>
      <h1 className={styles.fuelMonitoringTitle}>Fuel Monitoring</h1>
      <div className={styles.responsiveImageGrid}>
        {imageFiles.map((image, index) => {
          const imageName = path.basename(image, path.extname(image)); // Remove the extension
          const descriptionLines = descriptions[imageName] || []; // Fetch the description if available
          return (
            <div key={index} className={styles.imageItem}>
              <img
                src={`/${image}`}
                alt={imageName}
                className={styles.responsiveImage}
              />
              <p className={styles.imageName}>{imageName}</p>
              <ul className={styles.descriptionList}>
                {descriptionLines.map((line, idx) => (
                  <li key={idx} className={styles.descriptionItem}>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FuelMonitoringPage;
