import React, { useEffect, useRef, useState } from 'react';

const AXES = [
  ['Glare', 'Immunity'],
  ['Living Target', 'Detection'],
  ['Info', 'Richness'],
  ['Cost', 'Efficiency'],
  ['Depth'],
  ['Data', 'Resolution'],
  ['Environmental', 'Robustness'],
];

const axisLabelToString = (label) => label.join(' ');

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function polarToCartesian(angle, radius, center) {
  return {
    x: center + Math.cos(angle) * radius,
    y: center + Math.sin(angle) * radius,
  };
}

function buildPolygon(values, radius, center, maxValue, progress) {
  return values
    .map((value, index) => {
      const angle = (-Math.PI / 2) + (Math.PI * 2 * index) / values.length;
      const pointRadius = (radius * clamp(value, 0, maxValue) * progress) / maxValue;
      const point = polarToCartesian(angle, pointRadius, center);
      return `${point.x},${point.y}`;
    })
    .join(' ');
}

function buildPoints(values, radius, center, maxValue, progress) {
  return values.map((value, index) => {
    const angle = (-Math.PI / 2) + (Math.PI * 2 * index) / values.length;
    const pointRadius = (radius * clamp(value, 0, maxValue) * progress) / maxValue;
    return polarToCartesian(angle, pointRadius, center);
  });
}

function buildLabels(radius, center) {
  return AXES.map((label, index) => {
    const angle = (-Math.PI / 2) + (Math.PI * 2 * index) / AXES.length;
    const point = polarToCartesian(angle, radius + 28, center);
    const isLeft = point.x < center - 24;
    const isRight = point.x > center + 24;
    return {
      label,
      x: point.x,
      y: point.y,
      anchor: isLeft ? 'end' : isRight ? 'start' : 'middle',
    };
  });
}

export const characteristicSeries = [
  {
    key: 'visible',
    title: 'Visible Image',
    color: '#C6A24A',
    summary:
      'Visible sensing stays stronger on information richness, cost efficiency, and data resolution, but is weaker on glare immunity and harsh environments.',
    values: [1, 2, 4, 4, 1, 4, 1],
    tooltipLabel: 'Visible Strength',
  },
  {
    key: 'infrared',
    title: 'Infrared Image',
    color: '#C97A7A',
    summary:
      'Infrared sensing favors living-target detection and environmental robustness, but gives up information richness, depth, and cost efficiency.',
    values: [4, 5, 1, 2, 0, 5, 4],
    tooltipLabel: 'Infrared Strength',
  },
  {
    key: 'fusion',
    title: 'Fusion Output',
    color: '#68AEB2',
    summary:
      'Fusion combines the strongest parts of both modalities, which is why your source figure shows a broader and more balanced capability envelope.',
    values: [5, 5, 5, 1, 1, 5, 4],
    tooltipLabel: 'Fusion Strength',
  },
];

export default function CharacteristicRadar({ title, color, summary, values, tooltipLabel, large }) {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [tooltip, setTooltip] = useState(null);
  const wrapRef = useRef(null);
  const size = large ? 430 : 360;
  const center = size / 2;
  const radius = large ? 160 : 132;
  const maxValue = 5;
  const labels = buildLabels(radius, center);
  const points = buildPoints(values, radius, center, maxValue, progress);
  const polygon = buildPolygon(values, radius, center, maxValue, progress);

  useEffect(() => {
    let frameId = 0;
    let startTime = 0;
    const duration = 850;

    const tick = (timestamp) => {
      if (!startTime) {
        startTime = timestamp;
      }
      const nextProgress = clamp((timestamp - startTime) / duration, 0, 1);
      setProgress(nextProgress);
      if (nextProgress < 1) {
        frameId = window.requestAnimationFrame(tick);
      }
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const updateTooltip = (point, index) => {
    const bounds = wrapRef.current?.getBoundingClientRect();
    if (!bounds) {
      return;
    }
    const left = point.x / size * bounds.width;
    const top = point.y / size * bounds.height;
    setActiveIndex(index);
    setTooltip({
      left,
      top,
      axis: axisLabelToString(AXES[index]),
      value: values[index],
      alignLeft: left > bounds.width * 0.56,
    });
  };

  return (
    <div className={`radar-panel${large ? ' radar-panel-large' : ''}`}>
      <div className="radar-panel-head">
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>
      <div
        className="radar-svg-wrap"
        ref={wrapRef}
        onMouseLeave={() => {
          setActiveIndex(null);
          setTooltip(null);
        }}
      >
        <svg
          className="radar-svg"
          viewBox={`0 0 ${size} ${size}`}
          role="img"
          aria-label={`${title} characteristic radar chart`}
        >
          <defs>
            <linearGradient id={`radar-fill-${title.replace(/\s+/g, '-').toLowerCase()}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.28" />
              <stop offset="100%" stopColor={color} stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {[1, 2, 3, 4, 5].map((level) => {
            const ringRadius = radius * level / maxValue;
            return (
              <circle
                key={level}
                cx={center}
                cy={center}
                r={ringRadius}
                className={`radar-ring${level % 2 === 0 ? ' radar-ring-alt' : ''}`}
              />
            );
          })}

          {AXES.map((_, index) => {
            const angle = (-Math.PI / 2) + (Math.PI * 2 * index) / AXES.length;
            const outer = polarToCartesian(angle, radius, center);
            return (
              <line
                key={`axis-${axisLabelToString(AXES[index])}`}
                x1={center}
                y1={center}
                x2={outer.x}
                y2={outer.y}
                className="radar-axis-line"
              />
            );
          })}

          <polygon
            points={polygon}
            fill={`url(#radar-fill-${title.replace(/\s+/g, '-').toLowerCase()})`}
            stroke={color}
            strokeWidth="2.5"
            className="radar-shape"
          />

          {points.map((point, index) => (
            <g key={`${title}-${axisLabelToString(AXES[index])}`}>
              <circle
                cx={point.x}
                cy={point.y}
                r={activeIndex === index ? 6 : 4}
                fill="#fff"
                stroke={color}
                strokeWidth="2"
                className="radar-node"
                onMouseEnter={() => updateTooltip(point, index)}
                onMouseMove={() => updateTooltip(point, index)}
              />
              <circle
                cx={point.x}
                cy={point.y}
                r="12"
                fill="transparent"
                onMouseEnter={() => updateTooltip(point, index)}
                onMouseMove={() => updateTooltip(point, index)}
              />
            </g>
          ))}

          {labels.map((label) => (
            <text key={`${title}-${axisLabelToString(label.label)}`} x={label.x} y={label.y} textAnchor={label.anchor} className="radar-axis-label">
              {label.label.map((line, index) => (
                <tspan key={`${axisLabelToString(label.label)}-${line}`} x={label.x} dy={index === 0 ? 0 : 14}>
                  {line}
                </tspan>
              ))}
            </text>
          ))}
        </svg>

        {tooltip ? (
          <div
            className={`radar-tooltip${tooltip.alignLeft ? ' radar-tooltip-left' : ''}`}
            style={{ left: tooltip.left, top: tooltip.top }}
          >
            <strong>{tooltip.axis}</strong>
            <span>
              <i style={{ backgroundColor: color }} />
              {tooltipLabel}: {tooltip.value}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
