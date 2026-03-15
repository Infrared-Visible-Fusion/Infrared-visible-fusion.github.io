import React from 'react';

import { citationLines, referenceSections } from './catalog.data';

export default function Reference() {
  let referenceNumber = 0;

  return (
    <div className="home-page-wrapper section-shell citation-shell" id="citation">
      <div className="home-page section-block">
        <div className="title-wrapper">
          <h1 className="title-h1">References and Citation</h1>
        </div>
        <div className="section-card reference-list-card references-panel">
          <h2>References</h2>
          <div className="reference-scroll">
            {referenceSections.map((group) => (
              <div className="reference-section" key={group.title}>
                <h3>{group.title}</h3>
                {group.items.map((item) => {
                  referenceNumber += 1;
                  return (
                    <p className="reference-entry" key={`${group.title}-${item.label}-entry`}>
                      <span className="reference-badge">[{referenceNumber}]</span>
                      <span>{item.text}</span>
                    </p>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
        <div className="section-card citation-card citation-single">
          <h2>Suggested Citation</h2>
          <pre className="citation-block">
            <code>{citationLines.join('\n')}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
