import { Link } from "react-router-dom";

interface Props {
  name: string;
  linkName: string;
  onClick?: React.MouseEventHandler
}

const NavItem = (props: Props): JSX.Element => {
  return (
    <div className="flex flex-col group  h-9">
      <Link
        to={props.linkName}
        className="font-bold cursor-pointer"
        onClick={props.onClick}
      >
        {props.name}
      </Link>
      <div className="bg-mainOrange h-1 px-4 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in"></div>
    </div>
  );
};
export default NavItem;
