import React from 'react';

const Pagelinks = ({ href, text, itemClass }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
};

export default Pagelinks;
