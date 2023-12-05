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

const ChecklistTable = () => {
    const renderTableBody = () => {

    }

    return (
        <Card>
            <Title></Title>
                <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>User</TableHeaderCell>
                        <TableHeaderCell>Property</TableHeaderCell>
                        <TableHeaderCell>Date Submitted</TableHeaderCell>
                        <TableHeaderCell>Link</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                </TableBody>
            </Table>
        </Card>   
    );
}

export default ChecklistTable;