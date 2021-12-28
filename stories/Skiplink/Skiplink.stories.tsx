import React, { useRef, useEffect } from 'react';
import { Skiplink, SkiplinkItem } from '../../src';

export const _Esempi = () => {
  const containerRef = useRef(null);

  const footerRef = useRef(null);

  useEffect(() => {
    // We focus the container here since it is hosted inside Storybook's iframe
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  const onClick = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView();
    }
  };

  return (
    <section tabIndex={-1} ref={containerRef}>
      <div id='#main' />
      <div id='#footer' ref={footerRef} />

      <Skiplink>
        <SkiplinkItem href='#main'>Skip to main content</SkiplinkItem>
        <SkiplinkItem onClick={onClick}>Skip to footer</SkiplinkItem>
      </Skiplink>
    </section>
  );
};

export default {
  title: 'Componenti/Skiplink'
};
