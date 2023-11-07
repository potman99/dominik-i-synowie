interface Props {
  question: string;
  answer: string;
}

const FAQ_Item = (props: Props): JSX.Element => {
  return (
    <div className="mx-2 md:w-5/6 flex flex-col">
      <div className="bg-lightBrown w-full rounded-md py-3"><p className="mx-2">{props.question}</p></div>
      <div className="bg-darkBrown w-full rounded-md py-3 md:ml-10 mb-5"><p className="mx-2">{props.answer}</p></div>
    </div>
  );
};
export default FAQ_Item;
