const CardTitle = ({ children, classNames }) => {
    return (
        <h3 className={`font-semibold text-[#072635] ${classNames}`}>{children}</h3>
    )
}

export default CardTitle