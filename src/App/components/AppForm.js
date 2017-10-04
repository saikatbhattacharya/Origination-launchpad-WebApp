import React from 'react';
import { Button, Checkbox } from 'react-bootstrap';
import PropTypes from 'prop-types';
import FieldGroup from './FieldGroup';

const AppForm = (props) => {
    const { onChange, onCheckBoxChange, displayname, description, linkUrl, iconimage, isDesktopApp } = props;
    return (
        <form>
            <FieldGroup
                id="formControlsText"
                type="text"
                label="App Name"
                placeholder="Enter App Name"
                value={displayname}
                onChange={onChange('displayname')}
                />
            <FieldGroup
                id="formControlsText"
                type="text"
                label="App Description"
                placeholder="Enter Description"
                value={description}
                onChange={onChange('description')}
                />
            <Checkbox onChange={onCheckBoxChange}>
                 Desktop Application
            </Checkbox>
            <FieldGroup
                id="formControlsText"
                type="text"
                label="App URL/Path"
                placeholder="Enter URL/Path"
                value={linkUrl}
                onChange={onChange('linkUrl')}
                />
            <FieldGroup
                id="formControlsText"
                type="text"
                label="App Icon"
                placeholder="Enter URL for Icon"
                value={iconimage}
                onChange={onChange('iconimage')}
                />
            {/* <FieldGroup
                id="formControlsFile"
                type="file"
                label="File"
                help="Please Select the icon file"
            />*/}
        </form>
    );
};

AppForm.propTypes = {
    onChange: PropTypes.func.isRequired,
    displayname: PropTypes.string,
    description: PropTypes.string,
    linkUrl: PropTypes.string,
    iconimage: PropTypes.string,
    onCheckBoxChange: PropTypes.func,
    isDesktopApp: PropTypes.bool
};

export default AppForm;
