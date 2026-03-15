import React from 'react';
import { Col, Row } from 'antd';

import comparison from './images/comparison.png';
import cover from './images/cover.png';
import cover2 from './images/cover2.png';

const highlightCards = [
  {
    title: 'Task-Driven Review',
    description:
      'The page is organized around downstream advanced vision tasks, so fusion quality is discussed through detection, segmentation, and tracking outcomes rather than image aesthetics alone.',
  },
  {
    title: 'Visible + Infrared Complementarity',
    description:
      'Your own figures already show why the site needs a dedicated visual section: visible images preserve structure, infrared images expose thermal saliency, and fusion aligns both cues.',
  },
  {
    title: 'Review-Site Flow',
    description:
      'This block replaces your senior’s radar plots with your comparison assets while preserving the same reading rhythm: intro, evidence, then tables.',
  },
];

export default function Characteristics() {
  return (
    <div className="home-page-wrapper section-shell" id="characteristics">
      <div className="home-page section-block">
        <div className="title-wrapper">
          <h1 className="title-h1">IVIF Characteristics</h1>
          <p className="section-intro">
            The homepage now follows the same research-portal feel as Radar-Camera-Fusion, but its content is
            fully grounded in your Infrared-Visible Fusion review materials.
          </p>
        </div>
        <Row gutter={[24, 24]} align="stretch">
          <Col xs={24} lg={14}>
            <div className="section-card">
              <div className="image-grid two-up">
                <div className="media-frame">
                  <img src={cover} alt="Infrared-visible fusion driving example" />
                </div>
                <div className="media-frame">
                  <img src={cover2} alt="Infrared raw signal and radiometric examples" />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={10}>
            <div className="section-card note-card">
              <h2>What this section communicates</h2>
              {highlightCards.map((item) => (
                <div className="feature-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col span={24}>
            <div className="section-card comparison-card">
              <div className="comparison-copy">
                <h2>Sensor Complementarity</h2>
                <p>
                  Your `comparison.png` naturally plays the role of the capability visualization in your
                  senior&apos;s site. It shows why RGB-T fusion remains useful in illumination-poor and
                  long-range driving conditions.
                </p>
              </div>
              <div className="media-frame comparison-frame">
                <img src={comparison} alt="Comparison between fused, infrared, and visible sensing" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
