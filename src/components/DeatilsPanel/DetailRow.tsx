interface DetailRowProps {
  title: string;
  value: number | string;
}

const DetailRow = ({ title, value }: DetailRowProps) => {
  return (
    <div className="detail-row">
      <p className="name">{title}</p>
      <p className="value">{value}</p>
    </div>
  );
};

export default DetailRow;
