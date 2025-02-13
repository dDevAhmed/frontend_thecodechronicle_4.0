const Divider = ({ classNames }) => {
    return (
        <div className={`relative ${classNames}`}>
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
            </div>
        </div>
    )
}

export default Divider