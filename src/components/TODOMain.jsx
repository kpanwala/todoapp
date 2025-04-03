function TODOMain(props) {
    return ( 
        <>
        <div className="parent">
            <div className="left text-left">
                <p>Task Done</p>
                <p>Keep it up</p>
            </div>
            <div className="right text-center">
                {props.todos_completed}/{props.total_todos}
            </div>
        </div>
        </>
     );
}

export default TODOMain;