import * as React from "react";
import { Table, Row, Col, Text, Popover } from "@nextui-org/react";
import { IconButton } from "../Icons/IconButton";
import { EditIcon } from "../Icons/EditIcon";

import CustomPopOver from "../popover/CustomPopOver";

export default function MainTable({ setModalForEditUserStatusSwaper }) {
  const openModalHandler = () => setModalForEditUserStatusSwaper(true);

  const columns = [
    { name: "NAME", uid: "name" },
    { name: "EMAIL", uid: "email" },
    { name: "PHONE", uid: "phone" },
    { name: "ROLE", uid: "role" },
    { name: "AGE", uid: "age" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const users = [
    {
      id: 0,
      name: "Tony Reichert",
      email: "tony.reichert@example.com",
      phone: "09306817596",
      role: "admin",
      age: "29",
    },
  ];

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return <Text>{cellValue}</Text>;
      case "phone":
        return <Text>{cellValue}</Text>;

      case "role":
        return user.role === "admin" ? <Text>Admin</Text> : <Text>Normal</Text>;

      case "age":
        return <Text>{cellValue}</Text>;

      case "actions":
        return (
          <Row>
            <Col
              css={{
                d: "flex",
                justifyContent: "flex-end",
              }}>
              <IconButton onClick={openModalHandler}>
                <EditIcon size={20} fill='#17C964' />
              </IconButton>
            </Col>
            <Col
              css={{
                d: "flex",
                justifyContent: "center",
              }}>
              <CustomPopOver />
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };

  return (
    <>
      <Table
        shadow
        bordered
        aria-label='Example table with custom cells'
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode='none'>
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={users}>
          {(item) => (
            <Table.Row>
              {(columnKey) => (
                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </>
  );
}
