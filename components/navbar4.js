import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Navbar4 = (props) => {
  return (
    <>
      <header className={`navbar4-container ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
          <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
            <nav className="navbar4-links1">
              <a href={props.link1Url} className="navbar4-link11">
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar4-text7 thq-body-small thq-link">
                      Link1
                    </span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url} className="navbar4-link21">
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar4-text6 thq-body-small thq-link">
                      Link2
                    </span>
                  </Fragment>
                )}
              </a>
              <a href={props.link3Url} className="navbar4-link31">
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar4-text4 thq-body-small thq-link">
                      Link3
                    </span>
                  </Fragment>
                )}
              </a>
            </nav>
            <div className="navbar4-buttons1">
              <button className="navbar4-action11 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="navbar4-text8">Action 1</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="navbar4-action21 thq-button-outline thq-button-animated">
                <span className="thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="navbar4-text9">Action 2</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar4-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
            <div className="navbar4-nav">
              <div className="navbar4-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar4-logo"
                />
                <div data-thq="thq-close-menu" className="navbar4-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar4-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar4-links2">
                <a href={props.link1Url}>
                  {props.link1 ?? (
                    <Fragment>
                      <span className="navbar4-text7 thq-body-small thq-link">
                        Link1
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link2Url}>
                  {props.link2 ?? (
                    <Fragment>
                      <span className="navbar4-text6 thq-body-small thq-link">
                        Link2
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link3Url}>
                  {props.link3 ?? (
                    <Fragment>
                      <span className="navbar4-text4 thq-body-small thq-link">
                        Link3
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link4Url}>
                  {props.link4 ?? (
                    <Fragment>
                      <span className="navbar4-text3 thq-body-small thq-link">
                        Link4
                      </span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link5Url}>
                  {props.link5 ?? (
                    <Fragment>
                      <span className="navbar4-text5 thq-body-small thq-link">
                        Link5
                      </span>
                    </Fragment>
                  )}
                </a>
              </nav>
            </div>
            <div className="navbar4-buttons2">
              <button>Login</button>
              <button>Register</button>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar4-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar4-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .navbar4-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar4-links1 {
            gap: 32px;
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: 32px;
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar4-link11 {
            text-decoration: none;
          }
          .navbar4-link21 {
            text-decoration: none;
          }
          .navbar4-link31 {
            text-decoration: none;
          }
          .navbar4-buttons1 {
            gap: 32px;
            display: flex;
            align-items: center;
            margin-left: 32px;
          }
          .navbar4-action11 {
            display: flex;
            flex-direction: row;
          }
          .navbar4-action21 {
            display: flex;
            flex-direction: row;
          }
          .navbar4-burger-menu {
            display: none;
          }
          .navbar4-icon1 {
            width: 16px;
            height: 16px;
          }
          .navbar4-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar4-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar4-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .navbar4-logo {
            height: 3rem;
          }
          .navbar4-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar4-icon3 {
            width: 16px;
            height: 16px;
          }
          .navbar4-links2 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar4-buttons2 {
            gap: 32px;
            display: flex;
            margin-top: 32px;
            align-items: center;
          }
          .navbar4-text3 {
            display: inline-block;
          }
          .navbar4-text4 {
            display: inline-block;
          }
          .navbar4-text5 {
            display: inline-block;
          }
          .navbar4-text6 {
            display: inline-block;
          }
          .navbar4-text7 {
            display: inline-block;
          }
          .navbar4-text8 {
            display: inline-block;
          }
          .navbar4-text9 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .navbar4-navbar-interactive {
              padding-left: 32px;
              padding-right: 32px;
            }
            .navbar4-desktop-menu {
              display: none;
            }
            .navbar4-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar4-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar4-mobile-menu {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar4.defaultProps = {
  link4: undefined,
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link3: undefined,
  rootClassName: '',
  link4Url: 'https://www.teleporthq.io',
  link5: undefined,
  link2: undefined,
  link1: undefined,
  link5Url: 'https://www.teleporthq.io',
  action1: undefined,
  link3Url: 'https://www.teleporthq.io',
  action2: undefined,
  link2Url: 'https://www.teleporthq.io',
  link1Url: 'https://www.teleporthq.io',
  logoAlt: 'logo',
}

Navbar4.propTypes = {
  link4: PropTypes.element,
  logoSrc: PropTypes.string,
  link3: PropTypes.element,
  rootClassName: PropTypes.string,
  link4Url: PropTypes.string,
  link5: PropTypes.element,
  link2: PropTypes.element,
  link1: PropTypes.element,
  link5Url: PropTypes.string,
  action1: PropTypes.element,
  link3Url: PropTypes.string,
  action2: PropTypes.element,
  link2Url: PropTypes.string,
  link1Url: PropTypes.string,
  logoAlt: PropTypes.string,
}

export default Navbar4
