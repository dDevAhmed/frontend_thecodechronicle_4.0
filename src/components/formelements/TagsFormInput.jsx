import { useState } from 'react';
import { TagsInput } from "react-tag-input-component";

const TagsFormInput = () => {
    const [selected, setSelected] = useState([]);

    return (
        <div>
            <p className='text-sm mb-1'>press enter (&#8617;) or comma (&#44;) to add new tag</p>
            <TagsInput
                value={selected}
                onChange={setSelected}
                name="tags"
                placeHolder="enter tag"
                separators={["Enter", ","]}
            />
            <p className='text-sm mt-2'>{JSON.stringify(selected)}</p>
        </div>
    );
};

export default TagsFormInput;
