"use client";
import { useState } from "react";

export default function CreateUser() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        await fetch("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email }),
        });
        setName("");
        setEmail("");
        location.reload();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-2">
                <input
                    className="border rounded p-2"
                    placeholder="Ім'я"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    className="border rounded p-2"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                    Створити
                </button>
            </div>
        </form>
    );
}
