

import './Form.css';

const Form = () => {
    return (
        <div>
            <section className='form-container' id="reserva">
                <div className='grid-container'>
                    <div className='solicitud'>
                        <h2 className='solicitud__title'>Reserva una cita</h2>
                        <p className='solicitud__subtitle'>Déjanos tus datos y nos comunicaremos a la brevedad posible.</p>

                        <div className='inputs-images'>
                            <form action="https://getform.io/f/68f0d0bf-d8ec-4bf0-830a-ef15c1739128" method="POST">
                                <input type="text" className="icono-user" name="Nombre Completo" placeholder="Nombre Completo"/>
                                <input type="text" className="icono-huella" name="mascota" placeholder="Tipo de mascota" />
                                <input type="text" className="icono-telefono" name="Número de teléfono" placeholder="Número de teléfono" />

                                <div className='container__acepto-datos'>
                                    <input type="checkbox" className='acepto-datos' />
                                    <label className='datos-label' htmlFor=""> Acepto el tratamiento de datos personales</label>
                                </div>


                                <div className="botones-citas">

                                    <button type="submit" className='hacer-cita hacer-cita--colorbg'>Reserve una cita</button>

                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="huron-image">
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Form;