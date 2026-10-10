// import React, { useState, useEffect } from "react";
// import axios from "axios"

// const DiscussForum = () => {
//   const [data, setData] = useState({ question: "" });
//   const [questions, setQuestions] = useState([]);
//   const [answers , setAnswers] = useState([]);

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value })
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if(!data.question.trim()){
//       alert("please enter question")
//       return 
//     }
//     try {
//       const userId = localStorage.getItem("userId")
//       const res = await axios.post(
//         `http://localhost:5000/api/discussion/question`,
//         data,
//         {headers:{userid:userId}}
//       );
      
//       alert(res.data.msg);
//       setData({question:""})
//       handlefetch(); // ✅ sirf yehi, setQuestions hata do
      
//     } catch (er) {
//       alert(er.response?.data?.msg || "Server Error");
//       console.log(er);
//     }
//   };

//   const handlefetch = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/discussion/show");
//       console.log(res.data);
//       setQuestions(res.data.question || []);
//     } catch (er) {
//       console.log(er);
//       setQuestions([]);
//     }
//   };

//   const handleAnswer=async ()=>{
//     try {
//       const res=await axios.get(`http://localhost:5000/api/discussion/answer/${qId}`);
//       console.log(res.data);
//       setAnswers(res.data.answers);
//     }catch(er){
//       console.log(er);
//       setAnswers([]);
//     }
//   }

//   useEffect(() => {
//     handlefetch();
//     handleAnswer();
//   }, []);

//   return (
//     <div className="forum-container text-center">
//       {/* Ask Question Card */}
//       <div className="ask-card">
//         <h3 className="text-center mb-3">Ask Question</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <textarea
//               className="form-control"
//               name="question"
//               value={data.question}
//               onChange={handleChange}
//               rows="3"
//               placeholder="please enter your question"
//             ></textarea>
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Add Question
//           </button>
//         </form>
//       </div>

//       {/* Questions Table */}
//       <div className="table-wrapper mt-5 m-auto" style={{maxWidth: '80%'}}>
//         <table className="table table-bordered text-center">
//           <thead className="table-light">
//             <tr>
//               <th>S No.</th>
//               <th>Question</th>
//               <th>Answer</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {questions.length > 0 ? questions.map((item, i) => (
//               <tr>
//                 <td>{i + 1}</td>
//                 <td className="text-start">{item.question}</td>
//                 <td className="text-start">{item.answers}
//                 </td>
//                 <td>
//                   <button className="btn btn-sm btn-outline-primary">delete</button>
//                   <span className="text-muted ms-1">(0)</span>
//                 </td>
//               </tr>
//             )) : (
//               <tr><td colSpan="4">No questions yet</td></tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default DiscussForum;


import React, { useState, useEffect } from "react";
import axios from "axios"

const DiscussForum = () => {
  const [data, setData] = useState({ question: "" });
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({}); // 1. Object kar diya

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!data.question.trim()){
      alert("please enter question")
      return 
    }
    try {
      const userId = localStorage.getItem("userId")
      const res = await axios.post(
        `http://localhost:5000/api/discussion/question`,
        data,
        {headers:{userid:userId}}
      );
      
      alert(res.data.msg);
      setData({question:""})
      handlefetch(); // question ke baad dubara fetch
      
    } catch (er) {
      alert(er.response?.data?.msg || "Server Error");
      console.log(er);
    }
  };

  const handlefetch = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/discussion/show");
      console.log(res.data);
      const qList = res.data.question || [];
      setQuestions(qList);

      // 2. Har question ke liye answer fetch karo
      qList.forEach(q => fetchAnswers(q._id));
      
    } catch (er) {
      console.log(er);
      setQuestions([]);
    }
  };

  const fetchAnswers = async (qId)=>{ // 3. qId parameter liya
    try {
      const res = await axios.get(`http://localhost:5000/api/discussion/answer/${qId}`);
      console.log(res.data);
      setAnswers(prev => ({...prev, [qId]: res.data.answers || []})); // Object me save
    }catch(er){
      console.log(er);
    }
  }

  useEffect(() => {
    handlefetch();
    // handleAnswer() yaha se hata do
  }, []);

  const handleDelete = async (qId) => {
  if(!window.confirm("Delete this question?")) return;
  try{
    const res = await axios.delete(`http://localhost:5000/api/discussion/${qId}`)
    alert(res.data.msg)
    handlefetch(); // list refresh
  }catch(er){
    console.log(er)
    alert("Error deleting")
  }
}

  return (
    <div className="forum-container text-center">
      {/* Ask Question Card */}
      <div className="ask-card">
        <h3 className="text-center mb-3">Ask Question</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <textarea
              className="form-control"
              name="question"
              value={data.question}
              onChange={handleChange}
              rows="3"
              placeholder="please enter your question"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Add Question
          </button>
        </form>
      </div>

      {/* Questions Table */}
      <div className="table-wrapper mt-5 m-auto" style={{maxWidth: '80%'}}>
        <table className="table table-bordered text-center">
          <thead className="table-light">
            <tr>
              <th>S No.</th>
              <th>Question</th>
              <th>Answer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {questions.length > 0? questions.map((item, i) => (
              <tr key={item._id}> {/* key add kiya */}
                <td>{i + 1}</td>
                <td className="text-start">{item.question}</td>
                <td className="text-start">
                  {/* 4. Yaha map lagao */}
                  {answers[item._id] && answers[item._id].length > 0? (
                    answers[item._id].map((ans, idx) => (
                      <div key={idx} className="mb-1 p-1 bg-light ">
                         {ans.answer}
                      </div>
                    ))
                  ) : (
                    <span className="text-muted">No answers yet</span>
                  )}
                </td>
                <td>
                  <button className="btn btn-sm btn-outline-primary" onClick={()=>handleDelete(item._id)}>delete</button>
                  <span className="text-muted ms-1">({answers[item._id]?.length || 0})</span>
                </td>
              </tr>
            )) : (
              <tr><td colSpan="4">No questions yet</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiscussForum;