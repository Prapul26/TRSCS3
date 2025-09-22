import React, { useEffect, useState } from 'react'
import "./ViewReferral.css"
import Header from '../Heaader/Header'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { TiArrowBack } from 'react-icons/ti'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import moment from "moment";
import { format } from 'date-fns';
const ViewReferral = () => {
    const [data, setData] = useState("")
    const { id } = useParams();
    const [chat, setChat] = useState([])

    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1);
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = sessionStorage.getItem("authToken");
                const response = await axios.get(
                    `https://tracsdev.apttechsol.com/api/view_referralsupport/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setData(response.data.blog);
                setChat(response.data.referral_chat)
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [id]);
    const adjustInternalHtml = (html) => {
        const container = document.createElement("div");
        container.innerHTML = html;
        return container.innerHTML;
    };


    const formattedDate = moment("2025-09-16T02:08:49.000000Z").format("MMMM, DD YYYY hh:mm a");

    return (
        <div>
            <div className='referaalViewContainer'>
                <Header />
                <Navbar />
                <div className="ph1">
                    <div className="p1h1">
                        <h1 style={{ fontSize: '35px' }}>Referral Support</h1>
                    </div>
                </div>
                <div className='referaalViewHolder'>
                    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                        {" "}
                        <button style={{ borderRadius: "30px", border: "transparent", background: "#163b6d" }} onClick={handleGoBack}>
                            <span>

                                <TiArrowBack color="white" size={35} style={{ background: "#163b6d" }} />

                            </span>{" "}
                        </button>
                    </div>
                    <div className='refererDetails'>
                        <div className='refererDetails1'><img src={`https://tracsdev.apttechsol.com/public/${data.posted_by?.image}`
                        } /></div>
                        <div className='refererDetails2'>
                            <h2>{data.blog_title}</h2>
                            <div style={{ marginTop: "-10px" }}>{data.posted_by?.name}</div>
                            <div style={{ marginTop: "-10px" }}><p>
                                {data?.created_at
                                    ? format(new Date(data.created_at), "MMMM, dd yyyy hh:mm a")
                                    : ""}
                            </p></div>
                        </div>
                    </div>
                    <div className='referralDescription' >
                        <div className='referralDescription1'><img src={`https://tracsdev.apttechsol.com/public/${data.blog_file}`
                        } /></div>
                        <div dangerouslySetInnerHTML={{ __html: adjustInternalHtml(data.description) }} ></div>
                    </div>
                    <div className='refMessages'>
                        <table>
                            <tbody>
                                {chat.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <p>{item.chat_from?.name || item.reply_from?.name}</p>
                                            <img 
                                                src={
                                                    item.chat_from?.image
                                                        ? `https://tracsdev.apttechsol.com/public/${item.chat_from.image}`
                                                        : item.reply_from?.image
                                                            ? `https://tracsdev.apttechsol.com/public/${item.reply_from.image}`
                                                            : "/default-profile.png"
                                                }
                                                alt="User"
                                            />


                                            <div>
                                                {item.created_at
                                                    ? format(new Date(item.created_at), "MMMM, dd yyyy hh:mm a")
                                                    : ""}
                                            </div>
                                        </td>
                                        <td>
                                            <div>{item.message}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
                <Footer />
            </div>
        </div>
    )
}

export default ViewReferral
