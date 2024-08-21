// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, EffectCoverflow } from "swiper/modules";
// import background2 from "./assets/jorflag.jpg";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";

// function PartyListVoting() {
//   const [partyLists, setPartyLists] = useState([]);
//   const [selectedList, setSelectedList] = useState(null);
//   sessionStorage.setItem("currentuser", "2000000289");

//   useEffect(() => {
//     fetchPartyLists();
//   }, []);

//   const fetchPartyLists = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/party_list_votes"
//       );
//       setPartyLists(response.data);
//     } catch (error) {
//       console.error("Error fetching party lists:", error);
//     }
//   };

//   const handleVote = async () => {
//     if (!selectedList) {
//       alert("الرجاء اختيار قائمة أولاً");
//       return;
//     }

//     const currentUser = sessionStorage.getItem("currentuser");
//     if (!currentUser) {
//       alert("لم يتم العثور على معرف المستخدم");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/party_list_votes", {
//         listId: selectedList.LIST_ID,
//         nationalId: currentUser,
//       });
//       alert("تم التصويت بنجاح!");
//       setSelectedList(null);
//       fetchPartyLists();
//     } catch (error) {
//       console.error("Error voting:", error);
//       alert("حدث خطأ أثناء التصويت. الرجاء المحاولة مرة أخرى.");
//     }
//   };

//   const handleSelectList = (list) => {
//     setSelectedList(list);
//   };

//   return (
//     <div
//       className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"
//       style={{
//         backgroundImage: `url(${background2})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
//           التصويت على قوائم الأحزاب
//         </h1>
//         <Swiper
//           effect={"coverflow"}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={1}
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           navigation={true}
//           modules={[EffectCoverflow, Navigation]}
//           className="mySwiper"
//         >
//           {partyLists.map((list, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className={`bg-white shadow-2xl rounded-lg p-8 mx-auto w-80 h-96 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
//                   selectedList === list
//                     ? "bg-green-50 scale-105"
//                     : "hover:bg-gray-50"
//                 }`}
//                 onClick={() => handleSelectList(list)}
//               >
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
//                   {list.LIST_NAME}
//                 </h2>
//                 <div className="flex items-center justify-center h-3/4">
//                   <p className="text-lg text-center text-gray-600">
//                     اضغط لاختيار هذه القائمة
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="mt-12 flex justify-center">
//           <button
//             onClick={handleVote}
//             className={`bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out text-xl ${
//               !selectedList ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             disabled={!selectedList}
//           >
//             تصويت
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PartyListVoting;










// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, EffectCoverflow } from "swiper/modules";
// import background2 from "./assets/party-removebg-preview.png";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/effect-coverflow";

// function PartyListVoting() {
//   const [partyLists, setPartyLists] = useState([]);
//   const [selectedList, setSelectedList] = useState(null);
//   sessionStorage.setItem("currentuser", "2000000289");

//   useEffect(() => {
//     fetchPartyLists();
//   }, []);

//   const fetchPartyLists = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/api/party_list_votes"
//       );
//       setPartyLists(response.data);
//     } catch (error) {
//       console.error("Error fetching party lists:", error);
//     }
//   };

//   const handleVote = async () => {
//     if (!selectedList) {
//       alert("Please select a list first.");
//       return;
//     }

//     const currentUser = sessionStorage.getItem("currentuser");
//     if (!currentUser) {
//       alert("User ID not found.");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:5000/api/party_list_votes", {
//         listId: selectedList.LIST_ID,
//         nationalId: currentUser,
//       });
//       alert("Vote submitted successfully!");
//       setSelectedList(null);
//       fetchPartyLists();
//     } catch (error) {
//       console.error("Error voting:", error);
//       alert("An error occurred while voting. Please try again.");
//     }
//   };

//   const handleSelectList = (list) => {
//     setSelectedList(list);
//   };

