"use client";
import { useEffect, useState } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [editing, setEditing] = useState(null);
    const [editData, setEditData] = useState({ name: "", email: "" });

    const fetchUsers = async () => {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const deleteUser = async id => {
        await fetch(`/api/users/${id}`, { method: "DELETE" });
        fetchUsers();
    };

    const startEdit = user => {
        setEditing(user.id);
        setEditData({ name: user.name || "", email: user.email });
    };

    const cancelEdit = () => {
        setEditing(null);
        setEditData({ name: "", email: "" });
    };

    const saveEdit = async id => {
        await fetch(`/api/users/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editData),
        });
        cancelEdit();
        fetchUsers();
    };

    return (
        <div className="space-y-4">
            {users.map(user => (
                <div
                    key={user.id}
                    className="p-4 border rounded flex justify-between items-center"
                >
                    {editing === user.id ? (
                        <div className="flex flex-col gap-2 w-full">
                            <input
                                className="border rounded p-1"
                                value={editData.name}
                                onChange={e => setEditData({ ...editData, name: e.target.value })}
                            />
                            <input
                                className="border rounded p-1"
                                value={editData.email}
                                onChange={e => setEditData({ ...editData, email: e.target.value })}
                            />
                            <div className="flex gap-2 mt-2">
                                <button onClick={() => saveEdit(user.id)} className="bg-green-600 text-white px-3 py-1 rounded">
                                    Зберегти
                                </button>
                                <button onClick={cancelEdit} className="bg-gray-400 text-white px-3 py-1 rounded">
                                    Скасувати
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div>
                                <p className="font-medium">{user.name}</p>
                                <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => startEdit(user)}
                                    className="text-blue-600 hover:underline"
                                >
                                    Редагувати
                                </button>
                                <button
                                    onClick={() => deleteUser(user.id)}
                                    className="text-red-600 hover:underline"
                                >
                                    Видалити
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
