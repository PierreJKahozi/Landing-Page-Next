import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Hero2 = (props) => {
  return (
    <>
      <div className="hero2-header5 thq-section-padding">
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="hero2-image"
        />
        <div className="hero2-container1">
          <div className="hero2-max-width thq-section-max-width">
            <div className="hero2-column">
              <div className="hero2-content">
                <h1>
                  {props.heading1 ?? (
                    <Fragment>
                      <h1 className="hero2-text6 thq-heading-1">
                        Discover the Power of Our Products
                      </h1>
                    </Fragment>
                  )}
                </h1>
                <p>
                  {props.content1 ?? (
                    <Fragment>
                      <p className="hero2-text7 thq-body-large">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat.
                      </p>
                    </Fragment>
                  )}
                </p>
                <div className="hero2-actions">
                  <div className="hero2-container2">
                    <button className="hero2-button1 thq-button-filled">
                      <span>
                        {props.action1 ?? (
                          <Fragment>
                            <span className="hero2-text8 thq-body-small">
                              Main action
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                  <div className="hero2-container3">
                    <button className="thq-button-outline hero2-button2">
                      <span>
                        {props.action2 ?? (
                          <Fragment>
                            <span className="hero2-text5 thq-body-small">
                              Secondary action
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero2-header5 {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .hero2-image {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .hero2-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .hero2-max-width {
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: flex-start;
          }
          .hero2-column {
            gap: 24px;
            width: auto;
            display: flex;
            z-index: 1;
            max-width: 560px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero2-content {
            gap: 24px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeInLeftBig;
            flex-direction: column;
            animation-delay: 0s;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .hero2-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero2-container2 {
            display: flex;
            align-items: flex-start;
          }
          .hero2-button1 {
            display: flex;
            box-sizing: content-box;
            align-items: center;
            border-color: var(--dl-color-theme-primary1);
            border-style: solid;
            border-width: 1px;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .hero2-container3 {
            display: flex;
            align-items: flex-start;
          }
          .hero2-text5 {
            display: inline-block;
          }
          .hero2-text6 {
            display: inline-block;
          }
          .hero2-text7 {
            display: inline-block;
          }
          .hero2-text8 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .hero2-header5 {
              justify-content: center;
            }
            .hero2-max-width {
              justify-content: center;
            }
            .hero2-column {
              width: 100%;
            }
            .hero2-actions {
              width: 100%;
              align-self: flex-start;
              justify-content: center;
            }
            .hero2-text6 {
              text-align: center;
            }
            .hero2-text7 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .hero2-actions {
              flex-direction: column;
            }
            .hero2-container2 {
              width: 100%;
            }
            .hero2-button1 {
              width: 100%;
            }
            .hero2-container3 {
              width: 100%;
            }
            .hero2-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero2.defaultProps = {
  action2: undefined,
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTEzODIwNzF8MA&ixlib=rb-4.0.3&w=1500',
  content1: undefined,
  image1Alt: 'image',
  action1: undefined,
}

Hero2.propTypes = {
  action2: PropTypes.element,
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
  content1: PropTypes.element,
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
}

export default Hero2
