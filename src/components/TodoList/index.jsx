import { Col, Row, Typography, Input, Button, Select } from "antd";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid'
import { addTodo } from "../../redux/actions";
import { todoListRemainingSelector } from "../../redux/selectors";
import TodoItem from "../TodoItem";


const { Title } = Typography

export default function TodoList() {
    const dispatch = useDispatch()

    const [todoName, setTodoName] = useState('')
    const [priority, setPriority] = useState('Medium')

    const todoList = useSelector(todoListRemainingSelector)

    const handleAddTodo = ()=> {
        const newTodo = {
            id: uuidv4(),
            name: todoName,
            priority,
            completed: false
        }
        dispatch(addTodo(newTodo))
        setTodoName('')
        
    }
    return (
        <Row style={{ height: 'calc(100% - 40px)'}}>
            <Col span={24} style={{ height: 'calc(100%-40px)', overflow: 'auto'}}>
                {todoList.length && todoList.map(((todo) => (
                    <TodoItem key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} completed={todo.completed} />
                )))}
            </Col> 
          
            <Col span={24}>
                <Input.Group compact style={{ display: 'flex'}}>
                    <Input 
                        placeholder="Enter your Todo"
                        value={todoName}
                        onChange={e => setTodoName(e.target.value)}
                     />
                    <Select size="middle" defaultValue={priority} onChange={value => setPriority(value)}>
                        <Select.Option value="Medium">Medium</Select.Option>
                        <Select.Option value="High">High</Select.Option>                    
                        <Select.Option value="Low">Low</Select.Option>                    
                    </Select>
                    <Button type="primary" onClick={handleAddTodo}>Add</Button>
                </Input.Group>
            </Col> 
        </Row>
    )
}