import './Formulario.css'

const Formulario=()=>{
    return(
        <section className='form-container'>
                <div className='grid-container'>
                    <div className='solicitud'>
                        <h2 >Envíe su solicitud</h2>
                        <p>Déjanos tus datos y nos comunicaremos a la brevedad posible.</p>

                        <div className='inputs-images'>
                            <form action="" className='input-container'>
                                <input type="text" className="icono-user"placeholder="Nombre Completo"/>
                                <input type="text" className="icono-huella" placeholder="Tipo de mascota"/>
                                <input type="text" className="icono-telefono" placeholder="Número de teléfono"/> 
                                
                                <div className='container__acepto-datos'>
                                    <input type="checkbox" className='acepto-datos' />
                                    <label className='datos-label' htmlFor=""> Acepto el tratamiento de datos personales</label>
                                </div>                                     
                               
                            </form>
                            <div className="botones-citas">
                                <button className='hacer-cita hacer-cita--colorbg'>Reserve una cita</button>
                                <button className='hacer-cita '>Llame a un médico</button>
                            </div> 
                        </div>                        
                    </div>
                    <div className="huron-image">                                
                    </div>
                </div>
            </section>
    )
}

export default Formulario;