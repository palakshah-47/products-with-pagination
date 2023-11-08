import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined";
import "../../styles.css";

export default Pagination = ({ prodcuts, total, page, setPage }) => {
  const handleChange = (page) => {
    if (page + 1 > 0 || page + 1 <= total / 10) {
      setPage(page + 1);
    }
  };

  const handlePrev = (page) => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = (page) => {
    if (page < total / 10) setPage(page + 1);
  };
  return (
    <div className={"pagination"}>
      <span
        className={page > 1 ? "" : "pagination-disabled"}
        onClick={() => handlePrev(page)}
      >
        <ArrowLeftOutlined />
      </span>
      {[...Array(total / 10)].map((_, i) => (
        <span
          className={page === i + 1 ? "pagination-selected" : ""}
          key={`item-${i}-key`}
          onClick={() => handleChange(i)}
        >
          {i + 1}
        </span>
      ))}

      <span
        className={page < 10 ? "" : "pagination-disabled"}
        onClick={() => handleNext(page)}
      >
        <ArrowRightOutlined />
      </span>
    </div>
  );
};
