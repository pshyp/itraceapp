"use client";


import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


import ftc921 from "../public/FTC921.png";
import ftc961 from "../public/FTC961.png";
import fmc920 from "../public/fmc920.webp";
import fmc650 from "../public/fmc650.webp";
import fmm250 from "../public/fmm250.webp";
import twoWay from "../public/two_way_alarm.png";
import keyless from "../public/keyless_entry.png";
import remote from "../public/remote_start.png";
import shock from "../public/shock_sensor.png";
import glass from "../public/glass_break_sensor.png";


// New Asset Tracking Images
import gpsAccessory from "../public/gps-accessory-kit.png";
import gpsTracker from "../public/gps-tracker.png";
import outdoorNav from "../public/outdoor-navigator.png";
import portableNav from "../public/portable-navigator.png";
import smartphoneMount from "../public/smartphone-mount.png";


// New Images
import carStereo from "../public/Car_stereo.png";
import carSpeaker from "../public/car_speaker.png";
import amplifier from "../public/Amplifier.png";
import subwoofer from "../public/Subwoofer.png";
import multimediaReceiver from "../public/multimedia_receivers.png";
import backupCamera from "../public/backupcamera.png";


import autolocksmithImage from "../public/Logo.png"; // Placeholder image
import mc202x from "../public/MC202X.png";
import mc402 from "../public/MC402_1080P_4CH_AI_DashCam.png";
import mc904 from "../public/mc904_1080p_4ch_sd_mdvr.png";
import mc908 from "../public/mc908_8ChannelRecorder.png";
import mc912 from "../public/mdvrMc912_12ch1080p.png";


import trafficReceiver from "../public/traffic-receiver.png";


import emergencyLock from "../public/emergency_lock.png";
import keyCutting from "../public/key_cutting.png";
import transponder from "../public/Transponder.png";
import ignition from "../public/ignition.png";


import "./globals.css";


