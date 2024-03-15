import Link from "next/link";
import Todo from "@/04 entities/todo"
import { Metadata } from "next";

type TodoProps = {
    data: Todo[]
}

export const metadata: Metadata = {
    title: 'Список дел',
}


export default async function Todos() {
    const data = await getData();
    return (
        <>
            <div>Todos</div>

            <br></br>
            {/* <Link href="/todos/1">Todo 1</Link> */}
            <div className="flex flex-col gap-4 justify-center">
                {data.map(todo =>
                    <Link href={`/todos/${todo.id}`} key={todo.id} >{todo.caption}</Link>
                )}
            </div>
        </>
    );
}


export async function getData(): Promise<Todo[]> {
    const res = await fetch("http://localhost:3005/todos");
    return await res.json()

}