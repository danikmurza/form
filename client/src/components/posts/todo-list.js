import React from "react";
import { connect } from "react-redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import {getAllLoads } from "../../actions";
import { Row, Col, Form, FormGroup, Input, Label } from "reactstrap";
import { Button, Modal, Tab, Tabs } from "react-bootstrap";
import Task from "./task";
import { fetchLoad } from "../../actions";
import "./style.css";

class TodoList extends React.Component {
  state = {
    isActive: true,
    show: false,
    done: false,
    id: null,
    title: "",
    content: "",
    time: "",
    date: "",
    priority: "",
  };

  componentDidMount() {
    this.props.dispatch(getAllLoads());
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.show !== this.state.show) {
    }
  }

  updateTodo = async (e) => {
    e.preventDefault();
    const { priority, date } = this.state;
    if (priority.length === 0 && date.length === 0) return;
    else {
      this.props.dispatch(fetchLoad(this.state, "PUT", "update"));
      await this.setState({ show: false });
    }
  };

  deleteTodo = (e) => {
    e.preventDefault();
    this.props.dispatch(fetchLoad({ id: +e.target.id }, "DELETE", "delete"));
  };

  handleClickActiveTab() {
    this.setState({ isActive: false });
  }

  handleShow = async (e) => {
    e.preventDefault();
    const array = this.props.products.posts.filter(
      (a) => a.id === +e.target.id
    );
    await this.setState({
      show: true,
      id: array[0].id,
      title: array[0].title,
      content: array[0].content,
      time: array[0].time,
      date: array[0].date,
      priority: array[0].priority,
    });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleOnDone = (e) => {
    e.preventDefault();
    this.props.dispatch(
        fetchLoad({ id: +e.target.id, done: true }, "PUT", "update")
    );
  };

  handleOnUndone = (e) => {
    e.preventDefault();
    this.props.dispatch(
        fetchLoad({ id: +e.target.id, done: false }, "PUT", "update")
    );
  };

  render() {
    const { products, loading, error } = this.props;
    let { posts } = products;
    const { show, title, content, time } = this.state;
    if (products === undefined) {
      return <Spinner />;
    }
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    console.log(this.props.products)

    return (
      <>
        <Modal className="modal" show={show}>
          <Modal.Header closeButton onClick={this.handleClose}>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Type your task here"
                  id="titles"
                  name="title"
                  required
                  value={title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="textarea"
                  placeholder="Enter task description"
                  id="content"
                  name="content"
                  value={content}
                  onChange={(e) => this.setState({ content: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Button
                  value={"danger"}
                  color="danger"
                  size="lg"
                  // outline
                  onClick={(e) => this.setState({ priority: e.target.value })}
                >
                  {" "}
                  High{" "}
                </Button>{" "}
                <Button
                  value={"warning"}
                  color="warning"
                  size="lg"
                  // outline
                  onClick={(e) => this.setState({ priority: e.target.value })}
                >
                  {" "}
                  Medium{" "}
                </Button>{" "}
                <Button
                  value={"success"}
                  color="success"
                  size="lg"
                  // outline
                  onClick={(e) => this.setState({ priority: e.target.value })}
                >
                  {" "}
                  Low{" "}
                </Button>{" "}
              </FormGroup>
              <FormGroup>
                <Label for="date"> Date </Label>
                <Input
                  placeholder="date placeholder"
                  type="date"
                  id="date"
                  name="date"
                  // value={date}
                  onChange={(e) => this.setState({ date: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="time"> Time </Label>
                <Input
                  placeholder="time placeholder"
                  type="time"
                  id="time"
                  name="time"
                  value={time}
                  required
                  onChange={(e) => this.setState({ time: e.target.value })}
                />
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="btn btn-primary"
              onClick={(e) => this.updateTodo(e)}
            >
              Save changes
            </Button>
            <Button variant="secondary" onClick={this.handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Done">
            <Row>
              <Col sm="4">
                <h2>High priority tasks</h2>
                <Col sm="12">
                  {posts &&
                    posts
                      .filter((item) => item.done && item.priority === "danger")
                      .map((item, index) => {
                        const {
                          id,
                          title,
                          content,
                          date,
                          time,
                          done,
                          userId,
                          priority,
                        } = item;
                        return (
                          <Task
                            key={index}
                            id={id}
                            title={title}
                            content={content}
                            date={date}
                            time={time}
                            priority={priority}
                            done={done}
                            userId={userId}
                            handleOnEdit={(e) => this.handleShow(e)}
                            handleOnDelete={(e) => this.deleteTodo(e)}
                            handleOnDone={(e) => this.handleOnUndone(e)}
                          />
                        );
                      })}
                </Col>
              </Col>
              <Col sm="4">
                <h2>Medium priority tasks</h2>

                <Col sm="12">
                  {posts &&
                    posts
                      .filter(
                        (item) => item.done && item.priority === "warning"
                      )
                      .map((item, index) => {
                        const {
                          id,
                          title,
                          content,
                          date,
                          time,
                          done,
                          userId,
                          priority,
                        } = item;
                        return (
                          <Task
                            key={index}
                            id={id}
                            title={title}
                            content={content}
                            date={date}
                            time={time}
                            priority={priority}
                            done={done}
                            userId={userId}
                            handleOnEdit={(e) => this.handleShow(e)}
                            handleOnDelete={(e) => this.deleteTodo(e)}
                            handleOnDone={(e) => this.handleOnUndone(e)}
                          />
                        );
                      })}
                </Col>
              </Col>
              <Col sm="4">
                <h2>Low priority tasks</h2>

                <Col sm="12">
                  {posts &&
                    posts
                      .filter(
                        (item) => item.done && item.priority === "success"
                      )
                      .map((item, index) => {
                        const {
                          id,
                          title,
                          content,
                          date,
                          time,
                          done,
                          userId,
                          priority,
                        } = item;
                        return (
                          <Task
                            key={index}
                            id={id}
                            title={title}
                            content={content}
                            date={date}
                            time={time}
                            priority={priority}
                            done={done}
                            userId={userId}
                            handleOnEdit={(e) => this.handleShow(e)}
                            handleOnDelete={(e) => this.deleteTodo(e)}
                            handleOnDone={(e) => this.handleOnUndone(e)}
                          />
                        );
                      })}
                </Col>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="profile" title="Undone">
            <Row>
              <Col sm="4">
                <h2>High priority tasks</h2>
                <Col sm="12">
                  {posts &&
                    posts
                      .filter(
                        (item) =>
                          item.done === false && item.priority === "danger"
                      )
                      .map((item, index) => {
                        const {
                          id,
                          title,
                          content,
                          date,
                          time,
                          done,
                          userId,
                          priority,
                        } = item;
                        return (
                          <Task
                            key={index}
                            id={id}
                            title={title}
                            content={content}
                            date={date}
                            time={time}
                            priority={priority}
                            done={done}
                            userId={userId}
                            handleOnEdit={(e) => this.handleShow(e)}
                            handleOnDelete={(e) => this.deleteTodo(e)}
                            handleOnDone={(e) => this.handleOnDone(e)}
                          />
                        );
                      })}
                </Col>
              </Col>
              <Col sm="4">
                <h2>Medium priority tasks</h2>
                <Col sm="12">
                  {posts &&
                    posts
                      .filter(
                        (item) =>
                          item.done === false && item.priority === "warning"
                      )
                      .map((item, index) => {
                        const {
                          id,
                          title,
                          content,
                          date,
                          time,
                          done,
                          userId,
                          priority,
                        } = item;
                        return (
                          <Task
                            key={index}
                            id={id}
                            title={title}
                            content={content}
                            date={date}
                            time={time}
                            priority={priority}
                            done={done}
                            userId={userId}
                            handleOnEdit={(e) => this.handleShow(e)}
                            handleOnDelete={(e) => this.deleteTodo(e)}
                            handleOnDone={(e) => this.handleOnDone(e)}
                          />
                        );
                      })}
                </Col>
              </Col>
              <Col sm="4">
                <h2>Low priority tasks</h2>
                <Col sm="12">
                  {posts &&
                    posts
                      .filter(
                        (item) =>
                          item.done === false && item.priority === "success"
                      )
                      .map((item, index) => {
                        const {
                          id,
                          title,
                          content,
                          date,
                          time,
                          done,
                          userId,
                          priority,
                        } = item;
                        return (
                          <Task
                            key={index}
                            id={id}
                            title={title}
                            content={content}
                            date={date}
                            time={time}
                            priority={priority}
                            done={done}
                            userId={userId}
                            handleOnEdit={(e) => this.handleShow(e)}
                            handleOnDelete={(e) => this.deleteTodo(e)}
                            handleOnDone={(e) => this.handleOnDone(e)}
                          />
                        );
                      })}
                </Col>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </>
    );
  }
}

const mapStateToProps = ({ productList: { products, loading, error } }) => {
  return { products, loading, error };
};

export default connect(mapStateToProps, null)(TodoList);
