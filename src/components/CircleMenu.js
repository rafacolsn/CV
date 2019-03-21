import React from 'react';
import PieMenu, { Slice } from 'react-pie-menu';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
 
export default ({ x, y }) => (
  <PieMenu 
    radius='125px' 
    centerRadius='30px'
    centerX={x}
    centerY={y}
  >
    {/* Contents */}
    <Slice><FontAwesomeIcon icon="home" size="2x" /></Slice>
    <Slice onSelect={() => window.open('https://www.facebook.com', '_blank')}>
      <FontAwesomeIcon icon="facebook-f" size="2x" />
    </Slice>
    <Slice onSelect={() => window.open('https://www.twitter.com', '_blank')}>
      <FontAwesomeIcon icon="twitter" size="2x" />
    </Slice>
    <Slice onSelect={() => window.open('https://www.linkedin.com', '_blank')}>
      <FontAwesomeIcon icon="linkedin-in" size="2x" />
    </Slice>
    <Slice onSelect={() => window.open('https://github.com/psychobolt/react-pie-menu', '_blank')}>
      <FontAwesomeIcon icon="github" size="2x" />
    </Slice>
    <Slice onSelect={() => window.open('https://en.wikipedia.org/wiki/RSS', '_blank')}>
      <FontAwesomeIcon icon="rss" size="2x" />
    </Slice>
    <Slice onSelect={() => window.open('https://www.pinterest.com/', '_blank')}>
      <FontAwesomeIcon icon="pintrest" size="2x" />
    </Slice>
    <Slice><FontAwesomeIcon icon="asterisk" size="2x" /></Slice>
  </PieMenu>
);