import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AssignmentIndSharpIcon from '@mui/icons-material/AssignmentIndSharp';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircularProgress from '@mui/material/CircularProgress';
import { colors } from "@mui/material";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
export default function Login() {
    var [loading, setLoading] = React.useState("Login");
    return (
        <div className="bg-dark container-fluid" style={{ height: "100vh" }}>
            <div className=" row py-5 ">
                {/* <div className="my-5"> */}
                <div className="col-lg-4 col-0">

                </div>
                <div className="col-lg-4 col-12">
                    <div className="container rounded bg-white d-flex flex-column ">
                        <form onSubmit={(eve) => {
                            eve.preventDefault(); const formData = new FormData(eve.currentTarget); const formObject = {};

                            formData.forEach((value, key) => {
                                formObject[key] = value;
                            });
                            setLoading(<CircularProgress sx={{ color: "white" }} />)
                            console.log(formObject);
                        }}>
                            <div className="d-flex justify-content-center">
                                <div className="p-3" style={{ width: "80%" }}>
                                    <div className="text-center px-3 py-2"><AssignmentIndSharpIcon sx={{ fontSize: 90, color: "rgb(56, 132, 255)", backgroundColor: "white" }} /></div>
                                    <div className="text-center py-1"><Box sx={{ fontSize: 30 }} >Welcome</Box></div>
                                    <div className="text-center py-1"><Box fontSize="medium"> Login to continue</Box></div>
                                    <div className="d-flex py-1 justify-content-center">
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            defaultValue="student"
                                            name="user_type"
                                            row
                                        >
                                            <FormControlLabel value="student" control={<Radio />} label="Student" />
                                            <FormControlLabel value="professor" control={<Radio />} label="Professor" />
                                        </RadioGroup>
                                    </div>
                                    <div className="py-3"><TextField name="email" required id="email" fullWidth label="Email" variant="outlined" type="email" /></div>
                                    <div className="pb-2"><TextField type="password" required name="password" fullWidth id="password" label="Password" variant="outlined" /></div>
                                    <div className="pb-2"><Button size="small" variant="text">Forgot Password?</Button></div>
                                    <div className="pb-3"><Button type="submit" className="py-2" style={{ width: "100%", fontSize: "medium", backgroundColor: "rgb(56, 132, 255)" }} variant="contained">{loading}</Button></div>
                                    <div className="pb-3"><span><Box> Don't have an account?  <Button size="small" variant="text">Sign up</Button></Box></span></div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="col-lg-4 col-0">

                </div>
                {/* </div> */}
            </div>

        </div>

    )
}

// width 30% in bootstrap