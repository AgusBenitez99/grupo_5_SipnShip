import PropTypes from 'prop-types';

export const Info = ({ name, description, category, section, size, mainImage }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h5>Información</h5>
            </div>
            <div className="card-body">
                {   mainImage
                    ?
                <img className='img-thumbnail d-block mx-auto' src={mainImage}  style={{ width: "10rem" }} alt=""/>
                :
                <p className='text-center'>Seleccione un producto...</p>
            }
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <label>Nombre:</label>
                        <p className='m-0'><b>{name} - {size}</b></p>
                    </li>
                    <li className="list-group-item">
                        <label >Categoria / Sección:</label>
                        <p className='m-0'><b>{category?.name} / {[section?.name]}</b></p>
                    </li>

                    <li className="list-group-item">
                        <label>Descripción:</label>
                        <p className='m-0'><b>{description}</b></p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

Info.propTypes = {
    id : PropTypes.number,
    name : PropTypes.string,
    description : PropTypes.string,
    category : PropTypes.object,
    section : PropTypes.object,
    size : PropTypes.string,
    mainImage : PropTypes.string,
  }