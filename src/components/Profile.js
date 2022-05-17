import { useState } from 'react'
import axios from "axios";

function Profile(props) {

    const [data, setdata] = useState(null)
    function getData() {
        axios({
            method: "GET",
            url: "/data",
            headers: {
                Authorization: 'Bearer ' + props.token
            }
        })
            .then((response) => {
                const res = response.data
                res.access_token && props.setToken(res.access_token)
                setdata(({
                    name: res.Name,
                    age: res.Age,
                    date: res.Date,
                    programming: res.programming,
                }))
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })
    }

    return (
        <div className="Profile">

            <p>To get your profile details: </p><button onClick={getData}>Click me</button>
            {data && <div>
                <p>Programming: {data.programming}</p>
                <p>Age: {data.age}</p>
                <p>date:{data.date}</p>
                <p>name:{data.name}</p>
            </div>
            }

        </div>
    );
}

export default Profile;