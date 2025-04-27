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

  // Define a map of image names to their details
  const deviceDetails = {
    FMC125: {
      name: 'FMC125',
      features: [
        'Fuel monitoring and more',
        'Significantly lower roaming costs',
        'Accurate fuel usage control',
      ],
    },
    TAT140: {
      name: 'TAT140',
      features: [
        'Periodic location reports',
        'Backup tracking the easy way',
        'Extendable battery life',
      ],
    },
    GH5200: {
      name: 'GH5200',
      features: [
        'Two-way voice communication',
        'Programmable buttons',
        'Alarm button',
      ],
    },
    FTC921: {
      name: 'FTC921',
      features: [
        'FT platform device',
        'High voltage power supply',
        'Longer performance, slower drainage',
      ],
    },
    FTC961: {
      name: 'FTC961',
      features: [
        'FT platform device',
        'IP69K waterproof casing',
        'High voltage power supply',
      ],
    },
    FTC881: {
      name: 'FTC881',
      features: [
        'FT platform device',
        'Fast installation',
        'High voltage power supply',
      ],
    },
    FMC920: {
      name: 'FMC920',
      features: [
        'Eco driving scenario for all-round better driving',
        'Slim design to fit the tightest spaces',
        'Extensive remote monitoring possibilities',
      ],
    },
    FMC650: {
      name: 'FMC650',
      features: [
        'Reliable global coverage and separate GNSS module',
        'Remote download of Tachograph files and live data',
        'CAN data reading from heavy vehicles and special machinery',
      ],
    },
    FMM250: {
      name: 'FMM250',
      features: [
        'Protection against dust and water',
        'Built-in CAN bus data reading chip',
        'CAN data reading from EVs',
      ],
    },
  };

  return (
    <div className={styles.fuelMonitoringContainer}>
      <h1 className={styles.fuelMonitoringTitle}>Fuel Monitoring</h1>
      <div className={styles.responsiveImageGrid}>
        {imageFiles.map((image, index) => {
          const imageName = path.basename(image, path.extname(image)).toUpperCase(); // Remove extension and capitalize
          const details = deviceDetails[imageName];

          return (
            <div key={index} className={styles.imageItem}>
              <img
                src={`/${image}`}
                alt={imageName}
                className={styles.responsiveImage}
              />
              <p className={styles.imageName}>{details?.name || imageName}</p> {/* Use the capitalized name from details or fallback */}
              <ul className={styles.descriptionList}>
                {details?.features?.map((feature, idx) => (
                  <li key={idx} className={styles.descriptionItem}>
                    {feature}
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