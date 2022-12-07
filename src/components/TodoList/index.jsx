import { Col, Row } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoListRemainingSelector } from "../../redux/selectors";
import TodoItem from "../TodoItem";


export default function TodoList() {
    const dispatch = useDispatch()

    const [todoName, setTodoName] = useState('')
    const [priority, setPriority] = useState('Medium')

    const todoList = useSelector(todoListRemainingSelector)
    
    return (
        <Row style={{ height: 'calc(100% - 40px)'}}>
            <Col span={24} style={{ height: 'calc(100%-40px)', overflow: 'auto'}}>
                {todoList.length && todoList.map(((todo) => (
                    <TodoItem key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />
                )))}
            </Col> 
        </Row>
    )
}