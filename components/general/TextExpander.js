'use client';

import { useState } from 'react';

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? children
    : children.split(' ').slice(0, 40).join(' ') + ' . . .';

  return (
    <span>
      {displayText}{' '}
      <button
        className='text-primary-100 leading-3 pb-1 hover:text-accent-400 transition-colors'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'show less' : 'show more'}
      </button>
    </span>
  );
}

export default TextExpander;
