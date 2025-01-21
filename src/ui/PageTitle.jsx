/* eslint-disable react/prop-types */

const PageTitle = ({ children, classNames }) => {
    return (
        <h3 className={`font-medium text-lg text-brand-primary-black ${classNames}`}>{children}</h3>
    )
}

export default PageTitle