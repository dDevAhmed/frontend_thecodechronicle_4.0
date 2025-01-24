/* eslint-disable react/prop-types */
import { useState } from 'react';
import { TagsInput } from "react-tag-input-component";

const TagsFormInput = ({ field }) => {
    const [selected, setSelected] = useState([]);

    return (
        <div>
            <p className='text-sm mb-1'>press enter (&#8617;) or comma (&#44;) to add new tag, backspace (&#8592;) to remove</p>
            <TagsInput
                // value={selected}
                // name="tags"
                // onChange={setSelected}
                placeHolder="enter tag"
                separators={["Enter", ","]}

                // for tanstack form
                // value={field.state.value} // Connect the editor's value to the form field state
                // onChange={(newValue) => field.handleChange(newValue)} // Update the form field on content change
                // onBlur={field.handleBlur} // Trigger validation on blur

                value={field.state.value || []} // Ensure a default empty array
                name="tags"
                onChange={(newValue) => field.handleChange(newValue)} // Update the form field on change
                onBlur={field.handleBlur} // Trigger validation on blur
            />
            <p className='text-sm mt-2'>{JSON.stringify(field.state.value)}</p>
        </div>
    );
};

export default TagsFormInput;
