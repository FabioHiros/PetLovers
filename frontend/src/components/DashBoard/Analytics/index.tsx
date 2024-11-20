import React from "react";

interface TableProps {
  title: string;
  data: Array<Record<string, any>>;
}

const AnalyticsTable: React.FC<TableProps> = ({ title, data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="mb-5">
        <h5 className="text-xl font-semibold mb-2 text-center">{title}</h5>
        <p className="text-center">No data available</p>
      </div>
    );
  }

  return (
    <div className="mb-5 max-w-screen-lg mx-auto">
      <h5 className="text-xl font-semibold mb-4 text-center">{title}</h5>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white border border-gray-300 shadow-md">
          <thead className="bg-gray-100">
            <tr>
              {Object.keys(data[0]).map((header) => (
                <th
                  key={header}
                  className="py-2 px-2 md:px-4 border-b text-sm md:text-base text-left"
                >
                  {header.replace(/^./, (str) => str.toUpperCase())}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="even:bg-gray-50">
                {Object.entries(item).map(([key, value], idx) => (
                  <td
                    key={idx}
                    className={`py-2 px-2 md:px-4 text-sm md:text-base border-b ${
                      typeof value === "string" ? "truncate max-w-xs" : ""
                    }`}
                    title={typeof value === "string" ? value : ""}
                  >
                    {typeof value === "object"
                      ? JSON.stringify(value)
                      : typeof value === "string"
                      ? value.length > 20
                        ? `${value.slice(0, 20)}...`
                        : value
                      : value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsTable;
