import React from 'react'

const doctorAppoitnmentList = () => {
  return (
    <div>
        <section>
        <div>
          <div className="container mt-4 ">
            <div className="card mb-4 ">
              <div className="card-body overflow-auto d-sm-block">
                <div className="row ">
                  <div className="col-md-12 ">
                    <h2 className="pt-3 pb-4 text-center font-bold font-up deep-purple-text"> Appointments list </h2>
                                      </div>
                </div>
                <table className="table table-hover ">
                  <thead>
                    <tr>
                      <th> Appointment Id</th>
                      <th> Patient Name </th>
                      <th> Patient Age </th>
                      <th> Disease </th>
                      <th> Ph No</th>
                      <th> Username </th>
                      <th> Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> MarkaksdjgfladgskfjlF </td>
                      <td> Otto </td>
                      <td> @mdo </td>
                      <td> @mdo </td>
                      <td> @mdo </td>
                      <td> @mdo </td>
                      <td><button className='btn btn-danger'> Delete</button> </td>
                    </tr>

                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default doctorAppoitnmentList