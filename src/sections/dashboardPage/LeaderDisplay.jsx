import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import stockProfileImage from "../../../src/assets/stock-profile-image.png";

const LeaderDisplay = ({ leaders }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeader>#</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>Weight PR</TableHeader>
        </tr>
      </thead>
      <tbody>
        {leaders.map((leader, index) => (
          <TableRow key={index}>
            <TableCell>{String(index)}</TableCell>
            <TableCell>{leader.name}</TableCell>
            <TableCell>{String(leader.PR_gain)}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  margin-top: 10px;
`;

const TableRow = styled.tr`
  background: #f5f5f5;
  &:nth-child(odd) {
    background: #fff;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const TableHeader = styled.th`
  padding: 8px;
  border: 1px solid #ddd;
  background: #f0f0f0;
  text-align: left;
`;

export default LeaderDisplay;
