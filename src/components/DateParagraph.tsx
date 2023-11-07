import React from 'react';

interface Props {
    date: string
    text: string
    dateColour?: string
}

const DateParagraph: React.FC<Props> = (props: Props) => {
  return (
  <div className='flex gap-12 text-lg'>
    <div>
        <p className={`font-headers  text-${props.dateColour}`}>{props.date}</p>
    </div>
    <div>
        <p>{props.text}</p>
    </div>
  </div>
  );
};

export default DateParagraph;
