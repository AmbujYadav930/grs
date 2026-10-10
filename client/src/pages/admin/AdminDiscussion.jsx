import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDiscussion = () => {
  const [questions, setQuestions] = useState([]);
  //const [users, setUsers]=useState([]);
  const [replyId, setReplyId] = useState(null); // kaunsa question open hai
  const [answerText, setAnswerText] = useState("");

  const handlefetch = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/discussion/show");
      console.log(res.data);
      setQuestions(res.data.question || []);
    } catch (er) {
      console.log(er);
      setQuestions([]);
    }
  };

 
  useEffect(() => {
    handlefetch();

  }, []);

  const handleAnswerSubmit = async (qId) => {
    if (!answerText.trim()) return alert("Answer likho bhai");

    console.log("Question ID:", qId);
    console.log("Answer:", answerText);

    const adminId="Admin";
    try{

    axios.post(`http://localhost:5000/api/discussion/answer`,{
      questionId:qId,
      userId:adminId,
      answer:answerText

    })
    
    // yaha API call karna: axios.post(`/api/admin/answer/${qId}`, {answer: answerText})
    
    alert("Answer posted!");
    setAnswerText("");
    setReplyId(null); // box band kar do
  }catch(er){
    console.log(er);
    alert("server error")
  }

}

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
    <div>
      <h4 className="mb-4 fw-bold">Student Discussion Forum</h4>

      {questions.map((q) => (
        <div key={q._id} className="card shadow-sm mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start">
              <div>
                <h6 className="card-subtitle mb-2 text-muted">
                  <i className="bi bi-person-circle me-2"></i>{q.userId.name}
                </h6>
                <p className="card-text"><b>Q:</b> {q.question}</p>
              </div>

              <button className="btn btn-sm btn-outline-primary" onClick={()=>handleDelete(q._id)}>Delete</button>
              
              <button 
                className="btn btn-sm btn-outline-primary"
                onClick={() => setReplyId(replyId === q._id ? null : q._id)} // toggle
              >
                <i className="bi bi-reply-fill me-1"></i>
                {replyId === q._id ? "Cancel" : "Reply"}
              </button>
            </div>

            {/* INLINE REPLY BOX - Yahi magic hai */}
            {replyId === q._id && (
              <div className="mt-3 pt-3 border-top">
                <label className="form-label fw-semibold">Your Answer</label>
                <textarea
                  className="form-control mb-2"
                  rows="3"
                  value={answerText}
                  onChange={(e) => setAnswerText(e.target.value)}
                  placeholder="Write admin answer here..."
                  autoFocus
                ></textarea>
                <button 
                  className="btn btn-success btn-sm"
                  onClick={() => handleAnswerSubmit(q._id)}
                >
                  <i className="bi bi-send-fill me-1"></i> Post Answer
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDiscussion;