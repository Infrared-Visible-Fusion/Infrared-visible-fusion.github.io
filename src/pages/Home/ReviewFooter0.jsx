import React from 'react';
import TweenOne from 'rc-tween-one';

export default function ReviewFooter0({ dataSource }) {
  return (
    <div {...dataSource.wrapper}>
      <div className="home-page review-footer">
        <TweenOne animation={{ y: '+=20', opacity: 0, type: 'from' }} key="footer" {...dataSource.copyright}>
          {dataSource.copyright.children}
        </TweenOne>
      </div>
    </div>
  );
}
