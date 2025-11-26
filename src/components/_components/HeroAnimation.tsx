"use client";

import React from "react";
import Image from "next/image";

const OrbitalServices: React.FC = () => {
  return (
    <>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          min-height: 80vh;
          background: #121212;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow: hidden;
        }

        .container {
          position: relative;
          width: 400px;
          height: 400px;
        }

        .orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          border: 2px solid rgba(100, 200, 255, 0.3);
          border-radius: 50%;
          box-shadow: 0 0 20px rgba(100, 200, 255, 0.2);
          animation: pulse 3s ease-in-out infinite;
        }

        .center-circle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          border-radius: 50%;

          box-shadow: 0 0 30px rgba(102, 126, 234, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          z-index: 10;
          transition: all 0.4s ease;
        }

        .center-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          transition: opacity 0.15s ease;
          position: absolute;
          top: 0;
          left: 0;
        }

        .light-beam {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 280px;
          height: 200px;
          transform-origin: 0% 50%;
          transform: translate(0, -50%) rotate(0deg);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.5s ease;
          z-index: 5;
        }

        .light-beam::before {
          content: "";
          position: absolute;
          top: 0;
          left: 40px;
          width: calc(100% - 40px);
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(100, 200, 255, 0.95) 0%,
            rgba(100, 200, 255, 0.85) 15%,
            rgba(100, 200, 255, 0.65) 35%,
            rgba(100, 200, 255, 0.45) 60%,
            rgba(100, 200, 255, 0.25) 80%,
            transparent 100%
          );
          clip-path: polygon(
            0% 48%,
            0% 52%,
            25% 35%,
            25% 65%,
            55% 20%,
            55% 80%,
            100% 0%,
            100% 100%
          );
          filter: blur(15px);
        }

        .light-beam::after {
          content: "";
          position: absolute;
          top: 0;
          left: 40px;
          width: calc(100% - 40px);
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.8) 0%,
            rgba(200, 230, 255, 0.7) 20%,
            rgba(100, 200, 255, 0.5) 45%,
            rgba(100, 200, 255, 0.3) 70%,
            transparent 90%
          );
          clip-path: polygon(
            0% 49%,
            0% 51%,
            30% 40%,
            30% 60%,
            60% 30%,
            60% 70%,
            100% 15%,
            100% 85%
          );
          filter: blur(8px);
        }

        .service {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(
            to right,
            #fa8b31,
            #fc4950,
            #d15f8e,
            #2bb2e0,
            #8d78bc
          );
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.4s ease;
          z-index: 15;
        }

        .service:hover {
          transform: scale(1.3);
          box-shadow: 0 0 50px rgba(140, 150, 195, 1),
            0 0 80px rgba(16, 20, 37, 0.6);
        }

        .service-icon {
          font-size: 28px;
          color: black;
        }

        .service-1 {
          top: 20px;
          left: 50%;
          margin-left: -30px;
        }

        .service-2 {
          top: 50%;
          right: 20px;
          margin-top: -30px;
        }

        .service-3 {
          bottom: 20px;
          left: 50%;
          margin-left: -30px;
        }

        .service-4 {
          top: 50%;
          left: 20px;
          margin-top: -30px;
        }

        /* Light beam hover */
        .service-1:hover ~ .center-circle .light-beam {
          opacity: 1;
          transform: translate(0, -50%) rotate(-90deg);
        }

        .service-2:hover ~ .center-circle .light-beam {
          opacity: 1;
          transform: translate(0, -50%) rotate(0deg);
        }

        .service-3:hover ~ .center-circle .light-beam {
          opacity: 1;
          transform: translate(0, -50%) rotate(90deg);
        }

        .service-4:hover ~ .center-circle .light-beam {
          opacity: 1;
          transform: translate(0, -50%) rotate(180deg);
        }

        /* Image switching */
        .center-image {
          z-index: 1;
        }

        .img-default {
          opacity: 1;
          z-index: 2;
        }

        .img-service-1,
        .img-service-2,
        .img-service-3,
        .img-service-4 {
          opacity: 0;
          z-index: 1;
        }

        .service-1:hover ~ .center-circle .img-default {
          opacity: 0;
        }
        .service-1:hover ~ .center-circle .img-service-1 {
          opacity: 1;
        }

        .service-2:hover ~ .center-circle .img-default {
          opacity: 0;
        }
        .service-2:hover ~ .center-circle .img-service-2 {
          opacity: 1;
        }

        .service-3:hover ~ .center-circle .img-default {
          opacity: 0;
        }
        .service-3:hover ~ .center-circle .img-service-3 {
          opacity: 1;
        }

        .service-4:hover ~ .center-circle .img-default {
          opacity: 0;
        }
        .service-4:hover ~ .center-circle .img-service-4 {
          opacity: 1;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .service-label {
          position: absolute;
          color: rgba(255, 255, 255, 0.8);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service:hover .service-label {
          opacity: 1;
        }

        .service-1 .service-label {
          top: -30px;
          left: 5%;
          transform: translateX(-10%);
        }

        .service-2 .service-label {
          right: -70px;
          top: 50%;
          transform: translateY(-50%);
        }

        .service-3 .service-label {
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%);
        }

        .service-4 .service-label {
          left: -100px;
          top: 50%;
          transform: translateY(-50%);
        }

        @media (max-width: 600px) {
          .container {
            width: 300px;
            height: 300px;
          }

          .orbit {
            width: 230px;
            height: 230px;
          }

          .center-circle {
            width: 60px;
            height: 60px;
          }

          .service {
            width: 45px;
            height: 45px;
          }

          .service-icon {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="container">
        <div className="orbit"></div>

        {/* Services */}
        <div className="service service-1">
          <span className="service-icon">🎨</span>
          <span className="service-label">Data & AI</span>
        </div>

        <div className="service service-2">
          <span className="service-icon">💻</span>
          <span className="service-label">Cloud</span>
        </div>

        <div className="service service-3">
          <span className="service-icon">📱</span>
          <span className="service-label">Security</span>
        </div>

        <div className="service service-4">
          <span className="service-icon">🚀</span>
          <span className="service-label">Modern Work</span>
        </div>

        {/* Center core */}
        <div className="center-circle">
          <div className="light-beam"></div>

          {/* Default Image */}

          <Image
            className="center-image img-default"
            src="/images/hero/Default.png"
            alt="Core Image"
            width={400}
            height={400}
          />

          {/* Service 1 Image */}
          {/* <img
            className="center-image img-service-1"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23FF6B6B'/%3E%3Cpath d='M30 40 Q50 20 70 40 T70 70 Q50 90 30 70 T30 40' fill='white'/%3E%3Ccircle cx='40' cy='45' r='6' fill='%23FF6B6B'/%3E%3Ccircle cx='60' cy='45' r='6' fill='%23FF6B6B'/%3E%3Cpath d='M35 65 Q50 75 65 65' stroke='%23FF6B6B' stroke-width='4' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"
            alt="Design Service"
          /> */}

          {/* Service 2 Image */}
          {/* <img
            className="center-image img-service-2"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%234ECDC4'/%3E%3Crect x='20' y='30' width='60' height='40' rx='3' fill='white'/%3E%3Crect x='20' y='30' width='60' height='8' fill='%232C3E50'/%3E%3Ctext x='50' y='55' font-size='20' fill='%234ECDC4' text-anchor='middle' font-family='monospace'%3E%26lt;/%26gt;%3C/text%3E%3C/svg%3E"
            alt="Development Service"
          /> */}

          {/* Service 3 Image */}
          {/* <img
            className="center-image img-service-3"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%2395E1D3'/%3E%3Crect x='32' y='20' width='36' height='60' rx='4' fill='white'/%3E%3Crect x='35' y='25' width='30' height='45' fill='%2395E1D3'/%3E%3Ccircle cx='50' cy='74' r='3' fill='%2395E1D3'/%3E%3C/svg%3E"
            alt="Mobile Service"
          /> */}

          {/* Service 4 Image */}
          {/* <img
            className="center-image img-service-4"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23F38181'/%3E%3Cpolygon points='50,20 65,75 50,68 35,75' fill='white'/%3E%3Ccircle cx='50' cy='35' r='8' fill='%23F38181'/%3E%3Cpath d='M35 75 Q30 85 25 80 M65 75 Q70 85 75 80' stroke='white' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"
            alt="Marketing Service"
          /> */}
        </div>
      </div>
    </>
  );
};

export default OrbitalServices;
