import React from "react";

import List from "./List-data";
import FormTambah from "./FormTambah";

import { useState } from "react";
import { uid } from "uid";

import { dataHewans } from "../models/DataHewan";

function Container() {
  const [hewans, setHewans] = useState(dataHewans);

  const [formData, setFormData] = useState({
    name: "",
    desc: "",
  });

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  function resetFormData() {
    setFormData({
      name: "",
      desc: "",
    });
  }

  function resetIsUpdate() {
    setIsUpdate({ id: null, status: false });
  }

  function handleChange(e) {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.name === "" || formData.desc === "") {
      alert("Inputan tidak boleh kosong");
      return;
    }

    //menambah data
    let data = [...hewans]; // copi data contacts

    if (isUpdate.status) {
      data.forEach((dt) => {
        if (dt.id === isUpdate.id) {
          dt.name = formData.name;
          dt.desc = formData.desc;
        }
      });
    } else {
      data.push({ id: uid(), name: formData.name, desc: formData.desc });
    }

    setHewans(data);

    resetFormData(); //reset formData
    resetIsUpdate(); //reset penanda update
  }

  function handleEdit(id) {
    let data = [...hewans];
    let foundData = data.find((hewan) => hewan.id === id);
    setFormData({ name: foundData.name, desc: foundData.desc });
    setIsUpdate({ id: id, status: true });
  }

  //handle delete
  function handleDelete(id) {
    let data = [...hewans];
    let filterData = data.filter((hewan) => hewan.id !== id);
    setHewans(filterData);
  }

  //console.log(hewans);
  return (
    <div class="container">
      <div className="form-input">
        <h1>Tambah Data</h1>
        <FormTambah
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <hr></hr>
      <h1>Data Hewan</h1>
      <List
        datas={hewans}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}
export default Container;
