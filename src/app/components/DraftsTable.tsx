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

const DraftsTable = () => {
    return(
        <Table className="mt-5">
            <TableHead>
                <TableRow className="border-y-2">
                    <TableHeaderCell className="border-x-2">Draft ID</TableHeaderCell>
                    <TableHeaderCell className="border-r-2">Checklist Type</TableHeaderCell>
                    <TableHeaderCell className="border-r-2">Date Created</TableHeaderCell>
                </TableRow>
            </TableHead>
        </Table>
    );
}

export default DraftsTable;