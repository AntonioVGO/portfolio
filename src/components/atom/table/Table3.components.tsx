import React from 'react'

export interface TableProps {
    headers?: HeaderInterface[];
    rows?: any[]
}

export interface HeaderInterface {
    text: string,
    id:string,
}

export const Table3: React.FC<TableProps> = ({headers = [], rows = []}) => {

  return (
    <div>
        <table className="m-10 border border-black px-3 py-3 w-fit bg-slate-50 shadow-lg font-extralight font-sans">
            <thead className="bg-gray-700 text-white border border-black">
                <tr>
                    {
                        headers.map((item) => (
                            <th key={ item.id }>{ item.text }</th>

                        ))
                    }
                </tr>
            </thead>

            <tbody>
                {
                    rows.map((row, index) => (
                        <tr key={index}>
                            {
                                headers.map((item, index) => (
                                    <td key={`${item.id}-${index}`}>{row[item.id]}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  );
};
