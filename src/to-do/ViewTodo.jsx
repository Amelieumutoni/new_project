import React from 'react';

export const ViewTodo = ({ todos, setTodos }) => {
    const deleteTodo = (id) => {
        const nw_data = todos.filter(todo => todo.id !== id);
        setTodos(nw_data);
    }

    const updateTodo = (id) => {
        const nw_data = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    status: !todo.status
                };
            }
            return todo;
        });
        setTodos(nw_data);
    }

    return (
        <>
            <div className='columns-3 bg-green-600 p-2'>
                <p className="font-bold text-white">Todo Name</p>
                <p className="font-bold text-white">Todo Status</p>
                <p className="font-bold text-white">Todo Actions</p>
            </div>
            {todos.map((todo, index) => (
                <div key={index} className='columns-3 bg-slate-100 p-2'>
                    <p className="font-bold text-gray-600">{todo.name}</p>
                    <p className="font-bold text-gray-600">{todo.status ? "done" : "not done"}</p>
                    <p className="font-bold text-gray-600">
                        <button onClick={() => deleteTodo(todo.id)} className='bg-red-500 text-xs text-white p-1 rounded-full'>Delete</button>
                        <button onClick={() => updateTodo(todo.id)} className='bg-green-500 text-xs text-white p-1 rounded-full'>Done</button>
                    </p>
                </div>
            ))}
        </>
    );
}
