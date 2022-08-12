interface DetailRowProps {
  title?: string;
  value?: number | string;
  unit?: string;
}

const DetailRow = ({ title, value, unit }: DetailRowProps) => {
  return (
    <div className="detail-row">
      <p className="name">{title}</p>
      <p className="value">{`${value}${unit}`}</p>
    </div>
  );
};

DetailRow.defaultProps = {
  unit: "",
};

export default DetailRow;
