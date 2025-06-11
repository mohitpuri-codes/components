import type { ReactNode } from "react";

interface DataTableProps {
  columns: Array<string>;
  data: Array<Array<string>>;
  render: (
    columns: Array<string>,
    data: Array<Array<string>>
  ) => ReactNode | Promise<ReactNode>;
}

function DataTable({ columns, data, render }: DataTableProps) {
  return render(columns, data);
}

export default DataTable;
