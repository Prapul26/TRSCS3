const inboxData = [
    {
      id: 1,
      date: "March,10 2025 08:42am",
      introduction:"Manohar Porthi",
      sender: {
        name: "manohar porthi",
        namePic:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
        replies: 0,
      },
      recipient: "S Kumar Nelli",
      recipientImg:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain"

    },
    {
      id: 2,
      date: "March,05 2025 09:42am",
      introduction:"Swaran jeeth and Shankar Vanga ",
      sender: {
        name: "Swaran Jeeth",
        namePic:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
        name2Pic:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
        name2: " Shankar Vanga",
        replies: 3,
      },
      recipient: "S Kumar Nelli",
      recipientImg:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain"

    },
    {
      id: 3,
      date: "March,6 2025 08:42am",
      introduction:"S Kumar Nelli and  sample user ",
      sender: {
        name: "S Kumar Nelli",
        namePic:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
        replies: 1,
      },
      recipient: "S Kumar Nelli",
      recipientImg:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain"

    },
    {
        id: 1,
        date: "March,03 2025 08:42pm",
        introduction:"abxxyz and manohar porthi",
        sender: {
          name: "manohar porthi",
          namePic:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
          replies: 0,
        },
        recipient: "S Kumar Nelli",
        recipientImg:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain"

      },
      {
        id: 2,
        date: "March,04 2025 10:42pm",
        introduction:"manohar porthi and Shankar Vanga",
        sender: {
          name: "manohar porthi",
          name2: "Shankar vanga",
          namePic:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
          name2Pic:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
          replies: 3,
        },
        recipient: "S Kumar Nelli",
        recipientImg:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain"

      },
      {
        id: 3,
        date: "March,01 2025 03:42am",
        introduction:"Aaron Saltzman and trevor-1 Agre",
        sender: {
          name: "Aaron Saltzman",
          namePic:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
          name2Pic:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
          name2: " Trevor-1 Agre",
          replies: 1,
        },
        recipient: "S Kumar Nelli",
        recipientImg:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain"

      },
      {
        id: 1,
        date: "March,04 2025 08:40 am",
        introduction:"Arazon Saltzman and Sample user and Trevor-1 Agre and Aaron Saltzman",
        sender: {
          name: "Aaron Saltzman",
          namePic:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
          name2Pic:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
          name2: " Trevor-1 Agre",
          name3:"Aaron Saltzman",
          replies: 0,
        },
        recipient: "Narendhar Kumar",
        recipientImg:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain"
      },
      {
        id: 2,
        date: "March,04 2025 05:50 am",
        introduction:"Trevor-1 Agre and srini d",
                sender: {
          name: "John",
          namePic:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
          name2Pic:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
          name2: "sini D",
          replies: 3,
        },
        recipient: "S kumar Nelli",
        recipientImg:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain"

      },
      {
        id: 3,
           date: "January,21 2025 11:45 am",
        introduction:"Kumar Nelli and shvanga Vanga",
        sender: {
          name: "Trevor-1 Agre",
          namePic:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",
          name2Pic:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain",

          name2: "Shankar Vanga",
          replies: 1,
        },
        recipient: "Shankar Vanga",
        recipientImg:"https://th.bing.com/th/id/OIP.tvaMwK3QuFxhTYg4PSNNVAHaHa?rs=1&pid=ImgDetMain"

      },
  ];
  
  export default inboxData;
  