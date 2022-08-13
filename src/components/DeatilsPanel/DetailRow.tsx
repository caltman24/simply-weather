interface DetailRowProps {
  title?: string;
  value?: number | string;
  unit?: string;
}

const DetailRow = ({ title, value, unit }: DetailRowProps) => {
  return (
    <div className="detail-row">
      <p className="name">{title}</p>
      {/* If value is undefined then return 0 */}
      <p className="value">{`${value || 0}${unit}`}</p>
    </div>
  );
};

DetailRow.defaultProps = {
  unit: "",
};

export default DetailRow;
