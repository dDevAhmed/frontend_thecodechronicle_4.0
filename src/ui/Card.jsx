const Card = ({ children, classNames, style }) => {
    return (
        <div className={`overflow-hidden shadow ${classNames}`} style={style}>
            {children}
        </div>
    );
};

export default Card;
