function MapMembers(data) {
    return (
        <tbody>
            {
                data.map(element => <tr>
                    <td>{element.id}</td>
                    <td>{element.name}</td>
                    <td>{element.age}</td>
                </tr>)
            }
        </tbody>
    );
}

export function MembersTable(data) {
    const tbl = (<table>
         <thead>
             <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
             </tr>
        </thead>
        {MapMembers(data)}
    </table>)
    return tbl;
}
