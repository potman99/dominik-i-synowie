interface Props {
    bgColor: string;
    imgUrl: string;
    title: string;
}

const ServiceGraphic: React.FC<Props> = (props: Props) => {
    
  return (
    <div className={`${props.bgColor} flex items-center justify-center`}>
        <div>
            <h1>{props.title}</h1>
        </div>
        <div>
            <img src={props.imgUrl} />
        </div>
    </div>
  );
};

export default ServiceGraphic;
