/* eslint-disable react/prop-types */
import { TagsInput } from "react-tag-input-component";

const TagsInputCmp = ({ field }) => {

    return (
        <div>
            <p className='text-sm mb-1'>press enter (&#8617;) or comma (&#44;) to add new tag, backspace (&#8592;) to remove</p>
            <TagsInput
                name="tags"
                placeHolder="enter tag"
                separators={["Enter", ","]}

                // for tanstack form
                value={field.state.value || []}
                onChange={(newValue) => field.handleChange(newValue)} 
                onBlur={field.handleBlur} // Trigger validation on blur
            />
        </div>
    );
};

export default TagsInputCmp;
