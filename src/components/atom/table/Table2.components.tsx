import React from 'react'

export interface Table2Props {
    headers?: HeaderInterface[];
    rows?: any[];
}

export interface HeaderInterface {
    text?: string,
    id: string,
}

export const Table2: React.FC<Table2Props> = ({headers = [], rows = []}) => {

    return (
       <div>
            <table>
                <thead>
                    <tr>
                        {
                            headers.map((item) => (
                                <th key={item.id}>
                                    {
                                        item.text
                                    }
                                </th>
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
                                        <td key={`${item.id}-${index}`}>
                                            {
                                                row[item.id]
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}