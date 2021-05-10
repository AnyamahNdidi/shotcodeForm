import React, { useEffect, useState } from 'react'
import { Input, Button } from 'antd';
import axios from "./axios"
import { UserOutlined, MailOutlined, UnlockOutlined, ContactsOutlined, FileImageOutlined, SolutionOutlined } from '@ant-design/icons'


function Details() {
  const [formData, setFormData] = useState([]);
  const [formText, setFormText] = useState({});
  const [gData, gFormData] = useState([]);

  const getData = async () => {
    const res = await axios.get("/");
    console.log(res);
    if (res.data) {
      return gFormData(res.data);
    }
    console.log(gData)
  };
  const handleForm = (e) => {
    setFormText({ ...formText, [e.target.name]: e.target.value })
  };

  const postData = async () => {
    const result = await axios.post('https://shotcode-api.herokuapp.com/register', formText).catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="regNav">
        <div className="logo">
          ShortCode

      </div>
        <div className="Catnav">
          <div className="Sigupnav">

            <div style={{
              fontSize: "23px",
              fontWeight: "600w"
            }}>Fill In Details</div>

          </div>


          <br />
          <form onSubmit={postData}>



            <Input
              size="large"
              placeholder="Image"
              type="file"
              prefix={<FileImageOutlined />}
              style={{
                height: "50px"
              }} />
            <br />
            <br />


            <Input
              size="large"
              type="text"
              name="name"
              onChange={handleForm}
              placeholder="Full Name"




              prefix={<SolutionOutlined />}
              style={{
                height: "50px"
              }} />
            <br />
            <br />

            <Input
              size="large"
              type="text"
              name="location"
              onChange={handleForm}
              placeholder="Location"



              prefix={<UnlockOutlined />}
              style={{
                height: "50px"
              }} />
            <br />
            <br />
            <Input
              size="large"


              type="text"
              onChange={handleForm}
              name="contact"
              placeholder="contact"


              prefix={<ContactsOutlined />}
              style={{
                height: "50px"
              }} />

            <button
              className="button_nav"
              type="submit"
            >
              Upload
            </button>

          </form>



        </div>
      </div>
    </div>
  )
}

export default Details
