import React, { useEffect, useState } from 'react'
import "./ViewReferral.css"
import Header from '../Heaader/Header'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { TiArrowBack } from 'react-icons/ti'
import { useNavigate, useParams } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu';
import UserHeader from '../UserHeader';
import SideNav from '../../UserNavbar/SideNav';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import axios from 'axios';
import moment from "moment";
import { format } from 'date-fns';
const ViewReferral = () => {
    const [data, setData] = useState("")
    const [userId, setUserId] = useState(null);
    const [messageText, setMessageText] = useState("")
    const { id } = useParams();
    const [showSidebar, setShowSidebar] = useState(false);
    const [showReply, setReply] = useState(true)
    const [chat, setChat] = useState([])
    const [messageInput, setMessageInput] = useState(false)
    const [replyText, setReplyText] = useState("");
    const [commentText, setComment] = useState("")
    const [replierId, setReplier] = useState("")
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState(""); // "success" | "error"
    const [blogOwner, setOwner] = useState("")
    const [storedUserId, setrr] = useState("");
    const [userid, setUser] = useState("")
    const handleReply = async (id) => {
        setMessageInput(id);
        setReply(false)
    }
    const handleCancel = () => {
        setMessageInput(false);

    }
    const handleSend = async (id) => {
        const message = chat.find(item => item.id === id);
        if (!message) return;



        console.log(`chat ID: ${id}, comment from: ${message.chat_from?.id}, Reply Message: ${replyText}, reply from: ${replierId}, blogId: ${message.blog_id}`);

        try {
            const token = sessionStorage.getItem("authToken");
            const formData = new FormData();
            formData.append("blog_id", message.blog_id);
            formData.append("message_from", replierId); // your logged-in user ID
            formData.append("message", replyText);
            formData.append("chat_id", message.id);
            formData.append("comment_from", message.chat_from?.id); // original sender ID

            const response = await axios.post(
                "https://tracsdev.apttechsol.com/api/send_referral_reply",
                formData,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (response.data.status) {


                setMessage("...Reply sent successfully!..");
                setMessageType("success");
                setTimeout(() => {
                    setMessage();
                    window.location.reload(); handleCancel();
                }, 2000);
            }
        } catch (err) {
            console.error(err);
            alert("Failed to send reply.");
        }
    };



    const showMobnav = () => {
        setShowSidebar((prev) => !prev);
    };
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1);
    }
    const fetchData = async () => {
        try {
            const token = sessionStorage.getItem("authToken");
            setrr(sessionStorage.getItem("userId"));
            setUserId(storedUserId);

            const response = await axios.get(
                `https://tracsdev.apttechsol.com/api/view_referralsupport/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setData(response.data.blog);
            setChat(response.data.referral_chat);
            setOwner(response.data.blog?.posted_by?.id);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData(); // run on mount
    }, [id]);

    const adjustInternalHtml = (html) => {
        const container = document.createElement("div");
        container.innerHTML = html;
        return container.innerHTML;
    };
    const sendComment = async () => {
        console.log(`my Id : ${userid} , comment : ${commentText} , blogOwner: ${blogOwner}`);

        try {
            const token = sessionStorage.getItem("authToken");

            const formdata2 = new FormData();
            formdata2.append("blog_id", data.id);
            formdata2.append("message_from", userid);   // logged-in user ID
            formdata2.append("message", commentText);   // comment text
            formdata2.append("blog_owner", blogOwner);  // blog owner ID

            const response = await axios.post(
                "https://tracsdev.apttechsol.com/api/send_referral_comment",
                formdata2, // ✅ send the form data here
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.data.status) {
                setMessage("...Comment sent successfully!..");
                setMessageType("success");
                fetchData();
                setTimeout(() => {
                    setMessage("");

                    setComment("");
                }, 2000);
            }
        } catch (err) {
            console.error(err);
            alert("Comment not sent");
        }
    };

    const formattedDate = moment("2025-09-16T02:08:49.000000Z").format("MMMM, DD YYYY hh:mm a");
    const shouldShowCommentSection = !chat.some(
        (item) => item.chat_from?.id === data.blog_created_by
    );
    const fetchData2 = async () => {

        try {
            const token = sessionStorage.getItem("authToken");

            const response = await axios.get(
                `https://tracsdev.apttechsol.com/api/my-profile`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setUser(response.data.user.id)
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchData2(); // run on mount
    }, [id]);

    return (
        <div style={{ height: "fit-content" }}>
            <div className='mobMenuaa'>
                {<div className="errmsg" style={{ backgroundColor: messageType === "success" ? "green" : "red" }}><p>{message}</p></div>}

                <div className='mobMenu33'>
                    {showSidebar && <MobileMenu />}
                </div>
                <div>
                    <UserHeader />

                    <div className="SPPP">
                        <div className="usernav">
                            <SideNav />
                        </div>
                        <div className="SPP">
                            <MobileNavbar showMobnav={showMobnav} />
                            <div className='reffContainer'>
                                <div className='headerRef'>
                                    <div><h2>Referral Support</h2></div>


                                </div>

                                <div>
                                    <button
                                        style={{ marginTop: "20px", background: " #163b6d", marginBottom: "20px" }}
                                        onClick={() => navigate(-1)}
                                    >
                                        Back
                                    </button>
                                </div>
                                <div className='refdetailscontaoner'>
                                    <div className='refererDetails'>
                                        <div className='refererDetails1'><img src={`https://tracsdev.apttechsol.com/public/${data.posted_by?.image}`
                                        } /></div>
                                        <div className='refererDetails2'>
                                            <h2>{data.blog_title}</h2>
                                            <div style={{ marginTop: "-30px", display: "flex" }}><p>{data.posted_by?.name}</p></div>
                                            <div style={{ marginTop: "-30px", display: "flex" }}><p>
                                                {data?.created_at
                                                    ? format(new Date(data.created_at), "MMMM, dd yyyy hh:mm a")
                                                    : ""}
                                            </p></div>
                                        </div>
                                    </div>
                                    <div className='referralDescription' >
                                        <div className='referralDescription1'>
                                            {data.blog_file && (
                                                <img
                                                    src={`https://tracsdev.apttechsol.com/public/${data.blog_file}`}
                                                    alt="Referral"
                                                />
                                            )}
                                        </div>

                                        <div dangerouslySetInnerHTML={{ __html: adjustInternalHtml(data.description) }} ></div>
                                    </div>
                                   
                                    <div className='viewComment'>
                                        {chat.map((item) => {
                                            const sender = item.chat_from || item.reply_from;
                                            const parentMessage = item.reply_to ? chat.find((msg) => msg.id === Number(item.reply_to)) : null;
                                            return (<div className='viewCommentHolde' key={item.id}>
                                                <div className='senderCard'>
                                                    <div className='senderImage'>
                                                        <img src={
                                                            item.chat_from?.image
                                                                ? `https://tracsdev.apttechsol.com/public/${item.chat_from.image}`
                                                                : item.reply_from?.image
                                                                    ? `https://tracsdev.apttechsol.com/public/${item.reply_from.image}`
                                                                    : "/default-profile.png"
                                                        }
                                                            alt="User" />
                                                    </div>
                                                    <div className='senderDetails'>
                                                        <p className='p1co'>{item.chat_from?.name || item.reply_from?.name}</p>
                                                        <p className='p2co'>  {item.created_at
                                                            ? format(new Date(item.created_at), "MMMM, dd yyyy hh:mm a")
                                                            : ""}</p>
                                                    </div>
                                                </div>
                                                <div className='senderComment'>
                                                    <div>
                                                        {parentMessage && (
                                                            <div style={{ color: "gray", marginBottom: "5px" }}>
                                                             <h3>  {parentMessage.message}</h3> 
                                                            </div>)}
                                                        <div style={{ color: item.reply_to !== null ? "blue" : "black" }}><h3>{item.reply_to !== null && ("Re:")} {item.message}</h3> </div>

                                                    </div>
                                                </div>
                                            </div>)
                                        })}
                                    </div>
                                     <div className='commentSecHolder'>
                                                            <div className='commentSecHolder1'><input placeholder='comment here' onChange={(e) => setComment(e.target.value)} /></div>
                                                            <div className='commentSecHolder2'><button onClick={sendComment}>Send</button></div>
                                                        </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewReferral
