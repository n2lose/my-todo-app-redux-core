import { Tag, Row, Checkbox, Button, Col, Space } from "antd";
import { useState } from "react";
import { DeleteOutlined } from '@ant-design/icons'
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/actions";

const priorityColorMap = {
    High: 'red',
    Medium: 'blue',
    Low: 'grey'
}


export default function TodoItem(props) {
    const dispatch = useDispatch()

    const {id, name, priority, completed} = props
    const [checked, setChecked] = useState(completed)

    const handleToggleTodo = ()=> {
        setChecked(!checked)     
        dispatch(toggleTodo(id))
    }

    const handleDelete = () => {
        dispatch(deleteTodo(id))
    }

    return(
        <Row style={{ marginBottom: '16px'}}>
           <Col span={16} align="left">
            <Checkbox style={checked ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid', color: 'GrayText'} : {}} checked={checked} onChange={handleToggleTodo}>
                {name}
            </Checkbox>
           </Col>
           <Col span={8} align="end">
                <Space>
                    <Tag color={priorityColorMap[priority]} style={{margin: 0, lineHeight: '30px', width: '60px'}}>{priority}</Tag>
                    <Button onClick={handleDelete} icon={<DeleteOutlined />} />
                </Space>
           </Col>
        </Row>
    )
}