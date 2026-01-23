

function CreateAgent() {
  return (
    <div className="row">
  <div className="col-12">
    <div className="card stretch stretch-full">
      <div className="card-body">

        {/* Row 1 */}
        <div className="row">
          <div className="col-lg-6 mb-4">
            <label className="form-label">
              First Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" placeholder="First name" />
          </div>
          <div className="col-lg-6 mb-4">
            <label className="form-label">
              Last Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="row">
          <div className="col-lg-6 mb-4">
            <label className="form-label">
              Agent Code <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" placeholder="Agent code" />
          </div>
          <div className="col-lg-6 mb-4">
            <label className="form-label">
              Mobile <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" placeholder="Mobile number" />
          </div>
        </div>

        {/* Row 3 */}
        <div className="row">
          <div className="col-lg-6 mb-4">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Email (optional)" />
          </div>
          <div className="col-lg-6 mb-4">
            <label className="form-label">
              Password <span className="text-danger">*</span>
            </label>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
        </div>

        {/* Row 4 */}
        <div className="row">
          <div className="col-lg-6 mb-4">
            <label className="form-label">PAN Card</label>
            <input type="text" className="form-control" placeholder="PAN number" />
          </div>
          <div className="col-lg-6 mb-4">
            <label className="form-label">PAN Card Image</label>
            <input type="file" className="form-control" />
          </div>
        </div>

        {/* Row 5 */}
        <div className="row">
          <div className="col-lg-6 mb-4">
            <label className="form-label">Aadhaar Card</label>
            <input type="text" className="form-control" placeholder="Aadhaar number" />
          </div>
          <div className="col-lg-6 mb-4">
            <label className="form-label">Aadhaar Front Image</label>
            <input type="file" className="form-control" />
          </div>
        </div>

        {/* Row 6 */}
        <div className="row">
          <div className="col-lg-6 mb-4">
            <label className="form-label">Aadhaar Back Image</label>
            <input type="file" className="form-control" />
          </div>
          <div className="col-lg-6 mb-4">
            <label className="form-label">Cancelled Cheque Image</label>
            <input type="file" className="form-control" />
          </div>
        </div>

        {/* Row 7 */}
        <div className="row">
          <div className="col-lg-6 mb-4">
            <label className="form-label">
              Commission (%) <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              step="0.01"
              className="form-control"
              placeholder="Commission %"
            />
          </div>
          <div className="col-lg-6 mb-4">
            <label className="form-label">
              Status <span className="text-danger">*</span>
            </label>
            <select className="form-select">
              <option value="">Select status</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>
        </div>

        {/* Submit */}
        <div className="text-end">
          <button className="btn btn-primary">
            Create Agent
          </button>
        </div>

      </div>
    </div>
  </div>
</div>

  )
}

export default CreateAgent