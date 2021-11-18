import React from "react";
import { fetchTodo } from "../../actions";
import { connect } from "react-redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";

class CreateTodoTask extends React.Component {
    state = {
        title: "",
        content: "",
        date: "",
        time: "",
        priority: "",
        done: false,
    };

    createTodo = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(fetchTodo(this.state, "POST", "todo"));
        this.props.history.push("/");
    };

    render() {
        const {
            // products,
            loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }
        return (
            <>
                <h1>Create New Task</h1>
                <Form>
                    <FormGroup>
                        <Input
                            type="text"
                            placeholder="Type your task here"
                            id="titles"
                            name="title"
                            required
                            onChange={(e) => this.setState({ title: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type="textarea"
                            placeholder="Enter task description"
                            id="content"
                            name="content"
                            onChange={(e) => this.setState({ content: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button
                            value={"danger"}
                            color="danger"
                            size="lg"
                            outline
                            onClick={(e) => this.setState({ priority: e.target.value })}
                        >
                            {" "}
                            High{" "}
                        </Button>{" "}
                        <Button
                            value={"warning"}
                            color="warning"
                            size="lg"
                            outline
                            onClick={(e) => this.setState({ priority: e.target.value })}
                        >
                            {" "}
                            Medium{" "}
                        </Button>{" "}
                        <Button
                            value={"success"}
                            color="success"
                            size="lg"
                            outline
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
                            required
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
                            required
                            onChange={(e) => this.setState({ time: e.target.value })}
                        />
                    </FormGroup>
                    <Button
                        color="success"
                        size="lg"
                        type="submit"
                        onClick={this.createTodo}>
                        Create New Task
                    </Button>
                </Form>
            </>
        );
    }
}

const mapStateToProps = ({ productList: { products, loading, error } }) => {
    return { products, loading, error };
};

export default connect(mapStateToProps, null)(CreateTodoTask);
