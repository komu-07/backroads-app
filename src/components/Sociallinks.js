import React from 'react';

const Sociallinks = ({ href, icon, itemClass }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default Sociallinks;
