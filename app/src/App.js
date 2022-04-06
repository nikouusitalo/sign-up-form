import Header from './components/Header/Header.jsx'
import './App.css'
import ActionCall from './components/Form/ActionCall/ActionCall.jsx'
import Form from './components/Form/FormInputs/Form.jsx'
import Button from './components/Form/Button/Button.jsx'
import Footer from './components/Form/Footer/Footer.jsx'

function App() {
    return (
        <div className="App">
            <Header />
            <section>
                <ActionCall />
                <Form />
                <Button/>
                <Footer />
                
            </section>
        </div>
    )
}

export default App
