export const TasksInput = () => {
    return <div className="flex flex-col justify-center items-center gap-4 w-[70%] mt-5 task-input h-screen tsk-input">
        <h1 className="text-center font-bold text-4xl">Listes des differentes et Programme</h1>
        <form action="" className="w-1/2">
            <div className="mb-3">
                <label htmlFor="nmbr tache" className="mb-3"> Nombre de tache</label>
                <input type="number" className="w-full p-2 border-2" placeholder="number of Task"/>
            </div>
            <div className="mb-3">
                <label htmlFor="nmbr tache" className="mb-3">Nombre de tache faite</label>
                <input type="number" className="w-full p-2 border-2" placeholder="task Done"/>
            </div>
            <div className="mb-3">
                <label htmlFor="nmbr tache" className="mb-3"> Nombre de Programme</label>
                <input type="number" className="w-full p-2 border-2" placeholder="Programme"/>
            </div>

            <button className="w-full p-2 bg-[rgb(19,43,78)] text-white font-bold text-2xl">send</button>
        </form>
    </div>;
}