//   return (
//     <div
//       className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8"
//       style={{
//         backgroundImage: `url(${background2})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div className="w-full max-w-3xl mx-auto p-4 bg-white bg-opacity-60 rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           مارس حقك الإنتخابي
//         </h1>
//         <Swiper
//           effect={"coverflow"}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={1}
//           coverflowEffect={{
//             rotate: 50,
//             stretch: 0,
//             depth: 100,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           navigation={true}
//           modules={[EffectCoverflow, Navigation]}
//           className="mySwiper mb-8"
//         >
//           {partyLists.map((list, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className={`bg-white shadow-lg rounded-lg p-6 mx-auto w-full max-w-md cursor-pointer transition-transform transform hover:scale-105 ${
//                   selectedList === list
//                     ? "bg-green-100 scale-105"
//                     : "hover:bg-gray-100"
//                 }`}
//                 onClick={() => handleSelectList(list)}
//               >
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//                   {list.LIST_NAME}
//                 </h2>
//                 <p className="text-lg text-gray-600 text-center">
// اضغط لاختيار القائمة                </p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="flex justify-center">
//           <button
//             onClick={handleVote}
//             className={`bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out ${
//               !selectedList ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             disabled={!selectedList}
//           >
//             Vote
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PartyListVoting;







import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import background2 from "./assets/party-removebg-preview.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Swal from 'sweetalert2'; // Import SweetAlert2

function PartyListVoting() {
  const [partyLists, setPartyLists] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
  sessionStorage.setItem("currentuser", "1234567891");

  useEffect(() => {
    fetchPartyLists();
  }, []);

  const fetchPartyLists = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/party_list_votes"
      );
      setPartyLists(response.data);
    } catch (error) {
      console.error("Error fetching party lists:", error);
    }
  };

  const handleVote = async () => {
    if (!selectedList) {
      Swal.fire('Error', 'Please select a list first.', 'error');
      return;
    }

    const currentUser = sessionStorage.getItem("currentuser");
    if (!currentUser) {
      Swal.fire('Error', 'User ID not found.', 'error');
      return;
    }

    // Confirmation alert
    const result = await Swal.fire({
      title: 'هل أنت متأكد؟',
      text: `صوتك سوف يحتسب ل "${selectedList.LIST_NAME}".`,
      icon: 'تحذير',
      showCancelButton: true,
      confirmButtonColor: '#008000',
      cancelButtonColor: '#ff0000',
      confirmButtonText: 'نعم, صوّت!'
    });

    if (result.isConfirmed) {
      try {
        await axios.post("http://localhost:5000/api/party_list_votes", {
          listId: selectedList.LIST_ID,
          nationalId: currentUser,
        });
        Swal.fire({
          text:'تمت التصويت بنجاح' ,
          confirmButtonColor: '#008000'
      });
        setSelectedList(null);
        fetchPartyLists();
      } catch (error) {
        console.error("Error voting:", error);
        Swal.fire('Error', 'An error occurred while voting. Please try again.', 'error');
      }
    }
  };

  const handleSelectList = (list) => {
    setSelectedList(list);
  };

  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${background2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="w-full max-w-3xl mx-auto p-4 bg-white bg-opacity-60 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          مارس حقك الإنتخابي
        </h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper mb-8"
        >
          {partyLists.map((list, index) => (
            <SwiperSlide key={index}>
              <div
                className={`bg-white shadow-lg rounded-lg p-6 mx-auto w-full max-w-md cursor-pointer transition-transform transform hover:scale-105 ${
                  selectedList === list
                    ? "bg-green-100 scale-105"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSelectList(list)}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  {list.LIST_NAME}
                </h2>
                <p className="text-lg text-gray-600 text-center">
                  اضغط لاختيار القائمة
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center">
          <button
            onClick={handleVote}
            className={`bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out ${
              !selectedList ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!selectedList}
          >
            Vote
          </button>
        </div>
      </div>
    </div>
  );
}

export default PartyListVoting;
