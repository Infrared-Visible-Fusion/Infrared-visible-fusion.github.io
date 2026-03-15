import React, { useEffect, useMemo, useState } from 'react';

const TASK_META = {
  Detection: { color: '#9c6b60', label: 'Detection' },
  Segmentation: { color: '#4f9e55', label: 'Segmentation' },
  SOT: { color: '#3d83bd', label: 'SOT' },
  MOT: { color: '#9b72c5', label: 'MOT' },
};

const DATASET_SCALE_SERIES = [
  { key: 'kaist', year: 2015, name: 'KAIST', task: 'Detection', value: 95000, displayValue: '95k' },
  { key: 'gtot', year: 2016, name: 'GTOT', task: 'SOT', value: 15000, displayValue: '15k Fr.' },
  { key: 'mfnet', year: 2017, name: 'MFNet', task: 'Segmentation', value: 1600, displayValue: '1.6k' },
  { key: 'flir', year: 2018, name: 'FLIR v1/v2', task: 'Detection', value: 28000, displayValue: '28k' },
  { key: 'rgbt234', year: 2019, name: 'RGBT234', task: 'SOT', value: 234000, displayValue: '234k Fr.' },
  { key: 'dronevehicle', year: 2020, name: 'DroneVehicle', task: 'Detection', value: 8700, displayValue: '8.7k' },
  { key: 'pst900', year: 2020, name: 'PST900', task: 'Segmentation', value: 900, displayValue: '0.9k' },
  { key: 'llvip', year: 2021, name: 'LLVIP', task: 'Detection', value: 31000, displayValue: '31k' },
  { key: 'lasher', year: 2021, name: 'LasHeR', task: 'SOT', value: 730000, displayValue: '730k Fr.' },
  { key: 'm3fd', year: 2022, name: 'M3FD', task: 'Detection', value: 4200, displayValue: '4.2k' },
  { key: 'vtuav', year: 2022, name: 'VTUAV', task: 'SOT', value: 1700000, displayValue: '1.7M Fr.' },
  { key: 'vtmot-2022', year: 2022, name: 'VT-MOT', task: 'MOT', value: 21000, displayValue: '21k Fr.' },
  { key: 'fmb', year: 2023, name: 'FMB', task: 'Segmentation', value: 1500, displayValue: '1.5k' },
  { key: 'semanticrt', year: 2023, name: 'SemanticRT', task: 'Segmentation', value: 11400, displayValue: '11.4k' },
  { key: 'vtmot-2024', year: 2024, name: 'VT-MOT', task: 'MOT', value: 401000, displayValue: '401k Fr.' },
  { key: 'vt-tiny-mot', year: 2024, name: 'VT-TinyMOT', task: 'MOT', value: 93000, displayValue: '93k Fr.' },
];

const TICKS = [
  { value: 1e3, label: '10^3' },
  { value: 1e4, label: '10^4' },
  { value: 1e5, label: '10^5' },
  { value: 1e6, label: '10^6' },
];

const PLOT_HEIGHT = 380;
const BAR_NAME_ZONE = 82;
const YEAR_ZONE = 34;
const STAGE_HEIGHT = PLOT_HEIGHT + BAR_NAME_ZONE + YEAR_ZONE;
const PLOT_BOTTOM = BAR_NAME_ZONE + YEAR_ZONE;
const MIN_VALUE = 600;
const MAX_VALUE = 2e6;
const LOG_MIN = Math.log10(MIN_VALUE);
const LOG_MAX = Math.log10(MAX_VALUE);

function getBarHeight(value) {
  const ratio = (Math.log10(value) - LOG_MIN) / (LOG_MAX - LOG_MIN);
  return Math.max(8, ratio * PLOT_HEIGHT);
}

function getTickOffset(value) {
  return getBarHeight(value);
}

export default function DatasetScaleChart() {
  const [mounted, setMounted] = useState(false);
  const [activeKey, setActiveKey] = useState('vtuav');

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const groups = useMemo(() => {
    const yearMap = new Map();
    DATASET_SCALE_SERIES.forEach((item) => {
      if (!yearMap.has(item.year)) {
        yearMap.set(item.year, []);
      }
      yearMap.get(item.year).push(item);
    });

    return Array.from(yearMap.entries()).map(([year, items]) => ({
      year,
      items,
    }));
  }, []);

  const activeDataset =
    DATASET_SCALE_SERIES.find((item) => item.key === activeKey) || DATASET_SCALE_SERIES[0];
  const activeMeta = TASK_META[activeDataset.task];

  return (
    <div className="section-card dataset-chart-card">
      <div className="dataset-chart-head">
        <div className="dataset-chart-legend">
          {Object.entries(TASK_META).map(([key, meta]) => (
            <span className="dataset-chart-legend-item" key={key}>
              <i style={{ backgroundColor: meta.color }} />
              {meta.label}
            </span>
          ))}
        </div>
        <div className="dataset-chart-focus" aria-live="polite">
          <strong>{activeDataset.name}</strong>
          <span>{activeDataset.year}</span>
          <span style={{ color: activeMeta.color }}>{activeMeta.label}</span>
          <span>{activeDataset.displayValue}</span>
        </div>
      </div>

      <div className="dataset-chart-scroll">
        <div
          className="dataset-scale-chart"
          role="img"
          aria-label="Infrared-visible fusion dataset scale chart with a logarithmic axis."
        >
          <div className="dataset-scale-axis" style={{ height: STAGE_HEIGHT }}>
            <div className="dataset-scale-axis-title">Dataset Scale (Log Scale: Pairs / Frames)</div>
            {TICKS.map((tick) => (
              <span
                className="dataset-scale-axis-tick"
                key={tick.label}
                style={{ bottom: `${PLOT_BOTTOM + getTickOffset(tick.value)}px` }}
              >
                {tick.label}
              </span>
            ))}
          </div>

          <div className="dataset-scale-stage" style={{ height: STAGE_HEIGHT }}>
            {TICKS.map((tick) => (
              <div
                className="dataset-scale-gridline"
                key={tick.label}
                style={{ bottom: `${PLOT_BOTTOM + getTickOffset(tick.value)}px` }}
              />
            ))}
            <div className="dataset-scale-baseline" style={{ bottom: `${PLOT_BOTTOM}px` }} />

            <div className="dataset-scale-groups">
              {groups.map((group) => (
                <div className="dataset-year-group" key={group.year}>
                  <div className="dataset-year-bars">
                    {group.items.map((item, index) => {
                      const height = getBarHeight(item.value);
                      const isActive = item.key === activeDataset.key;

                      return (
                        <button
                          type="button"
                          className={`dataset-bar-item${isActive ? ' active' : ''}`}
                          key={item.key}
                          onMouseEnter={() => setActiveKey(item.key)}
                          onFocus={() => setActiveKey(item.key)}
                          title={`${item.name} | ${item.year} | ${TASK_META[item.task].label} | ${item.displayValue}`}
                        >
                          <div className="dataset-bar-stack" style={{ height: PLOT_HEIGHT }}>
                            <span
                              className="dataset-bar-value"
                              style={{ bottom: `${height + 12}px` }}
                            >
                              {item.displayValue}
                            </span>
                            <span
                              className="dataset-bar-fill"
                              style={{
                                height: mounted ? `${height}px` : '0px',
                                backgroundColor: TASK_META[item.task].color,
                                transitionDelay: `${index * 70}ms`,
                              }}
                            />
                          </div>
                          <span className="dataset-bar-name">{item.name}</span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="dataset-year-label">{group.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
