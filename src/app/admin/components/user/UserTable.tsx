import {
    Badge,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Text,
    Title,
} from "@tremor/react";
import Link from "next/link";

const UserTable = () => {
    const renderTableBody = () => {

    }

    return (
        <Card>
            <Title>List of Users</Title>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Property</TableHeaderCell>
                    </TableRow>
                    <TableBody>

                    </TableBody>
                </TableHead>
                <TableBody>

                </TableBody>
            </Table>
        </Card>   
    );
}

export default UserTable;