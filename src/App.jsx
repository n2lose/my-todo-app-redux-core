import { Typography, Divider } from 'antd'
import './App.css'
import TodoList from './components/TodoList'

const { Title } = Typography

function App() {

  return (
    <div className="App">
      <Title level={3} style={{textAlign: 'center'}}>TODO APP with REDUX CORE</Title>
      <Divider />
      <TodoList />
    </div>
  )
}

export default App
