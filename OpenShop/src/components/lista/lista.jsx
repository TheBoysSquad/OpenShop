function Lista(){
    return (
        <div className="bg-light" style={{marginTop:20, padding:20}}>

        <div className="h3">Listado de productos</div>

        <div className="table-responsive">
          <>
            <table className="table table-bordered table-hover" style={{marginTop:12}}>
                <thead className="text-center" style={{background:"lightgray"}}>
                    <tr>
                        <th>#</th>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Stock</th>
                        <th>Precio</th>
                        <th>X</th>
                    </tr>
                </thead>
                <tbody className="text-center align-baseline">
                </tbody>
            </table>
          </>
        </div>
      </div>

    )
}

export default Lista;