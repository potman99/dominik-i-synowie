import { Link } from "react-router-dom";

interface Props {
  componentText: string;
  linkName: string;
}

const DropdownMenuItem: React.FC<Props> = (props: Props) => {
  return (
      <Link
        to={props.linkName}
        className="font-bold cursor-pointer py-2 rounded-lg hover:bg-mainOrange transition-all duration-1000 ease-out hover:scale-110"
      >
        <p className="text-center">{props.componentText}</p>
      </Link>
  );
};
export default DropdownMenuItem;
