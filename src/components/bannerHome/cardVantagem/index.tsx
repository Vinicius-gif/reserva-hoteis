// CardVantagem.tsx

import React from 'react';
import { FaRegMoon, FaTag, FaCalendar } from 'react-icons/fa';

interface Props {
  describe: string;
  icon: 'moon' | 'tag' | 'calendar';
}

const CardVantagem = ({ describe, icon }: Props) => {
  let renderedIcon;

  if (icon === 'moon') {
    renderedIcon = <FaRegMoon size={40} />;
  } else if (icon === 'tag') {
    renderedIcon = <FaTag size={40} />;
  } else if (icon === 'calendar') {
    renderedIcon = <FaCalendar size={40} />;
  }

  return (
    <div className="flex items-center justify-center bg-blue-700 p-4 md:p-6 rounded-xl md:h-36">
      {renderedIcon && <span className="mr-2 text-white">{renderedIcon}</span>}
      <p className="ml-2 text-white text-base md:text-base lg:text-lg sm:text-sm">
        {describe}
      </p>
    </div>
  );
};

export default CardVantagem;
