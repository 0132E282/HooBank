


const Button = ({ styles, children }) => {
    return (
        <button type='button' className={`rounded-lg py-4 px-6 bg-blue-gradient font-medium text-[18px] text-primary outline-none ${styles}`} >
            {children}
        </button>
    )
}

export default Button