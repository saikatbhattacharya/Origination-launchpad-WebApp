import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppForm from './AppForm';

const modalInstance = (props) => {
    const { showModal, toggleModal, onChange, onSubmit, appCreationError, displayname, description, linkUrl, iconimage, isDesktopApp, onCheckBoxChange } = props;
    return (
        <Modal show={showModal} onHide={toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AppForm
              onChange={onChange}
              onSubmit={onSubmit}
              displayname={displayname}
              description={description}
              linkUrl={linkUrl}
              iconimage={iconimage}
              onCheckBoxChange={onCheckBoxChange}
              isDesktopApp={isDesktopApp}
            />
          </Modal.Body>
          <Modal.Footer>
            {
              (appCreationError)
              ?
              <span className="errorMsg">{appCreationError}</span>
              :
              <div/>
            }
            <Button onClick={onSubmit}>Save</Button>
          </Modal.Footer>
        </Modal>
    );
};

modalInstance.propTypes = {
    showModal: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    appCreationError: PropTypes.string,
    displayname: PropTypes.string,
    description: PropTypes.string,
    linkUrl: PropTypes.string,
    iconimage: PropTypes.string,
    onCheckBoxChange: PropTypes.func,
    isDesktopApp: PropTypes.bool
};

export default modalInstance;