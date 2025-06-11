import type { ReactNode } from "react";

interface ListProps {
  dataSource: Array<any>;
  render: (list: Array<any>) => ReactNode | Promise<ReactNode>;
}

function List({ dataSource, render }: ListProps) {
  return render(dataSource);
}

export default List;
