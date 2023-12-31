import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";

const Users = () => {

    const [userdata, setUserdata] = useState("");
    const [loading, setLoading] = useState(false);
    const [isediting, setIsEditing] = useState(false);
    const [editingUser, setEditingUser] = useState(false);

    // console.log(userdata);

    async function fetchUserData() {
        setLoading(true);
        try {
            const result = await fetch("https://dummyjson.com/users");
            const data = await result.json();
            // console.log(data);
            setUserdata(data.users);
            console.log(userdata);
        }
        catch (error) {
            console.log("error occur");
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    console.log(userdata);

    function onDeleteUser(record) {
        console.log(record);
        Modal.confirm({
            title: "Are you sure, you want to delete this user record ?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                setUserdata((prev) => {
                    return prev.filter((user) => user.id !== record.id);
                });
            },
        })
    }

    function onEditUser(record) {
        setIsEditing(true);
        setEditingUser({ ...record });
    };

    function resetEditing() {
        setIsEditing(false);
        setEditingUser(null);
    };

    const onAddUser = () => {

        const newUser = {
            firstName: " ",
            lasttName: " ",
            email: "",
            phone: "",
        };
        setUserdata((pre) => {
            return [...pre, newUser];
        });
    };

    return (

        <>
            <Typography.Title level={4} className=" mt-2">
                Users
            </Typography.Title>

            <Table
                columns={[
                    {
                        key: '1',
                        title: "firstName",
                        dataIndex: "firstName",
                    },
                    {
                        key: '2',
                        title: "lastName",
                        dataIndex: "lastName",
                    },
                    {
                        key: '3',
                        title: "email",
                        dataIndex: "email",
                    },
                    {
                        key: '4',
                        title: "phone",
                        dataIndex: "phone",
                    },
                    {
                        key: '5',
                        title: "Actions",
                        render: (record) => {
                            return (
                                <>
                                    <EditOutlined onClick={() => {
                                        onEditUser(record);
                                    }} />
                                    <DeleteOutlined onClick={() => {
                                        onDeleteUser(record);
                                    }}
                                        style={{ color: "red", marginLeft: 12 }}
                                    />
                                </>
                            )
                        }
                    },


                ]}
                loading={loading}
                dataSource={userdata}
                pagination={{
                    pageSize: 5,
                }}
            ></Table>

            <Button onClick={onAddUser} style={{ marginLeft: "30rem", marginBottom: "2rem", background: "#90EE90" }}>Add New User</Button>

            <Modal
                title="Edit User"
                open={isediting}
                okText="Save"
                okType="cool"
                onCancel={() => {
                    resetEditing();
                }}
                onOk={() => {
                    setUserdata((prev) => {
                        return prev.map((user) => {
                            if (user.id === editingUser.id) {
                                return editingUser;
                            } else {
                                return user;
                            }
                        });
                    });
                    resetEditing();
                }}
                className="  relative top-[12rem]"
            >
                <Input
                    value={editingUser?.firstName}
                    onChange={(e) => {
                        setEditingUser((prev) => {
                            return {
                                ...prev,
                                firstName: e.target.value,
                            }
                        });
                    }}
                />

                <Input
                    value={editingUser?.lastName}
                    onChange={(e) => {
                        setEditingUser((prev) => {
                            return {
                                ...prev,
                                lastName: e.target.value,
                            }
                        });
                    }}
                />

                <Input
                    value={editingUser?.email}
                    onChange={(e) => {
                        setEditingUser((prev) => {
                            return {
                                ...prev,
                                email: e.target.value,
                            }
                        });
                    }}
                />

                <Input
                    value={editingUser?.phone}
                    onChange={(e) => {
                        setEditingUser((prev) => {
                            return {
                                ...prev,
                                phone: e.target.value,
                            }
                        });
                    }}
                />
            </Modal>
        </>

    )
}
export default Users;