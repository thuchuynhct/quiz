
function Form({ onSubmit, children, btnText = "Next" }: { onSubmit: any, children: JSX.Element, btnText?: string }) {
    return (
        <form onSubmit={onSubmit} className="sm:px-1 flex flex-col gap-y-5 max-w-[800px] w-[95%] px-[50px] py-10 rounded-3xl items-center justify-center bg-white">
            {children}
            <button className="hover:-translate-y-1 text-white uppercase font-[500] bg-[#333] rounded-[40px] px-16 py-3 transition-all">{btnText}</button>
        </form>
    )
}

export default Form