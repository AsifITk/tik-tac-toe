function Square({ row, col, value, updateBoard }) {
  return (
    <button onClick={(e) => updateBoard(row, col)} className="square">
      {value}
    </button>
  );
}

export default Square;
