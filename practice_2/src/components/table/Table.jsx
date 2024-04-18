const Table = ({ netIncomes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Income</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((netIncome) => (
          <tr key={netIncome.brand}>
            <td>{netIncome.brand}</td>
            <td>{netIncome.income}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
