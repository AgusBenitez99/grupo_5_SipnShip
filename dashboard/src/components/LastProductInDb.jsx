export const LastProductInDb = () => {
    return (
      <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Ultimo producto Agregado
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-3 mb-4"
              width="70%"
              src="/images/1692578924225_products_.webp"
              alt=" Star Wars - Mandalorian "
            />
          </div>
          <p>
          Disfrutar de una Corona es algo más que eso. Es disfrutar de su ritual y de todo lo que te rodea en ese instante para convertir un momento cualquiera en algo extraordinario
          </p>
          <a
            className="btn btn-danger"
            target="_blank"
            rel="nofollow"
            href="/"
          >
             Ver detalle del Producto
          </a>
        </div>
      </div>
    </div>
    )
  }
  