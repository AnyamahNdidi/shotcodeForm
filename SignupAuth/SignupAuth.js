import React, { useState, useEffect } from 'react'
import "./Signstyle.css";
import { Input, Button } from 'antd';
import { singleFileUpload, multipleFilesUpload, getMultipleFiles } from "./data/api"
import { UserOutlined, MailOutlined, UnlockOutlined, FileImageOutlined, SolutionOutlined, ContactsOutlined } from '@ant-design/icons'
import { useHistory } from "react-router-dom"

function SignupAuth(props) {

  const [fullname, setFullname] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [multipleFiles, setMultipleFiles] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [multipleProgress, setMultipleProgress] = useState(0);
  const [singleFile, setSingleFile] = useState("");
  const [singleProgress, setSingleProgress] = useState(0);

  const SingleFileChange = (e) => {
    setSingleFile(e.target.files[0]);
    setSingleProgress(0);
  };
  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
    setMultipleProgress(0);
  };
  const singleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setSingleProgress(percentage);
    },
  };
  const mulitpleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setMultipleProgress(percentage);
    },
  };
  const uploadSingleFile = async () => {
    const formData = new FormData();
    formData.append("file", singleFile);
    await singleFileUpload(formData, singleFileOptions);
    props.getsingle();
  };

  const UploadMultipleFiles = async () => {
    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phoneNumber", phoneNumber);
    for (let i = 0; i < multipleFiles.length; i++) {
      formData.append("files", multipleFiles[i]);
    }
    await multipleFilesUpload(formData, mulitpleFileOptions);

  };

  const getMultipleFilesList = async () => {
    try {
      const fileslist = await getMultipleFiles();
      setMultipleFiles(fileslist);
      console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {

    getMultipleFilesList();
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
            }}>Register</div>

          </div>


          <br />
          <div>
            <Input
              size="large"
              placeholder="Image"
              type="file"
              onChange={(e) => MultipleFileChange(e)}
              prefix={<FileImageOutlined />}
              style={{
                height: "50px"
              }} />
            <br />
            <br />
            <Input
              size="large"
              type="text"

              onChange={(e) => setFullname(e.target.value)}
              placeholder="Full Name"




              prefix={<SolutionOutlined />}
              style={{
                height: "40px"
              }} />
            <br />
            <br />
            <Input
              size="large"


              type="text"
              onChange={(e) => setaddress(e.target.value)}

              placeholder="Address"


              prefix={<ContactsOutlined />}
              style={{
                height: "50px"
              }} />
            <br />
            <br />


            <Input
              size="large"
              placeholder="E-mail"
              onChange={(e) => setemail(e.target.value)}
              prefix={<MailOutlined />}
              style={{
                height: "40px"
              }} />
            <br />
            <br />

            <Input
              size="large"
              placeholder="Create Password"
              type="text"
              onChange={(e) => setpassword(e.target.value)}
              prefix={<UnlockOutlined />}
              style={{
                height: "40px"
              }} />
            <br />
            <br />
            <Input
              size="large"
              placeholder="Phone Number"
              type="number"
              onChange={(e) => setphoneNumber(e.target.value)}
              prefix={<MailOutlined />}
              style={{
                height: "40px"
              }} />

            <div style={{
              display: "flex",


            }}>
              <Button
                className="button_nav"
                onClick={() => UploadMultipleFiles()}
              >
                Sign Up
            </Button>
            </div>



          </div>



        </div>
      </div>
    </div >
  )
}

export default SignupAuth
