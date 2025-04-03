let parent={
    'textAlign':'center'
}
function IpForm({setTodos}) {
    function handleSubmit(event){
        event.preventDefault();
        console.log(event);
        const value = event.target.todo.value;

        setTodos((prevTodos) => [
            ...prevTodos,
            { title: value, id: Math.random(), isCompleted: false },
        ]);
        event.target.reset();
    }

    return (<>
        <form onSubmit={handleSubmit} style={parent} className="mt-5">
            <label htmlFor="todo">
                <input
                className="p-2 input-styles"
                type="text"
                name="todo"
                id="todo"
                placeholder="Write your next task"></input>
            </label>
            <button className="greenBack p-1">
                <span className="visually-hidden">Submit</span>
                <svg
                clipRule="evenodd"
                fillRule="evenodd"
                fill="white"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                >
                <path
                    d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
                    fillRule="nonzero"
                />
                </svg>
            </button>
        </form>
    </>);
}

export default IpForm;