import React from "react";

function FormTambah({ formData, handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-grup">
        <label>Name</label>
        <div>
          <input
            className="input"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
      </div>
      <div className="input-grup">
        <label>Deskripsi</label>
        <div>
          <textarea
            className="textarea"
            rows="10"
            name="desc"
            onChange={handleChange}
            value={formData.desc}
          />
        </div>
      </div>
      <div className="btn-submit">
        <button className="btn" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default FormTambah;
