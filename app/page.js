/* app/page.js ------------------------------------------------------------ */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useScrollReveal from "./hooks/useScrollReveal";

/* ------------------------------------------------------------------ */
/*  1.  ── ALL YOUR STATIC IMAGE IMPORTS (unchanged)                  */
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

/*  Asset‑tracking images */
import gpsAccessory from "../public/gps-accessory-kit.png";
import gpsTracker from "../public/gps-tracker.png";
import outdoorNav from "../public/outdoor-navigator.png";
import portableNav from "../public/portable-navigator.png";
import smartphoneMount from "../public/smartphone-mount.png";
import trafficReceiver from "../public/traffic-receiver.png";

/*  Vehicle‑audio images */
import carStereo from "../public/Car_stereo.png";
import carSpeaker from "../public/car_speaker.png";
import amplifier from "../public/Amplifier.png";
import subwoofer from "../public/Subwoofer.png";
import multimediaReceiver from "../public/multimedia_receivers.png";
import backupCamera from "../public/backupcamera.png";

/*  Locksmith + AI dash‑cam images */
import emergencyLock from "../public/emergency_lock.png";
import keyCutting from "../public/key_cutting.png";
import transponder from "../public/Transponder.png";
import ignition from "../public/ignition.png";
import mc202x from "../public/MC202X.png";
import mc402 from "../public/MC402_1080P_4CH_AI_DashCam.png";
import mc904 from "../public/mc904_1080p_4ch_sd_mdvr.png";
import mc912 from "../public/mdvrMc912_12ch1080p.png";
/* ------------------------------------------------------------------ */

/* 2. ── SHARED “rotate every 3 s” helper so you don’t write 7 timers */
function useRotatingIndex(length, delay = 3000) {
  const [index, set] = useState(0);
  useEffect(() => {
    const id = setInterval(() => set(i => (i + 1) % length), delay);
    return () => clearInterval(id);
  }, [length, delay]);
  return index;
}

/* 3. ── DATA ARRAYS (unchanged except image keys renamed for clarity) */
const fuelMonitorBenefits = [
  { img: fmm250, title: "Precise Level Reading", subtitle: "Accurate fuel data in real‑time" },
  { img: fmc650, title: "Fuel Consumption Monitoring", subtitle: "Track fuel usage efficiently" },
  { img: fmc920, title: "Anti‑Fuel Siphoning", subtitle: "Protect against fuel theft" },
  { img: ftc921, title: "Robust Fleet Tracking", subtitle: "Reliable tracking with high voltage support" },
  { img: ftc961, title: "Heavy‑Duty Tracking", subtitle: "Water‑proof and rugged design" },
];

const alarmSystems = [
  { img: twoWay,   title: "Two‑Way Alarm",     subtitle: "Real‑time communication" },
  { img: keyless,  title: "Keyless Entry",     subtitle: "Advanced access protection" },
  { img: remote,   title: "Remote Start",      subtitle: "Convenient engine control" },
  { img: shock,    title: "Shock Sensors",     subtitle: "Impact detection" },
  { img: glass,    title: "Glass Break",       subtitle: "Window security" },
];

const assetTracking = [
  { img: gpsTracker,       title: "GPS Tracker",        subtitle: "Real‑time asset location updates" },
  { img: gpsAccessory,     title: "Accessory Kit",      subtitle: "Mounts & wiring for GPS units" },
  { img: outdoorNav,       title: "Outdoor Navigator",  subtitle: "Rugged GPS for tough jobs" },
  { img: portableNav,      title: "Portable Navigator", subtitle: "Flexible tracking on the go" },
  { img: smartphoneMount,  title: "Smartphone Mount",   subtitle: "Easy phone integration" },
  { img: trafficReceiver,  title: "Traffic Receiver",   subtitle: "Live road‑condition updates" },
];

const vehicleAudio = [
  { img: carStereo,          title: "Car Stereos",          subtitle: "Upgrade your in‑car audio hub" },
  { img: carSpeaker,         title: "Car Speakers",         subtitle: "Clearer, more detailed sound" },
  { img: amplifier,          title: "Amplifiers",           subtitle: "Boost overall performance" },
  { img: subwoofer,          title: "Subwoofers",           subtitle: "Add deep, heart‑pounding bass" },
  { img: multimediaReceiver, title: "Multimedia Receivers", subtitle: "Big touchscreens & CarPlay" },
  { img: backupCamera,       title: "Backup Cameras",       subtitle: "Improve safety while parking" },
];

