import { useState } from 'react';
import RichTextEditor from 'react-rte';
import PropTypes from 'prop-types';

const TextEditor = (props) => {
    const [value, setValue] = useState(RichTextEditor.createEmptyValue());

    const toolbarConfig = {
        display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
        INLINE_STYLE_BUTTONS: [
            { label: 'Bold', style: 'BOLD', className: 'custom-css-class' },
            { label: 'Italic', style: 'ITALIC' },
            { label: 'Underline', style: 'UNDERLINE' }
        ],
        BLOCK_TYPE_DROPDOWN: [
            { label: 'Normal', style: 'unstyled' },
            { label: 'Heading Large', style: 'header-one' },
            { label: 'Heading Medium', style: 'header-two' },
            { label: 'Heading Small', style: 'header-three' }
        ],
        BLOCK_TYPE_BUTTONS: [
            { label: 'UL', style: 'unordered-list-item' },
            { label: 'OL', style: 'ordered-list-item' }
        ]
    };

    const onChange = (value) => {
        setValue(value);
        if (typeof props.onChange === 'function') {
            props.onChange(value.toString('html'));
        }
    };

    return (
        <RichTextEditor
            value={value}
            onChange={onChange}
            toolbarConfig={toolbarConfig}
        />
    );
};

TextEditor.propTypes = {
    onChange: PropTypes.func
};

export default TextEditor;
