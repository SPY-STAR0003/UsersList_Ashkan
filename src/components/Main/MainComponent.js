import * as React from "react";
import { Container } from "@nextui-org/react";
import MainTable from "../Table/MainTable";
import AddNewUserButton from "./AddNewUserButton";
import ModalForAddUser from "../Modal/ModalForAddUser/ModalForAddUser";
import ModalForEditUser from "../Modal/ModalForEditUser/ModalForEditUser";

export default function MainComponent() {
  const [modalForAddUserStatus, setModalForAddUserStatus] =
    React.useState(false);

  const [ModalForEditUserStatus, setModalForEditUserStatus] =
    React.useState(false);

  const [users, setUsers] = React.useState([]);
  const [id, setId] = React.useState(0);

  return (
    <Container>
      {/* Add New User Button */}
      <AddNewUserButton
        setModalForAddUserStatusSwaper={setModalForAddUserStatus}
      />

      {/* Modal For Add User */}
      <ModalForAddUser
        modalForAddUserStatusSwaper={modalForAddUserStatus}
        setModalForAddUserStatusSwaper={setModalForAddUserStatus}
        usersSwaper={users}
        setUsersSwaper={setUsers}
      />

      {/* Modal For Edit User */}
      <ModalForEditUser
        ModalForEditUserStatusSwaper={ModalForEditUserStatus}
        setModalForEditUserStatusSwaper={setModalForEditUserStatus}
        usersSwaper={users}
        setUsersSwaper={setUsers}
        idSwaper={id}
      />

      {/* Main Table */}
      <MainTable
        setModalForEditUserStatusSwaper={setModalForEditUserStatus}
        usersSwaper={users}
        setUsersSwaper = {setUsers}
        setIdSwaper={setId}
      />
    </Container>
  );
}
