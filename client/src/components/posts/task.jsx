import React from "react";
import {
  Card,
  Col,
  CardTitle,
  CardText,
  Button,
  ButtonGroup,
} from "reactstrap";
import Timer from "./timer";
// import NavBar from "./navbar";

function Task(props) {
  const {
    id,
    title,
    // index,
    content,
    date,
    time,
    // userId,
    done,
    handleOnDelete,
    handleOnDone,
    handleOnEdit,
    priority,
  } = props;

  return (
    <>
      <Col sm="12">
        {/* {id} {index} {userId} */}
        <Card body color={priority} style={{ margin: '20px', boxShadow:"5px 10px 18px black"}}>
          <CardTitle style={{fontWeight:"bold"}} tag="h5">Title: {title}</CardTitle>
          <CardText style={{fontStyle:"italic",color:"white"}}>Description: {content}</CardText>
          <CardText style={{fontStyle:"italic",color:"white"}}>Due date: {date}</CardText>
          <CardText style={{fontStyle:"italic",color:"white"}}>Time: {time}</CardText>
          <Timer date={date} time={time}/>
          <br/>
          <ButtonGroup style={{ border:"solid 2px white"}}>
            <Button onClick={handleOnDone} id={id} size="sm" color="success">
              {done ? "Undone" : "Done"}
            </Button>
            <Button onClick={handleOnEdit} id={id} size="sm" color="warning">
              Edit
            </Button>
            <Button onClick={handleOnDelete} id={id} size="sm" color="danger">
              Delete
            </Button>
          </ButtonGroup>
        </Card>
      </Col>
    </>
  );
}

export default Task;
