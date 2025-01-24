/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const TanstackFormField = ({ children, form, name }) => {
  return (
    <form.Field name={name}>
      {(field) => (
        { children }
      )}
    </form.Field>
  )
}

export default TanstackFormField