const locksmithImgs = [
  { img: emergencyLock, alt: "Emergency lock services" },
  { img: keyCutting,    alt: "Key cutting services" },
  { img: transponder,   alt: "Transponder programming" },
  { img: ignition,      alt: "Ignition repair & replacement" },
];

const aiDash = [
  { img: "/MC201.png", title: "MC201 2K AI 2CH DashCam",  subtitle: "Advanced dual‑channel AI dashcam" },
  { img: mc202x,       title: "MC202X 1080P 2CH AI",      subtitle: "Compact dual‑camera AI solution" },
  { img: mc402,        title: "MC402 1080P 4CH AI",       subtitle: "Comprehensive quad‑channel AI" },
  { img: mc904,        title: "MC904 1080P 4CH SD MDVR",  subtitle: "Reliable 4‑channel SD MDVR" },
  { img: "/MC908_8ChannelRecorder.png", title: "MC908 1080P 8CH MDVR",     subtitle: "Expandable 8‑channel system" },
  { img: mc912,        title: "MC912 1080P 12CH MDVR",    subtitle: "High‑capacity 12‑channel MDVR" },
];

/* ------------------------------------------------------------------ */
/* 4. ── PAGE COMPONENT                                                */
export default function Home() {
  /* initialise scroll‑reveal once */
  useScrollReveal();

  /* derive rotating indexes with one‑liner hook */
  const fuelIdx       = useRotatingIndex(fuelMonitorBenefits.length);
  const alarmIdx      = useRotatingIndex(alarmSystems.length);
  const assetIdx      = useRotatingIndex(assetTracking.length);
  const audioIdx      = useRotatingIndex(vehicleAudio.length);
  const locksmithIdx  = useRotatingIndex(locksmithImgs.length);
  const dashIdx       = useRotatingIndex(aiDash.length);

  return (
    <main className="main-content no-padding">
      {/* Fuel Monitors */}
      <HeroBlock
        title="Fuel Monitors"
        subtitle={fuelMonitorBenefits[fuelIdx].subtitle}
        img={fuelMonitorBenefits[fuelIdx].img}
        link="/fuel-monitoring"
      />

      {/* Alarm Systems */}
      <HeroBlock
        title="Alarm Systems"
        subtitle={alarmSystems[alarmIdx].subtitle}
        img={alarmSystems[alarmIdx].img}
        link="/alarm-systems"
      />

      {/* Asset Tracking */}
      <HeroBlock
        title="Asset Tracking"
        subtitle={assetTracking[assetIdx].subtitle}
        img={assetTracking[assetIdx].img}
        link="/asset-tracking"
      />

      {/* Vehicle Audio */}
      <HeroBlock
        title="Vehicle Audio & Multimedia"
        subtitle={vehicleAudio[audioIdx].subtitle}
        img={vehicleAudio[audioIdx].img}
        link="/vehicle-audio-multimedia"
      />

      {/* Locksmith */}
      <HeroBlock
        title="Autolocksmith Services"
        subtitle={locksmithImgs[locksmithIdx].alt}
        img={locksmithImgs[locksmithIdx].img}
        link="/autolocksmith-services"
      />

      {/* AI Dashcams */}
      <HeroBlock
        title="AI Dashcams & MDVR"
        subtitle={aiDash[dashIdx].subtitle}
        img={aiDash[dashIdx].img}
        link="/ai-dashcams-mdvr"
      />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* 5. ── Tiny presentational helper so markup stays DRY                */
function HeroBlock({ title, subtitle, img, link }) {
  return (
    <section className="section-block">
      <h2 className="product-title">{title}</h2>
      <p className="product-subtitle">{subtitle}</p>

      <div className="image-wrapper">
        <Image
          src={img}
          alt={title}
          fill
          className="monitor-image"
          priority
        />
      </div>

      <div className="button-group">
        <Link href={link}>
          <button className="primary-button">Learn more</button>
        </Link>
      </div>
    </section>
  );
}
