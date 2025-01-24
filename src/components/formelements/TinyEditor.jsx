/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
// import { useForm } from '@tanstack/react-form'

const TinyEditor = ({ field }) => {
    // const [value, setValue] = useState('');
    // const [text, setText] = useState('');

    return (

        <>
            <Editor
                apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
                init={{
                    plugins: [
                        // Core editing features
                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                        // Your account includes a free trial of TinyMCE premium features
                        // Try the most popular premium features until Feb 6, 2025:
                        'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown', 'importword', 'exportword', 'exportpdf'
                    ],
                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    tinycomments_mode: 'embedded',
                    tinycomments_author: 'Author name',
                    mergetags_list: [
                        { value: 'First.Name', title: 'First Name' },
                        { value: 'Email', title: 'Email' },
                    ],
                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                }}
                // value={value}
                // onEditorChange={(newValue, editor) => {
                //     setValue(newValue);     //with the html formatting
                //     setText(editor.getContent({ format: 'text' }));
                // }}

                // for tanstack form
                value={field.state.value} // Connect the editor's value to the form field state
                onEditorChange={(newValue) => field.handleChange(newValue)} // Update the form field on content change
                onBlur={field.handleBlur} // Trigger validation on blur
            />
            {/* //todo - remove after */}
            <pre>{field.state.value}</pre>
            {/* <pre>{text}</pre> */}
        </>

    );
}

export default TinyEditor