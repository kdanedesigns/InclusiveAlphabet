// components/CustomFontCharacter.tsx
import React from 'react';
const CustomFontCharacter: React.FC = () => {
  const customFontStyle = {
    fontFamily: 'OpenDyslexic-Regular',
    fontSize: '48px',
    padding: '10px',
    backgroundColor: 'blue',
  };

  return (
    <div>
      <span style={customFontStyle}>A</span>
    </div>
  );
};

export default CustomFontCharacter;
