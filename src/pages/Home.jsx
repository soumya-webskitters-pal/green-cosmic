import React, { useState, useEffect } from "react";
import { PageData } from "../assets/data";
import "./Home.css";

function Home() {
  const [data_banner, setData_banner] = useState([]);
  const [data_sec1, setData_sec1] = useState([]);
  const [data_sec2, setData_sec2] = useState([]);
  const [data_sec3, setData_sec3] = useState([]);
  const [data_sec4, setData_sec4] = useState([]);
  const [data_sec5, setData_sec5] = useState([]);
  useEffect(() => {
    setData_banner(PageData.Pages.Home.Banner);
    setData_sec1(PageData.Pages.Home.Sec1);
    setData_sec2(PageData.Pages.Home.Sec2);
    setData_sec3(PageData.Pages.Home.Sec3);
    setData_sec4(PageData.Pages.Home.Sec4);
    setData_sec5(PageData.Pages.Home.Sec5);
  }, []);
  return (
    <>
      <section className="banner home_banner">
        <div className="home_banner_img">
          {data_banner.BgImg && (
            <img
              src={`./src/assets/images/${data_banner.BgImg.Path}`}
              alt={data_banner.BgImg.Name}
              key={Date.now() * Math.random()}
            />
          )}
          <span className="lft_star">
            <svg
              version="1.1"
              x="0px"
              y="0px"
              width="1049.3px"
              height="510.8px"
              viewBox="0 0 1049.3 510.8"
            >
              <path
                className="star"
                d="M47.7,216.6c-8.9,0-9,9.2-9,9.2c0-8-8.8-9.2-8.8-9.2c9,0,8.8-9.2,8.8-9.2C38.7,216.6,47.7,216.6,47.7,216.6z"
              ></path>
              <path
                className="star"
                d="M93.4,19.6c-7.4,0-7.5,7.6-7.5,7.6c0-6.6-7.3-7.6-7.3-7.6c7.5,0,7.3-7.6,7.3-7.6C85.9,19.6,93.4,19.6,93.4,19.6z"
              ></path>
              <path
                className="star"
                d="M25.7,13.3c-12.9,0-13,13.3-13,13.3C12.7,15,0,13.3,0,13.3C13,13.3,12.7,0,12.7,0C12.7,13.3,25.7,13.3,25.7,13.3z"
              ></path>
              <path
                className="star"
                d="M47.9,470.1c-8.9,0-9,9.2-9,9.2c0-8-8.8-9.2-8.8-9.2c9,0,8.8-9.2,8.8-9.2C38.9,470.1,47.9,470.1,47.9,470.1z"
              ></path>
              <path
                className="star"
                d="M852.4,39.8c-10.8,0-10.9,11.2-10.9,11.2c0-9.7-10.7-11.2-10.7-11.2c10.9,0,10.7-11.2,10.7-11.2
                  C841.5,39.8,852.4,39.8,852.4,39.8z"
              ></path>
              <path
                className="star"
                d="M581.1,479.6c-8.7,0-8.8,9-8.8,9c0-7.9-8.6-9-8.6-9c8.8,0,8.6-9,8.6-9C572.3,479.6,581.1,479.6,581.1,479.6z"
              ></path>
              <path
                className="star1"
                d="M830.7,461.8c4.8-0.4,4.4-5.3,4.4-5.3c0.4,4.3,5.1,4.5,5.1,4.5c-4.8,0.4-4.3,5.3-4.3,5.3
                  C835.5,461.4,830.7,461.8,830.7,461.8z"
              ></path>
              <path
                className="star"
                d="M123.7,165.2c4.3-0.4,4-4.9,4-4.9c0.3,3.9,4.7,4.1,4.7,4.1c-4.4,0.4-3.9,4.8-3.9,4.8C128.1,164.8,123.7,165.2,123.7,165.2z"
              ></path>
              <path
                className="star2"
                d="M171.9,334.8c4.8-0.4,5.5,7.5,5.5,7.5c-0.6-6.9,4-8.3,4-8.3c-4.8,0.4-5.4-7.5-5.4-7.5C176.7,334.4,171.9,334.8,171.9,334.8z
                  "
              ></path>
              <path
                className="star2"
                d="M282.3,49c4.8-0.6,4.4-8.4,4.4-8.4c0.4,6.8,5.1,7.1,5.1,7.1c-4.8,0.7-4.3,8.4-4.3,8.4C287.1,48.4,282.3,49,282.3,49z"
              ></path>
              <path
                className="star1"
                d="M1042.4,170.3c-8.1,2.8-5.4,11-5.4,11c-2.4-7.1-10.8-5.4-10.8-5.4c8.2-2.8,5.2-10.9,5.2-10.9
                  C1034.2,173.1,1042.4,170.3,1042.4,170.3z"
              ></path>
              <path
                className="star"
                d="M962.8,349.6c-8.9,3.1-5.9,12.1-5.9,12.1c-2.7-7.8-11.9-5.9-11.9-5.9c9-3.1,5.7-12,5.7-12
                  C953.8,352.7,962.8,349.6,962.8,349.6z"
              ></path>
              <path
                className="star2"
                d="M988.8,22.4c-12.9,4.5-8.6,17.5-8.6,17.5c-3.9-11.3-17.2-8.6-17.2-8.6c13-4.5,8.3-17.4,8.3-17.4
                  C975.8,26.9,988.8,22.4,988.8,22.4z"
              ></path>
              <path
                className="star1"
                d="M1035.8,507c6.7-3,3.8-9.8,3.8-9.8c2.6,5.9,9.7,3.8,9.7,3.8c-6.8,3-3.6,9.7-3.6,9.7C1042.6,504,1035.8,507,1035.8,507z"
              ></path>
              <path
                className="star"
                d="M873.3,235.6c4.6-2.1,2.6-6.7,2.6-6.7c1.8,4.1,6.7,2.6,6.7,2.6c-4.7,2.1-2.5,6.7-2.5,6.7C878,233.5,873.3,235.6,873.3,235.6
                  z"
              ></path>
              <path
                className="star2"
                d="M543,94.2c6.7-3,3.8-9.8,3.8-9.8c2.6,5.9,9.7,3.8,9.7,3.8c-6.8,3-3.6,9.7-3.6,9.7C549.8,91.2,543,94.2,543,94.2z"
              ></path>
            </svg>
          </span>
          <span className="rt_star">
            <svg
              version="1.1"
              x="0px"
              y="0px"
              width="1049.3px"
              height="510.8px"
              viewBox="0 0 1049.3 510.8"
            >
              <path
                className="star1"
                d="M830.7,461.8c4.8-0.4,4.4-5.3,4.4-5.3c0.4,4.3,5.1,4.5,5.1,4.5c-4.8,0.4-4.3,5.3-4.3,5.3
                  C835.5,461.4,830.7,461.8,830.7,461.8z"
              ></path>
              <path
                className="star"
                d="M123.7,165.2c4.3-0.4,4-4.9,4-4.9c0.3,3.9,4.7,4.1,4.7,4.1c-4.4,0.4-3.9,4.8-3.9,4.8C128.1,164.8,123.7,165.2,123.7,165.2z"
              ></path>
              <path
                className="star2"
                d="M171.9,334.8c4.8-0.4,5.5,7.5,5.5,7.5c-0.6-6.9,4-8.3,4-8.3c-4.8,0.4-5.4-7.5-5.4-7.5C176.7,334.4,171.9,334.8,171.9,334.8z
                  "
              ></path>
              <path
                className="star1"
                d="M33.9,343.8c5.6-0.5,5.2-6.3,5.2-6.3c0.4,5,6,5.3,6,5.3c-5.7,0.5-5.1,6.3-5.1,6.3C39.6,343.3,33.9,343.8,33.9,343.8z"
              ></path>
              <path
                className="star"
                d="M962.8,349.6c-8.9,3.1-5.9,12.1-5.9,12.1c-2.7-7.8-11.9-5.9-11.9-5.9c9-3.1,5.7-12,5.7-12
                  C953.8,352.7,962.8,349.6,962.8,349.6z"
              ></path>
              <path
                className="star"
                d="M991.2,118.3c-8.8,3-5.8,11.9-5.8,11.9c-2.7-7.7-11.7-5.8-11.7-5.8c8.9-3.1,5.6-11.8,5.6-11.8
                  C982.3,121.4,991.2,118.3,991.2,118.3z"
              ></path>
              <path
                className="star2"
                d="M988.8,22.4c-12.9,4.5-8.6,17.5-8.6,17.5c-3.9-11.3-17.2-8.6-17.2-8.6c13-4.5,8.3-17.4,8.3-17.4
                  C975.8,26.9,988.8,22.4,988.8,22.4z"
              ></path>
              <path
                className="star1"
                d="M1035.8,507c6.7-3,3.8-9.8,3.8-9.8c2.6,5.9,9.7,3.8,9.7,3.8c-6.8,3-3.6,9.7-3.6,9.7C1042.6,504,1035.8,507,1035.8,507z"
              ></path>
              <path
                className="star2"
                d="M543,94.2c6.7-3,3.8-9.8,3.8-9.8c2.6,5.9,9.7,3.8,9.7,3.8c-6.8,3-3.6,9.7-3.6,9.7C549.8,91.2,543,94.2,543,94.2z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="banner_inner">
          <div className="container">
            <div className="banner_content_inner text-center">
              {data_banner.Title ? (
                <h1 key={Date.now() * Math.random()}>{data_banner.Title}</h1>
              ) : null}
              {data_banner.SubText ? (
                <p key={Date.now() * Math.random()}>{data_banner.SubText}</p>
              ) : null}
              <div className="text-center btn_wrap w-100">
                {data_banner.CTA
                  ? data_banner.CTA.map((item, i) => (
                      <a
                        href="#"
                        key={Date.now() * Math.random()}
                        className={
                          i > 0 ? "basic_btn" : "basic_btn basic_btn_lt"
                        }
                      >
                        {item.Name}
                      </a>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sec_block1 sec_blck">
        <div className="container">
          <div className="alter_box_row w-100">
            <div className="row sec_row align-items-center">
              <div className="col-lg-6 col-5 lft_blk">
                <figure className="bounce bounce2 anim">
                  {data_sec1.Images
                    ? data_sec1.Images.map((item, i) => (
                        <img
                          src={`../src/assets/images/${item.Path}`}
                          alt={item.Name}
                          key={Date.now() * Math.random()}
                          className={i ? "bounce" : null}
                        />
                      ))
                    : null}
                </figure>
              </div>
              <div className="col-lg-6 col-7 rt_blk">
                {data_sec1.Title && (
                  <h2 key={Date.now() * Math.random()}>{data_sec1.Title}</h2>
                )}
                {data_sec1.SubText && (
                  <p key={Date.now() * Math.random()}>{data_sec1.SubText}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sec_timeline home_sec_timeline">
        <div className="top_curve">
          <svg viewBox="0 0 1441 104">
            <path
              fill="#ffffff"
              d="M0,104S262.32,22.25,722.5,22.25,1441,104,1441,104V0H0Z"
            ></path>
          </svg>
        </div>
        <div className="top_curve2">
          <svg viewBox="0 0 186 123">
            <polygon
              fill="#94cbff"
              points="0 123 0 0 186 0 68.24 122.51 0 123"
            ></polygon>
          </svg>
        </div>

        <div className="container">
          <div className="header">
            {data_sec2.Title ? (
              <h2 key={Date.now() * Math.random()}>{data_sec2.Title}</h2>
            ) : null}
            {data_sec2.SubText ? (
              <p key={Date.now() * Math.random()}>{data_sec2.SubText}</p>
            ) : null}
          </div>
          <div className="timeline">
            <ul className="timeline_box num_count">
              {data_sec2.Features
                ? data_sec2.Features.map((item, i) => (
                    <li
                      className="row sec_row align-items-center"
                      key={Date.now() * Math.random()}
                    >
                      <div className="col-lg-6 col-4 lft_blk">
                        <figure
                          className={
                            i % 2
                              ? "timeline_inner bounce bounce2"
                              : "timeline_inner bounce"
                          }
                        >
                          <img
                            src={`../src/assets/images/${item.Images.Path}`}
                            key={Date.now() * Math.random()}
                            alt={item.Images.Name}
                          />
                        </figure>
                      </div>
                      <div className="col-lg-6 col-8 rt_blk">
                        <div className="timeline_inner">
                          {item.Title ? (
                            <p key={Date.now() * Math.random()}>{item.Title}</p>
                          ) : null}
                          {item.SubText ? (
                            <p key={Date.now() * Math.random()}>
                              <small>{item.SubText}</small>
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </li>
                  ))
                : null}
            </ul>
            {data_sec2.CTA ? (
              <div
                className="btn_block text-center"
                key={Date.now() * Math.random()}
              >
                <a href="#" className="basic_btn basic_btn_lt lg_btn">
                  {data_sec2.CTA.Name}
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="location_sec section">
        <div className="container">
          <div className="header">
            {data_sec3.Title ? (
              <h2 key={Date.now() * Math.random()}>{data_sec3.Title}</h2>
            ) : null}
            {data_sec3.SubText ? (
              <p key={Date.now() * Math.random()}>{data_sec3.SubText}</p>
            ) : null}
          </div>
          <div className="bg_loc_img">
            {data_sec3.Images ? (
              <img
                src={`../src/assets/images/${data_sec3.Images.Path}`}
                key={Date.now() * Math.random()}
                alt={data_sec3.Images.Name}
              />
            ) : null}
            <div className="cntry_pos">
              <svg id="map_Layer_1" viewBox="0 0 1079.9 532.2">
                <g id="dot_4">
                  <g id="zoom4">
                    <g id="circle">
                      <circle
                        id="Rounded_Rectangle_1"
                        className="cls-1"
                        cx="837.74"
                        cy="321.11"
                        r="21.32"
                        opacity="0.66"
                      />
                      <circle
                        id="Rounded_Rectangle_1_copy"
                        fill="#fff"
                        opacity="0.43"
                        className="cls-2"
                        cx="838.19"
                        cy="320.66"
                        r="13.19"
                      />
                    </g>
                    <text
                      fill="#fff"
                      className="cls-3"
                      transform="translate(800.73 295.45)"
                    >
                      Indonesia
                    </text>
                  </g>
                  <circle
                    id="dot4"
                    fill="#00b456"
                    className="cls-4"
                    cx="838.5"
                    cy="321.06"
                    r="4.72"
                  />
                </g>
                <g id="dot_3">
                  <g id="zoom3">
                    <g id="circle-2">
                      <circle
                        id="Rounded_Rectangle_1-2"
                        fill="#fff"
                        opacity="0.66"
                        className="cls-1"
                        cx="765.87"
                        cy="222.71"
                        r="21.32"
                      />
                      <circle
                        id="Rounded_Rectangle_1_copy-2"
                        fill="#fff"
                        opacity="0.43"
                        className="cls-2"
                        cx="766.33"
                        cy="222.26"
                        r="13.2"
                      />
                    </g>
                    <text
                      fill="#fff"
                      className="cls-3"
                      transform="translate(750.98 196.45)"
                    >
                      India
                    </text>
                  </g>
                  <circle
                    id="dot3"
                    fill="#00b456"
                    className="cls-4"
                    cx="766.96"
                    cy="221.81"
                    r="4.72"
                  />
                </g>
                <g id="dot_2">
                  <g id="zoom2">
                    <g id="circle-3">
                      <circle
                        id="Rounded_Rectangle_1-3"
                        fill="#fff"
                        opacity="0.66"
                        className="cls-1"
                        cx="842.35"
                        cy="120.62"
                        r="21.31"
                      />
                      <circle
                        id="Rounded_Rectangle_1_copy-3"
                        fill="#fff"
                        opacity="0.43"
                        className="cls-2"
                        cx="842.8"
                        cy="120.17"
                        r="13.2"
                      />
                    </g>
                    <text
                      className="cls-3"
                      fill="#fff"
                      transform="translate(817 93.45)"
                    >
                      Russia
                    </text>
                  </g>
                  <circle
                    id="dot2"
                    fill="#00b456"
                    className="cls-4"
                    cx="842.5"
                    cy="120.06"
                    r="4.72"
                  />
                </g>
                <g id="dot_1">
                  <g id="zoom1">
                    <g id="circle-4">
                      <circle
                        id="Rounded_Rectangle_1-4"
                        fill="#fff"
                        opacity="0.66"
                        className="cls-1"
                        cx="379.28"
                        cy="378.72"
                        r="21.31"
                      />
                      <circle
                        id="Rounded_Rectangle_1_copy-4"
                        fill="#fff"
                        opacity="0.43"
                        className="cls-2"
                        cx="379.73"
                        cy="378.27"
                        r="13.19"
                      />
                    </g>
                    <text
                      className="cls-3"
                      fill="#fff"
                      transform="translate(360.07 353.2)"
                    >
                      Brasil
                    </text>
                  </g>
                  <circle
                    id="dot1"
                    fill="#00b456"
                    className="cls-4"
                    cx="379.5"
                    cy="379.06"
                    r="4.72"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section sec_block1 sec_blck">
        <div className="container">
          <div className="header">
            {data_sec4.Title ? (
              <h2 key={Date.now() * Math.random()}>{data_sec4.Title}</h2>
            ) : null}
            {data_sec4.SubText ? (
              <p key={Date.now() * Math.random()}>{data_sec4.SubText}</p>
            ) : null}
            {data_sec4.CTA ? (
              <div
                className="text-center btn_wrap w-100"
                key={Date.now() * Math.random()}
              >
                {data_sec4.CTA.map((item, i) => (
                  <a
                    href="#"
                    key={Date.now() * Math.random()}
                    className={i % 2 ? "basic_btn" : "basic_btn basic_btn_lt"}
                  >
                    {item.Name}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
          {data_sec4.Features ? (
            <div className="alter_box_row w-100">
              {data_sec4.Features.map((item, i) => (
                <div
                  className="row sec_row align-items-center"
                  key={Date.now() * Math.random()}
                >
                  <div className="col-lg-6 col-5 lft_blk">
                    {item.Images ? (
                      <figure className="bounce bounce2">
                        <img
                          src={`./src/assets/images/${item.Images.Path}`}
                          alt={item.Images.Name}
                        />
                      </figure>
                    ) : null}
                  </div>
                  <div className="col-lg-6 col-7 rt_blk">
                    {item.Title ? <h2>{item.Title}</h2> : null}

                    {item.SubText ? <p>{item.SubText}</p> : null}

                    {item.CTA ? (
                      <a href="#" className="readmore">
                        {item.CTA.Name}
                      </a>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="joinus_sec">
        <div className="container">
          <div className="joinus_box">
            <div className="joinus_inner row align-items-center">
              <div className="col-lg-6 col-sm-12 lft_join">
                {data_sec5.Title ? (
                  <h2 key={Date.now() * Math.random()}>{data_sec5.Title}</h2>
                ) : null}
                {data_sec5.SubText ? (
                  <p key={Date.now() * Math.random()}>{data_sec5.SubText}</p>
                ) : null}
              </div>
              <div className="col-lg-6 col-sm-12 rt_join">
                {data_sec4.CTA ? (
                  <div className="btn_wrap w-100">
                    {data_sec4.CTA.map((item, i) => (
                      <a
                        href="#"
                        key={Date.now() * Math.random()}
                        className={
                          i % 2 ? "basic_btn" : "basic_btn basic_btn_lt"
                        }
                      >
                        {item.Name}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
