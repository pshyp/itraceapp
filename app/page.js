"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import ftc921 from "../public/FTC921.png";
import ftc961 from "../public/FTC961.png";
import ftc881 from "../public/FTC881.png";
import fmc920 from "../public/fmc920.webp";
import fmc650 from "../public/fmc650.webp";
import fmm250 from "../public/fmm250.webp";
import twoWay from "../public/two_way_alarm.png";
import keyless from "../public/keyless_entry.png";
import remote from "../public/remote_start.png";
import shock from "../public/shock_sensor.png";
import glass from "../public/glass_break_sensor.png";

import "./globals.css";
// all these used in the animations
export default function Home() {
  const monitors = [fmm250, ftc921, ftc961, ftc881];
  const fuelMonitorBenefits = [
    { image: fmm250, title: "Precise Level Reading", subtitle: "Accurate fuel data in real-time" },
    { image: fmc650, title: "Fuel Consumption Monitoring", subtitle: "Track fuel usage efficiently" },
    { image: fmc920, title: "Anti-Fuel Siphoning", subtitle: "Protect against fuel theft" },
    { image: ftc921, title: "Robust Fleet Tracking", subtitle: "Reliable tracking with high voltage support" },
    { image: ftc961, title: "Heavy-Duty Tracking", subtitle: "Waterproof and rugged design" },
    { image: ftc881, title: "Easy Installation", subtitle: "Quick and simple setup" },
  ];

  const alarmSystems = [
    { image: twoWay, title: "Two-Way Alarm", subtitle: "Real-time communication" },
 { image: keyless, title: "Keyless Entry", subtitle: "Advanced access protection" },
    { image: remote, title: "Remote Start", subtitle: "Convenient engine control" },
    { image: shock, title: "Shock Sensors", subtitle: "Impact detection" },
    { image: glass, title: "Glass Break", subtitle: "Window security" },
  ];

  const [monitorIndex, setMonitorIndex] = useState(0);
  const [alarmIndex, setAlarmIndex] = useState(0);
  const [fuelBenefitIndex, setFuelBenefitIndex] = useState(0);

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
    const fuelBenefitInterval = setInterval(() => {
 setFuelBenefitIndex((prev) => (prev + 1) % fuelMonitorBenefits.length);
    }, 3000);
    return () => clearInterval(fuelBenefitInterval);
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
    </main>
  );
}
