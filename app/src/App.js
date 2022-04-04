import Header from './components/Header/Header.jsx'
import './App.css'
import ActionCall from './components/Form/ActionCall/ActionCall.jsx'
import Form from './components/Form/FormInputs/Form.jsx'

function App() {
    return (
        <div className="App">
            <Header />
            <section>
                <ActionCall />
                <Form />
                
            </section>
        </div>
    )
}

export default App
