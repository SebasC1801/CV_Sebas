"use client";

export default function GlowingCard() {
  return (
    <div className="glowing-card-wrapper">
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <img src="/FotoMia.png" alt="Sebastian Ceballos" className="profile-image" />
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle"></div>
              <div className="circle" id="right"></div>
              <div className="circle" id="bottom"></div>
            </div>
            <div className="front-content">
              <small className="badge">Developer</small>
              <div className="description">
                <div className="title">
                  <p className="title">
                    <strong>Sebastian Ceballos</strong>
                  </p>
                </div>
                <p className="card-footer">Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glowing-card-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }

        .card {
          overflow: visible;
          width: 280px;
          height: 373px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-8px);
        }

        .content {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 500ms ease;
          box-shadow: 0px 0px 10px 1px #000000ee;
          border-radius: 5px;
        }

        .card:hover .content {
          transform: rotateY(180deg);
          box-shadow: 0px 10px 30px 5px #000000dd;
        }

        .front,
        .back {
          background-color: #151515;
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 5px;
          overflow: hidden;
        }

        .back {
          width: 100%;
          height: 100%;
          justify-content: center;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .back::before {
          position: absolute;
          content: " ";
          display: block;
          width: 160px;
          height: 160%;
          background: linear-gradient(
            90deg,
            transparent,
            #ff9966,
            #ff9966,
            #ff9966,
            #ff9966,
            transparent
          );
          animation: rotation_481 5000ms infinite linear;
        }

        .back-content {
          position: absolute;
          width: 99%;
          height: 99%;
          background-color: #151515;
          border-radius: 5px;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .card:hover .profile-image {
          transform: scale(1.05);
        }

        @keyframes rotation_481 {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }

        .front {
          transform: rotateY(180deg);
          color: white;
        }

        .front .front-content {
          position: absolute;
          width: 100%;
          height: 100%;
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .front-content .badge {
          background-color: #00000055;
          padding: 2px 10px;
          border-radius: 10px;
          backdrop-filter: blur(2px);
          width: fit-content;
        }

        .description {
          box-shadow: 0px 0px 10px 5px #00000088;
          width: 100%;
          padding: 10px;
          background-color: #00000099;
          backdrop-filter: blur(5px);
          border-radius: 5px;
        }

        .title {
          font-size: 18px;
          max-width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .title p {
          width: 100%;
        }

        .card-footer {
          color: #ffffff88;
          margin-top: 5px;
          font-size: 14px;
        }

        .front .img {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .circle {
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background-color: #ffbb66;
          position: relative;
          filter: blur(15px);
          animation: floating 2600ms infinite linear;
        }

        #bottom {
          background-color: #ff8866;
          left: 50px;
          top: 0px;
          width: 150px;
          height: 150px;
          animation-delay: -800ms;
        }

        #right {
          background-color: #ff2233;
          left: 160px;
          top: -80px;
          width: 30px;
          height: 30px;
          animation-delay: -1800ms;
        }

        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}
