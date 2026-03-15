import React from 'react';
import { Col, Row } from 'antd';

import CharacteristicRadar, { characteristicSeries } from './CharacteristicRadar';

export default function CharacteristicsDynamic() {
  const [visibleSeries, infraredSeries, fusionSeries] = characteristicSeries;

  return (
    <div className="home-page-wrapper section-shell" id="characteristics">
      <div className="home-page section-block">
        <div className="title-wrapper">
          <h1 className="title-h1">IVIF Characteristics</h1>
        </div>
        <Row gutter={[24, 24]} align="stretch">
          <Col span={24}>
            <div className="section-card radar-layout-card">
              <div className="radar-layout">
                <div className="radar-stack">
                  <CharacteristicRadar {...visibleSeries} />
                  <CharacteristicRadar {...infraredSeries} />
                </div>
                <CharacteristicRadar {...fusionSeries} large />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
