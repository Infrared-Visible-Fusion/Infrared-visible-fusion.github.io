import React from 'react';
import logo from './images/logo.png';

export const ReviewNav00DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    children: logo,
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'linkNav',
        to: 'characteristics',
        children: 'Characteristics',
        className: 'menu-item',
      },
      {
        name: 'linkNav',
        to: 'datasets',
        children: 'Datasets',
        className: 'menu-item',
      },
      {
        name: 'linkNav',
        to: 'methods',
        children: 'Methods',
        className: 'menu-item',
      },
      {
        name: 'linkNav',
        to: 'citation',
        children: 'Citation',
        className: 'menu-item',
      },
      {
        name: 'linkNav',
        to: 'https://github.com/Infrared-Visible-Fusion/Awesome-IVIF-AD',
        children: 'GitHub',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
};

export const Banner30DataSource = {
  wrapper: { className: 'banner3 review-banner' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children:
          'Infrared and Visible Image Fusion for Downstream Advanced Vision Tasks in Autonomous Driving: A Review',
      },
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: 'Minyu Lin, Xiaoyu Huang, Xiaohui Zhu',
      },
      {
        name: 'time',
        className: 'banner3-time',
        children: 'University of Liverpool, Xi’an Jiaotong-Liverpool University',
      },
      {
        name: 'button',
        className: 'banner3-button',
        children: 'GitHub: Awesome-IVIF-AD',
        type: 'primary',
        href: 'https://github.com/Infrared-Visible-Fusion/Awesome-IVIF-AD',
        target: '_blank',
      },
    ],
  },
};

export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper review-footer-wrapper' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        Built for{' '}
        <a href="https://github.com/Infrared-Visible-Fusion/Awesome-IVIF-AD" target="_blank" rel="noreferrer">
          Awesome-IVIF-AD
        </a>{' '}
        with the same review-site structure as Radar-Camera-Fusion.
      </span>
    ),
  },
};
