import React, { Component } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import EditModal from "./EditModal";
const axios = require("axios");

class Fav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listData: [],
      title: "",
      image_url: "",
      description: "",
      toUSD: "",
      show: false,
      id: "",
    };
  }

  handleShowEdit = () => {
    this.setState({
      show: true,
    });
  };

  handleCloseEdit = () => {
    this.setState({
      show: false,
    });
  };

  componentDidMount = async () => {
    let watcher = await axios.get(`${process.env.REACT_APP_BACKEND}/watch`);

    this.setState({
      listData: watcher.data,
    });
  };

  render() {
    console.log(this.state.listData);
    return (
      <>
        <div>
          <Row>
            {this.state.listData.map((e) => {
              return (
                <Col>
                  <Card style={{ width: "24rem" }}>
                    <Card.Img variant="top" src={e.image_url} />
                    <Card.Body>
                      <Card.Title>{e.title}</Card.Title>
                      <Card.Text>Price: {e.toUSD} USD</Card.Text>
                      <Card.Text>Price: {e.description}</Card.Text>
                      <Button
                        variant="primary"
                        onClick={() => {
                          this.setState({
                            title: e.title,
                            image_url: e.image_url,
                            description: e.description,
                            toUSD: e.toUSD,
                            id: e._id,
                          });
                          this.handleShowEdit();
                        }}
                      >
                        Update Watch{" "}
                      </Button>
                      <Button
                        variant="danger"
                        onClick={async () => {
                          await axios.delete(
                            `${process.env.REACT_APP_BACKEND}/deleteWatch/${e._id}`
                          );
                        }}
                      >
                        Delete Watch{" "}
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
        <EditModal
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
          toUSD={this.state.toUSD}
          show={this.state.show}
          id={this.state.id}
          handleCloseEdit={this.handleCloseEdit}
        />{" "}
      </>
    );
  }
}

export default Fav;
