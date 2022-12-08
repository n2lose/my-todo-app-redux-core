import { Col, Row, Typography, Input, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterPriorities, filterSearch, filterStatus } from "../../redux/actions";



const { Paragraph } = Typography
const { Search } = Input

export default function Filters() {
    const dispatch = useDispatch()

    const [searchText, setSearchText] = useState('')
    const handleSearchText = (e) => {
        setSearchText(e.target.value)
        dispatch(filterSearch(e.target.value))
    }

    const [status, setStatus] = useState('All')
    const handleFilterStatus = (e)=> {
        setStatus(e.target.value)
        dispatch(filterStatus(e.target.value))
    }

    const [priorities, setPriorities] = useState([])
    const handleFilterPriorities = (value)=> {        
        setPriorities(value)        
        dispatch(filterPriorities(value))
    }
    

    return (
        <Row style={{textAlign: 'left'}}>
            <Col span={24}>
                <Paragraph style={{fontWeight: 'bold', marginBottom: 3, marginTop: 10}}>Search</Paragraph>
                <Search placeholder="Search here..." value={searchText} onChange={handleSearchText} />
            </Col>            
            <Col span={24}>
                <Paragraph style={{fontWeight: 'bold', marginBottom: 3, marginTop: 10}}>Filter by Status</Paragraph>
                <Radio.Group value={status} onChange={handleFilterStatus}> 
                    <Radio value="All">All</Radio>
                    <Radio value="Completed">Completed</Radio>
                    <Radio value="Todo">Todo</Radio>
                </Radio.Group>
            </Col>
            <Col span={24}>
                <Paragraph style={{fontWeight: 'bold', marginBottom: 3, marginTop: 10}}>Filter by Priority</Paragraph>
                <Select style={{width: '100%'}} mode="multiple"
                        allowClear
                        placeholder="Please select at least priority"
                        value={priorities}
                        onChange={handleFilterPriorities}
                >
                    <Select.Option value="High" label="High"><Tag color="red">High</Tag></Select.Option>    
                    <Select.Option value="Medium" label="Medium"><Tag color="blue">Medium</Tag></Select.Option>    
                    <Select.Option value="Low" label="Low"><Tag color="gray">Low</Tag></Select.Option>    
                </Select>                
            </Col>
        </Row>
    )
}