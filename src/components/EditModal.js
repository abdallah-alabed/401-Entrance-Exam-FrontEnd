import React, { Component } from "react";
import {Button,Modal,Form} from 'react-bootstrap'

const axios = require("axios");

class EditModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleModal: "",
      image_urlModal: "",
      descriptionModal: "",
      toUSDModal: "",
    };
  }

  handleTitle = (e) => {
    this.setState({
      titleModal: e.target.value,
    });
  };
  handleImage = (e) => {
    this.setState({
      image_urlModal: e.target.value,
    });
  };
  handleDesc = (e) => {
    this.setState({
      descriptionModal: e.target.value,
    });
  };
  handleUSD = (e) => {
    this.setState({
      toUSDModal: e.target.value,
    });
  };

  updateWatch = async (e) => {
    e.preventDefault();
    let update = {
      title: this.state.titleModal,
      description: this.state.descriptionModal,
      image_url: this.state.image_urlModal,
      toUSD: this.state.toUSDModal,
    };

    await axios.put(
      `${process.env.REACT_APP_BACKEND}/updateWatch/${this.props.id}`,
      update
    );
    this.props.handleCloseEdit();
  };

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleCloseEdit}>
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.updateWatch}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>title</Form.Label>
                  <Form.Control type="text" placeholder={this.props.title} onChange={this.handleTitle}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>price</Form.Label>
                  <Form.Control type="text" placeholder={this.props.toUSD} onChange={this.handleUSD}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>description</Form.Label>
                  <Form.Control type="text" placeholder={this.props.description} onChange={this.handleDesc}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>image URL</Form.Label>
                  <Form.Control type="text" placeholder={this.props.image_url} onChange={this.handleImage}/>
                </Form.Group>

                
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      </div>
    );
  }
}

export default EditModal;