export default function Home() {
 const monitors = [fmm250, ftc921, ftc961];
 const fuelMonitorBenefits = [
   { image: fmm250, title: "Precise Level Reading", subtitle: "Accurate fuel data in real-time" },
   { image: fmc650, title: "Fuel Consumption Monitoring", subtitle: "Track fuel usage efficiently" },
   { image: fmc920, title: "Anti-Fuel Siphoning", subtitle: "Protect against fuel theft" },
   { image: ftc921, title: "Robust Fleet Tracking", subtitle: "Reliable tracking with high voltage support" },
   { image: ftc961, title: "Heavy-Duty Tracking", subtitle: "Waterproof and rugged design" },
 ];


 const alarmSystems = [
   { image: twoWay, title: "Two-Way Alarm", subtitle: "Real-time communication" },
   { image: keyless, title: "Keyless Entry", subtitle: "Advanced access protection" },
   { image: remote, title: "Remote Start", subtitle: "Convenient engine control" },
   { image: shock, title: "Shock Sensors", subtitle: "Impact detection" },
   { image: glass, title: "Glass Break", subtitle: "Window security" },
 ];


 const assetTracking = [
   { image: gpsTracker, title: "GPS Tracker", subtitle: "Real-time asset location updates" },
   { image: gpsAccessory, title: "Accessory Kit", subtitle: "Mounts and wiring for GPS units" },
   { image: outdoorNav, title: "Outdoor Navigator", subtitle: "Rugged GPS for tough environments" },
   { image: portableNav, title: "Portable Navigator", subtitle: "Flexible tracking on the go" },
   { image: smartphoneMount, title: "Smartphone Mount", subtitle: "Device integration made easy" },
   { image: trafficReceiver, title: "Traffic Receiver", subtitle: "Live road condition updates" },
 ];


 const vehicleAudioMultimedia = [
   { image: carStereo, title: 'Car Stereos', subtitle: 'Upgrade Your In-Car Audio Hub' },
   { image: carSpeaker, title: 'Car Speakers', subtitle: 'Replace for Clearer, More Detailed Sound' },
   { image: amplifier, title: 'Amplifiers', subtitle: 'Enhance Your Sound System\'s Performance' },
   { image: subwoofer, title: 'Subwoofers', subtitle: 'Add Deep, Heart-Pounding Low-End' },
   { image: multimediaReceiver, title: 'Multimedia Receivers', subtitle: 'Large Touchscreen Displays and Compatibility' },
   { image: backupCamera, title: 'Backup Cameras', subtitle: 'Improve Safety and Driving Experience' },
 ];


 const autolocksmithImages = [
   { src: emergencyLock, alt: 'Emergency lock services' },
   { src: keyCutting, alt: 'Key cutting services' },
   { src: transponder, alt: 'Transponder key programming' },
   { src: ignition, alt: 'Ignition repair and replacement' },
 ];


 const aiDashcamsMdvr = [
   {
image: "/MC201.png",
title: 'MC201 2K AI 2CH DashCam',
     subtitle: 'Advanced Dual-Channel AI Dashcam',
   },
   {
     image: mc202x,
     title: 'MC202X 1080P 2CH AI Dash Cam',
     subtitle: 'Compact Dual-Camera AI Solution',
   },
   {
     image: mc402,
     title: 'MC402 1080P 4CH AI Dash Cam',
     subtitle: 'Comprehensive Quad-Channel AI Recording',
   },
   {
     image: mc904,
     title: 'MC904 1080P 4CH SD card MDVR',
     subtitle: 'Reliable 4-Channel SD Card MDVR',
   },
   {
     image: mc908,
     title: 'MC908 1080P 8CH MDVR',
     subtitle: 'Expandable 8-Channel MDVR System',
   },
   {
     image: mc912,
     title: 'MC912 1080P 12CH MDVR',
     subtitle: 'High-Capacity 12-Channel Full HD MDVR',
   },
 ];
 const [monitorIndex, setMonitorIndex] = useState(0);
 const [alarmIndex, setAlarmIndex] = useState(0);
 const [fuelBenefitIndex, setFuelBenefitIndex] = useState(0);
 const [assetIndex, setAssetIndex] = useState(0);
 const [vehicleAudioIndex, setVehicleAudioIndex] = useState(0);


 useEffect(() => {
   const monitorInterval = setInterval(() => {
     setMonitorIndex((prev) => (prev + 1) % monitors.length);
   }, 3000);
   return () => clearInterval(monitorInterval);
 }, []);


 useEffect(() => {
   const alarmInterval = setInterval(() => {
     setAlarmIndex((prev) => (prev + 1) % alarmSystems.length);
   }, 3000);
   return () => clearInterval(alarmInterval);
 }, []);


 useEffect(() => {
   const fuelInterval = setInterval(() => {
     setFuelBenefitIndex((prev) => (prev + 1) % fuelMonitorBenefits.length);
   }, 3000);
   return () => clearInterval(fuelInterval);
 }, []);


 useEffect(() => {
   const vehicleAudioInterval = setInterval(() => {
     setVehicleAudioIndex((prev) => (prev + 1) % vehicleAudioMultimedia.length);
   }, 3000);
   return () => clearInterval(vehicleAudioInterval);
 }, []);


 useEffect(() => {
   const assetInterval = setInterval(() => {
     setAssetIndex((prev) => (prev + 1) % assetTracking.length);
   }, 3000);
   return () => clearInterval(assetInterval);
 }, []);


 const [aiDashcamsMdvrIndex, setAiDashcamsMdvrIndex] = useState(0);
 useEffect(() => {
   const aiDashcamsMdvrInterval = setInterval(() => {
     setAiDashcamsMdvrIndex((prev) => (prev + 1) % aiDashcamsMdvr.length);
   }, 3000);
 }, []);


 return (
   <main className="main-content no-padding">
     {/* Fuel Monitors Section */}
     <section className="section-block">
       <h2 className="product-title">Fuel Monitors</h2>
       <p className="product-subtitle">{fuelMonitorBenefits[fuelBenefitIndex].subtitle}</p>
       <div className="image-wrapper">
         <Image
           src={fuelMonitorBenefits[fuelBenefitIndex].image}
           alt={fuelMonitorBenefits[fuelBenefitIndex].title}
           fill
           className="monitor-image"
           priority
         />
       </div>
       <div className="button-group">
         <Link href="/fuel-monitoring">
           <button className="primary-button">Learn more</button>
         </Link>
       </div>
     </section>


     {/* Alarm Systems Section */}
     <section className="section-block">
       <h2 className="product-title">Alarm Systems</h2>
       <p className="product-subtitle">{alarmSystems[alarmIndex].subtitle}</p>
       <div className="image-wrapper">
         <Image
           src={alarmSystems[alarmIndex].image}
           alt={alarmSystems[alarmIndex].title}
           fill
           className="monitor-image"
           priority
         />
       </div>
       <div className="button-group">
         <Link href="/alarm-systems">
           <button className="primary-button">Learn more</button>
         </Link>
       </div>
     </section>


     {/* Asset Tracking Section */}
     <section className="section-block">
       <h2 className="product-title">Asset Tracking</h2>
       <p className="product-subtitle">{assetTracking[assetIndex].subtitle}</p>
       <div className="image-wrapper">
         <Image
           src={assetTracking[assetIndex].image}
           alt={assetTracking[assetIndex].title}
           fill
           className="monitor-image"
           priority
         />
       </div>
       <div className="button-group">
         <Link href="/asset-tracking">
           <button className="primary-button">Learn more</button>
         </Link>
       </div>
     </section>


     {/* Vehicle Audio & Multimedia Systems Section */}
     <section className="section-block">
       <h2 className="product-title">Vehicle Audio & Multimedia Systems</h2>
       <p className="product-subtitle">{vehicleAudioMultimedia[vehicleAudioIndex].subtitle}</p>
       <div className="image-wrapper">
         <Image
           src={vehicleAudioMultimedia[vehicleAudioIndex].image}
           alt={vehicleAudioMultimedia[vehicleAudioIndex].title}
           fill
           className="monitor-image"
           priority
         />
       </div>
       <div className="button-group">
         <Link href="/vehicle-audio-multimedia">
           <button className="primary-button">Learn more</button>
         </Link>
       </div>
     </section>


     {/* Autolocksmith Services Section */}
     <section className="section-block">
       <h2 className="product-title">Autolocksmith Services</h2>
       <p className="product-subtitle">Placeholder subtitle for Autolocksmith Services</p>
       <div className="autolocksmith-image-gallery">
{autolocksmithImages.map((img, index) => (
<div key={index} className="image-wrapper">
<Image
src={img.src}
alt={img.alt}
fill
className="monitor-image"
           />
</div>
))}
       </div>
       <div className="button-group">
         <Link href="/autolocksmith-services">
           <button className="primary-button">Learn more</button>
         </Link>
       </div>
     </section>


     {/* AI Dashcams and MDVR Solutions Section */}
     <section className="section-block">
       <h2 className="product-title">AI Dashcams and MDVR Solutions</h2>
       <p className="product-subtitle">{aiDashcamsMdvr[aiDashcamsMdvrIndex].subtitle}</p>
       <div className="image-wrapper">
         <Image
           src={aiDashcamsMdvr[aiDashcamsMdvrIndex].image}
           alt={aiDashcamsMdvr[aiDashcamsMdvrIndex].title}
           fill
           className="monitor-image"
           priority
         />
       </div>
       <div className="button-group">
         <Link href="/ai-dashcams-mdvr">
           <button className="primary-button">Learn more</button>
         </Link>
       </div>
     </section>
   </main>
 );
}



a