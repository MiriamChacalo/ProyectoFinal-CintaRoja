import React, { Component } from 'react'
class Contacto extends Component {
    state = {
        contacto: {
            name: "Vero",
            email: "vbg@gmail.com",
            tel: "5503857625",
            message: "Me gustan los productos"
        }
    }
    handleChange = e => {
        let { name: field, value } = e.target
        let { contacto } = this.state
        contacto[field] = value
        this.setState({ contacto })
    }
    resetForm = () => {
        this.setState({
            name: "",
            email: "",
            tel: "",
            message: "",
        });
    }
    render() {
        function click() {
            console.log('funciona el boton')
        }
        let { name, email, tel, message } = this.state.contacto
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 center">
                        <div className="mt-5 card p-4">
                            <h2>Formulario de contacto</h2>
                            <label htmlFor="nombre">Coloca tu nombre:</label>
                            <input
                                className="form-control"
                                placeholder="Name"
                                value={name}
                                onChange={this.handleChange}
                                name="name"
                                type="text"
                            />

                            <label htmlFor="nombre">Coloca tu correo electrónico:</label>
                            <input
                                className="form-control"
                                value={email}
                                placeholder="Email"
                                onChange={this.handleChange}
                                name="email"
                                type="text"
                            />

                            <label htmlFor="nombre">Teléfono de contacto</label>
                            <input
                                className="form-control"
                                value={tel}
                                placeholder="Phone number"
                                onChange={this.handleChange}
                                name="tel"
                                type="tel"
                            />

                            <label htmlFor="nombre">Escribe tu mensaje:</label>
                            <input
                                className="form-control"
                                value={message}
                                placeholder="Message"
                                onChange={this.handleChange}
                                name="message"
                                type="text"
                            />

                            <br />
                            <button
                                className="btn btn-secondary"
                                type="submit"
                                name="Enviar"
                                value="Enviar"
                                onClick={this.resetForm}
                            >Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contacto