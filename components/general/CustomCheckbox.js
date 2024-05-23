'use client';

import { useRef } from 'react';

function CustomCheckbox({ children, defaultValue = false }) {
  const inputElement = useRef(null);

  function handleCheckbox() {
    if (inputElement.current) {
      inputElement.current.checked = !inputElement.current.checked;
    }
  }

  return (
    <div className='flex justify-end gap-3 items-center'>
      <div className='content'>
        <label className='checkBox'>
          <input
            type='checkbox'
            name='breakfast'
            defaultChecked={defaultValue}
            ref={inputElement}
          />
          <div className='transition'></div>
        </label>
      </div>

      <p
        className='text-[1rem] tracking-wider cursor-pointer'
        onClick={handleCheckbox}
      >
        {children}
      </p>
    </div>
  );
}

export default CustomCheckbox;
