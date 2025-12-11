// src/Screen/Topic.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import notes from "../notes"; 
import '../style/global.css';

function Topic() {
  const { id } = useParams();
  const note = notes.find((n) => n.id === Number(id)); 

  

  return (
    <div style={{ padding: 20 }}>
      <Link to="/courses" className="back-btn">← Back to courses</Link>
      <h1 style={{ marginTop: 12 }}>{note.name}</h1>

  
      <pre style={{ whiteSpace: "pre-wrap", fontFamily: "inherit", lineHeight: 1.6 }}>
        {note.notes}
      </pre>
    </div>
  );
}

export default Topic;
