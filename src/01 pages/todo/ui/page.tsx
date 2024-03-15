"use client"

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Todo() {

    let { id } = useParams();

    return (
        <>
            <div>Todo # {id}</div>
            <Link href="/todos">todos</Link>
        </>
    );
}
