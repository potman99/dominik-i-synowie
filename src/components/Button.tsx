import React from 'react';

interface Props {
    name: string
    link: string
}

const Button: React.FC<Props> = (props: Props) => {
  return (
    <button className="bg-lightBrown w-36 h-9 md:w-48 md:h-10 rounded-xl font-medium text-xl
  hover:bg-mainOrange transition-all duration-1000 ease-out hover:scale-110"
  >
    <a className="flex justify-center items-center w-full h-full " target="_blank" href={props.link}>
      {props.name}
    </a>
  </button>
  );
};

export default Button;
