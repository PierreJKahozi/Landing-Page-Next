import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Landing Page</title>
          <meta property="og:title" content="Landing Page" />
        </Head>
        <div id="home" data-role="Header" className="home-navbar-container">
          <div className="home-navbar">
            <div className="home-container2">
              <div className="home-container3">
                <img
                  alt="image"
                  src="/aklogo-200h.png"
                  className="home-image1"
                />
                <h1 className="home-text10">AkroTech</h1>
              </div>
              <div className="home-links-container1">
                <a href="#home" className="home-link1">
                  Home
                </a>
                <a href="#about-us" className="home-link2">
                  About Us
                </a>
                <a href="#our-services" className="home-link3">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
        <section id="about-us" className="home-hero1">
          <div className="home-content-container1"></div>
          <div className="home-content-container2">
            <span className="home-text11">
              <span>About us</span>
              <br></br>
            </span>
            <span className="home-text14">
              Akro Tech is a provider of cyber security automation consulting
              and software development services. We help organizations of all
              sizes to improve their cyber security posture by automating their
              security operations and build bespoke software solutions.
            </span>
          </div>
        </section>
        <section id="our-services" className="home-hero2">
          <div className="home-heading-container">
            <span className="home-text15">
              <span>Our Services</span>
              <br></br>
            </span>
            <span className="home-text18">
              We are committed to providing our customers with the highest
              quality services. We have a team of experienced cyber security
              professionals who are passionate about helping organizations to
              improve their cyber security posture. We are also committed to
              staying up-to-date with the latest trends and technologies.
            </span>
          </div>
          <section id="process" className="home-features">
            <div className="home-cards-container">
              <div className="home-features-card1">
                <div className="home-text-container1">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256zM512 512v382q118-38 200-143t98-239h-298zM512 512v-376l-298 132v244h298z"></path>
                  </svg>
                  <span className="home-heading1">Software Dev</span>
                  <span className="home-text19">
                    We develop custom software solutions that help organizations
                    improve their internal processes as well as facilitate the
                    integration of distributed systems in the solutions that are
                    created. Our team of experienced developers can build
                    solutions that meet your specific needs.
                  </span>
                </div>
              </div>
              <div className="home-features-card2">
                <div className="home-text-container2">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M512 42l384 172v256q0 178-110 325t-274 187q-164-40-274-187t-110-325v-256zM512 512v382q118-38 200-143t98-239h-298zM512 512v-376l-298 132v244h298z"></path>
                  </svg>
                  <span className="home-heading2">CyberSecurity</span>
                  <span className="home-text20">
                    We help organizations to design, implement, and operate
                    xSOAR, Palo Alto Networks&apos; flagship cyber security
                    automation platform. We have a deep understanding of xSOAR
                    and its capabilities, and we can help you to get the most
                    out of it.
                  </span>
                </div>
              </div>
            </div>
          </section>
        </section>
        <div className="home-section-separator1"></div>
        <div id="contactUs" className="home-get-in-touch">
          <div className="home-content-container3">
            <div className="home-links-container2">
              <a href="#home" className="home-link4">
                Home
              </a>
              <a href="#about-us" className="home-link5">
                About Us
              </a>
              <a href="#our-services" className="home-link6">
                Our Services
              </a>
            </div>
            <a href="#home" className="home-link7">
              <img
                alt="image"
                src="/external/aklogo-200h-200h.png"
                className="home-image2"
              />
            </a>
            <a href="mailto:info@akro.tech?subject=-" className="home-link8">
              <span>💬</span>
              <span>CONNECT WITH US</span>
            </a>
          </div>
        </div>
        <div className="home-section-separator2"></div>
        <div className="home-footer-container">
          <div className="home-footer">
            <div className="home-social-links">
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon14">
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon16">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <a
                href="https://www.linkedin.com/company/akro-tech/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link9"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon18"
                >
                  <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #191e22;
          }
          .home-navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: sticky;
            box-shadow: 5px 5px 10px 0px #b9b9b9;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #191e22;
          }
          .home-navbar {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            background-color: #191e22;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: space-between;
            flex-direction: column;
          }
          .home-container3 {
            width: 500px;
            display: flex;
            padding: 12px 0;
            align-self: center;
            align-items: center;
            align-content: flex-end;
            justify-content: center;
          }
          .home-image1 {
            width: 100px;
            height: min-content;
            display: block;
            justify-content: center;
          }
          .home-text10 {
            color: #d0006e;
            font-size: 72px;
            align-self: center;
            font-style: normal;
            font-family: 'Audiowide';
            font-weight: 900;
            line-height: 1.2;
          }
          .home-links-container1 {
            display: flex;
            position: sticky;
            font-size: 20px;
            align-self: center;
            font-style: normal;
            align-items: flex-start;
            font-weight: 300;
            line-height: 1.5;
            flex-direction: row;
          }
          .home-link1 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            font-style: normal;
            font-family: 'Fira Sans';
            font-weight: 700;
            line-height: 1.55;
            margin-right: var(--dl-space-space-tripleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .home-link2 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            font-style: normal;
            font-family: 'Fira Sans';
            font-weight: 700;
            line-height: 1.55;
            margin-right: var(--dl-space-space-tripleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .home-link3 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            font-style: normal;
            font-family: 'Fira Sans';
            font-weight: 700;
            line-height: 1.55;
            margin-right: var(--dl-space-space-tripleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .home-hero1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 60px;
            padding-left: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 60px;
            justify-content: center;
            background-color: #191e22;
          }
          .home-content-container1 {
            width: 50%;
            height: 672px;
            display: flex;
            opacity: 0.9;
            flex-wrap: wrap;
            max-width: auto;
            margin-top: 0px;
            align-items: center;
            margin-left: 0px;
            padding-top: 0px;
            margin-right: -112px;
            padding-left: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 672px;
            background-size: cover;
            justify-content: center;
            background-image: url('/developer-700h.jpg');
          }
          .home-content-container2 {
            width: 528px;
            height: 656px;
            margin: 36px 0px -20px -112px;
            display: flex;
            opacity: 0.9;
            max-width: auto;
            align-items: center;
            padding-top: 98px;
            padding-left: 64px;
            padding-right: 64px;
            flex-direction: column;
            padding-bottom: 98px;
            justify-content: center;
            background-color: #d0006e;
          }
          .home-text11 {
            color: var(--dl-color-theme-secondary1);
            width: 400px;
            height: 62px;
            margin: 16px;
            opacity: 1;
            font-size: 3em;
            font-style: normal;
            margin-top: 0px;
            text-align: center;
            font-family: 'Audiowide';
            font-weight: bold;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
          }
          .home-text14 {
            color: var(--dl-color-theme-secondary1);
            opacity: 1;
            margin-top: 16px;
            text-align: center;
            font-family: 'Fira Sans';
            padding-top: 0px;
            margin-bottom: 16px;
            padding-bottom: 0px;
          }
          .home-hero2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 60px;
            padding-left: 0px;
            margin-bottom: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 60px;
            justify-content: center;
            background-color: var(--dl-color-theme-accent1);
          }
          .home-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-text15 {
            fill: #d0006e;
            color: #d0006e;
            font-size: 2em;
            font-family: 'Audiowide';
            font-weight: bold;
          }
          .home-text18 {
            width: auto;
            height: auto;
            text-align: center;
            font-family: 'Fira Sans';
          }
          .home-features {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxcontent);
            align-self: center;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-theme-accent1);
          }
          .home-cards-container {
            width: 100%;
            height: 514px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-features-card1 {
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text-container1 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon10 {
            fill: #d0006e;
            width: 80px;
            height: 80px;
            align-self: center;
          }
          .home-heading1 {
            fill: #d0006e;
            color: rgb(208, 0, 110);
            font-size: 24px;
            align-self: center;
            font-style: normal;
            font-family: 'Audiowide';
            font-weight: 700;
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-tripleunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-text19 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            align-self: center;
            text-align: center;
            font-family: 'Fira Sans';
          }
          .home-features-card2 {
            width: 50%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text-container2 {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-icon12 {
            fill: #d0006e;
            width: 80px;
            height: 80px;
            align-self: center;
          }
          .home-heading2 {
            fill: #d0006e;
            color: rgb(208, 0, 110);
            font-size: 24px;
            align-self: center;
            font-style: normal;
            font-family: 'Audiowide';
            font-weight: 700;
            line-height: 1.55;
            margin-bottom: var(--dl-space-space-tripleunit);
            text-transform: none;
            text-decoration: none;
          }
          .home-text20 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            align-self: center;
            text-align: center;
            font-family: 'Fira Sans';
          }
          .home-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-get-in-touch {
            width: auto;
            height: fit-content;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-content-container3 {
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: space-around;
          }
          .home-links-container2 {
            display: flex;
            z-index: 100;
            font-size: 20px;
            align-self: center;
            font-style: normal;
            align-items: flex-start;
            font-weight: 300;
            line-height: 1.5;
            animation-name: none;
            flex-direction: row;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .home-link4 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            font-style: normal;
            font-family: 'Fira Sans';
            font-weight: 700;
            line-height: 1.55;
            margin-right: var(--dl-space-space-tripleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .home-link5 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            font-style: normal;
            font-family: 'Fira Sans';
            font-weight: 700;
            line-height: 1.55;
            margin-right: var(--dl-space-space-tripleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .home-link6 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            font-style: normal;
            font-family: 'Fira Sans';
            font-weight: 700;
            line-height: 1.55;
            margin-right: var(--dl-space-space-tripleunit);
            text-transform: capitalize;
            text-decoration: none;
          }
          .home-link7 {
            display: contents;
          }
          .home-image2 {
            width: 100px;
            height: min-content;
            display: block;
            justify-content: center;
            text-decoration: none;
          }
          .home-link8 {
            fill: #d0006e;
            color: rgb(208, 0, 110);
            font-size: 1.5em;
            font-family: 'Audiowide';
            text-decoration: none;
          }
          .home-section-separator2 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 0px;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .home-footer-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #191e22;
          }
          .home-footer {
            height: auto;
            display: flex;
            padding: 0px;
            max-width: var(--dl-size-size-maxcontent);
            align-self: stretch;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: row;
            justify-content: center;
            background-color: #191e22;
          }
          .home-social-links {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-icon14 {
            fill: var(--dl-color-theme-secondary1);
            width: 5%;
            height: auto;
            padding: 8px;
            margin-top: 0px;
            margin-left: 8px;
            margin-right: 8px;
            margin-bottom: 0px;
          }
          .home-icon16 {
            fill: var(--dl-color-theme-secondary1);
            width: 5%;
            height: auto;
            padding: 8px;
            margin-left: 8px;
            margin-right: 8px;
          }
          .home-link9 {
            display: contents;
          }
          .home-icon18 {
            fill: var(--dl-color-theme-secondary1);
            width: 5%;
            height: auto;
            padding: 8px;
            margin-left: 8px;
            margin-right: 8px;
            padding-bottom: 8px;
            text-decoration: none;
          }
          @media (max-width: 1059px) {
            .home-text18 {
              width: auto;
              height: auto;
            }
          }
          @media (max-width: 991px) {
            .home-hero1 {
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
            .home-content-container1 {
              width: 35%;
              flex-direction: column;
            }
            .home-content-container2 {
              width: 35%;
              display: flex;
              flex-direction: column;
            }
            .home-text11 {
              font-size: 2.5em;
            }
            .home-hero2 {
              flex-direction: column;
            }
            .home-text18 {
              width: auto;
              height: auto;
            }
          }
          @media (max-width: 767px) {
            .home-links-container1 {
              display: none;
            }
            .home-hero1 {
              flex-direction: row;
            }
            .home-content-container1 {
              padding-left: var(--dl-space-space-doubleunit);
              padding-right: 0px;
              justify-content: center;
            }
            .home-content-container2 {
              height: 712px;
            }
            .home-text11 {
              font-size: 1.5em;
            }
            .home-text14 {
              width: auto;
              height: auto;
            }
            .home-heading-container {
              width: 100%;
            }
            .home-text18 {
              font-family: Fira Sans;
            }
            .home-features {
              align-items: center;
            }
            .home-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-features-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
              flex-direction: row;
            }
            .home-text-container1 {
              position: relative;
            }
            .home-heading1 {
              text-align: center;
            }
            .home-text19 {
              width: 500px;
            }
            .home-features-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .home-text20 {
              width: 500px;
            }
            .home-content-container3 {
              width: 100%;
              flex-direction: column;
            }
            .home-links-container2 {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .home-hero1 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content-container1 {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-text11 {
              font-size: 1.5em;
            }
            .home-hero2 {
              height: 1236px;
              justify-content: space-around;
            }
            .home-heading-container {
              align-items: center;
            }
            .home-features {
              height: auto;
            }
            .home-cards-container {
              flex-direction: column;
            }
            .home-features-card1 {
              width: auto;
              height: auto;
            }
            .home-icon10 {
              height: 50px;
            }
            .home-heading1 {
              font-family: 'Audiowide';
            }
            .home-text19 {
              color: var(--dl-color-gray-black);
              width: 450px;
              font-family: Fira Sans;
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .home-features-card2 {
              width: auto;
              height: auto;
            }
            .home-icon12 {
              height: 50px;
            }
            .home-text20 {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .home-content-container3 {
              padding-left: 0px;
            }
            .home-icon14 {
              width: 10%;
              height: auto;
            }
            .home-icon16 {
              width: 10%;
              height: auto;
            }
            .home-icon18 {
              width: 10%;
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
