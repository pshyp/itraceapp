import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="fuel-home-container">
      <div className="fuel-home-content">
        <h1>Fuel Monitor FTC 921</h1>
        <p>Built for Precision Fuel Intelligence.</p>

        <div className="image-wrapper">
          <Image
            src="/FTC921.webp"
            alt="Fuel Monitor FTC 921"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="buttons">
          <button className="primary">Learn more</button>
          <button className="secondary">Buy</button>
        </div>
      </div>
    </div>
  );
}
