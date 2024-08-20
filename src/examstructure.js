// src/ExamInfo/ExamInfo.js
import React from 'react';
import './examsture.css';
import Navbar from './navbar';

const Examstructure = () => {
  return (
    <>
    <Navbar/>
    <div className="exam-info-container">
      <h1>Exam Information</h1>

      <section className="exam-structure">
        <h2>Exam Structure</h2>
        <ul>
          <li><strong>Total Number of Questions:</strong> 60</li>
          <li><strong>Sections:</strong>
            <ul>
              <li>Numerical Ability: 15 questions</li>
              <li>Reasoning: 15 questions</li>
              <li>English: 15 questions</li>
              <li>Computer Fundamentals: 15 questions</li>
            </ul>
          </li>
          <li><strong>Total Marks:</strong> 60 marks (Each question carries 1 mark)</li>
          <li><strong>Time Allotted:</strong> 60 minutes</li>
          <li><strong>Mode of Exam:</strong> Available in both online and offline formats</li>
          <li><strong>Eligibility:</strong> Open to all graduates</li>
          <li><strong>Negative Marking:</strong> No negative marking</li>
        </ul>
      </section>

      <section className="exam-rules">
        <h2>Exam Rules</h2>
        <ul>
          <li><strong>Reporting Time:</strong>
            <ul>
              <li>Offline Mode: Candidates should report to the exam center 30 minutes before the exam start time.</li>
              <li>Online Mode: Candidates should log in to the exam portal 15 minutes before the exam start time.</li>
            </ul>
          </li>
          <li><strong>ID Verification:</strong>
            <ul>
              <li>Offline Mode: Candidates must bring a valid photo ID (Aadhaar card, Passport, Voter ID, etc.).</li>
              <li>Online Mode: Candidates will need to verify their identity through the exam portal using an ID document.</li>
            </ul>
          </li>
          <li><strong>Materials Allowed:</strong>
            <ul>
              <li>Offline Mode: Candidates may bring a pen, pencil, and an eraser. All other materials will be provided.</li>
              <li>Online Mode: Candidates should ensure they have a stable internet connection, a computer or tablet, and basic stationery.</li>
            </ul>
          </li>
          <li><strong>Prohibited Items:</strong>
            <ul>
              <li>Mobile phones, smartwatches, calculators, or any electronic devices.</li>
              <li>Books, notes, or any other study materials.</li>
            </ul>
          </li>
          <li><strong>Conduct:</strong>
            <ul>
              <li>Candidates must maintain discipline and avoid any form of malpractice.</li>
              <li>For online exams, ensure a quiet and distraction-free environment.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="terms-conditions">
        <h2>Terms and Conditions</h2>
        <ul>
          <li><strong>Eligibility:</strong> This test is open to candidates who have graduated from a recognized institution. By applying, candidates confirm that they meet the eligibility criteria.</li>
          <li><strong>Mode of Exam:</strong> Candidates may choose between online and offline modes at the time of registration. Once chosen, the mode of the exam cannot be changed.</li>
          <li><strong>Technical Requirements for Online Exam:</strong>
            <ul>
              <li>A reliable internet connection is mandatory for taking the online exam.</li>
              <li>The exam portal will support the latest versions of major browsers like Chrome, Firefox, and Safari.</li>
              <li>It is the candidate's responsibility to ensure their device meets the technical requirements.</li>
            </ul>
          </li>
          <li><strong>Exam Integrity:</strong>
            <ul>
              <li>Any attempt to cheat, copy, or use unfair means during the exam will result in immediate disqualification.</li>
              <li>For online exams, candidates will be monitored via webcam, and any suspicious activity will be flagged.</li>
            </ul>
          </li>
          <li><strong>Results:</strong> The results will be announced within two weeks of the exam date. The decision of the exam committee regarding the results will be final.</li>
          <li><strong>Data Privacy:</strong> Personal information provided during registration will be used solely for exam purposes. We are committed to protecting the privacy of all candidates and will not share personal data with third parties.</li>
          <li><strong>Cancellation and Rescheduling:</strong> The exam may be rescheduled or canceled due to unforeseen circumstances. In such cases, candidates will be notified at the earliest.</li>
          <li><strong>Appeals:</strong> Any appeal or grievance regarding the exam must be submitted in writing within three days of the exam date. Appeals will be reviewed by the exam committee, and the decision will be communicated within a week.</li>
        </ul>
      </section>
    </div>
    </>
  );
};

export default Examstructure;
