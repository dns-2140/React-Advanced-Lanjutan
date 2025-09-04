import React from "react";

const TodoCounter = React.memo(
  ({ finishedCount, unFinishedCount, totalCount }) => {
    return (
      <div className="todoCounter">
        <span className="unfinished">
          Belum selesai <span>{unFinishedCount}</span>
        </span>
        <span className="finished">
          Selesai{" "}
          <span>
            {finishedCount} de {totalCount}
          </span>
        </span>
      </div>
    );
  }
);

export default TodoCounter;
