import  { useState } from "react";
import arrowImage from "../assets/arrowimg.png"; // Import your arrow image

const faqData = {
  q1: {
    question: "Can education flashcards be used for all age groups?",
    answer: "Yes, education flashcards can be used for all age groups. They are a versatile learning tool that can be adapted to various subjects and levels of complexity."
  },
  q2: {
    question: "How do education flashcards work?",
    answer: "Education flashcards work by presenting a question or a term on one side and the corresponding answer or definition on the other. This allows for quick and efficient review of information, helping to reinforce memory and improve retention."
  },
  q3: {
    question: "Can education flashcards be used for test preparation?",
    answer: "Absolutely! Education flashcards are an excellent tool for test preparation. They allow you to focus on specific topics and concepts, helping you to better retain and recall information during exams."
  }
};

const FAQ = () => {
  const [expanded, setExpanded] = useState(-1);

  const toggleFAQ = (index) => {
    if (expanded === index) {
      setExpanded(-1);
    } else {
      setExpanded(index);
    }
  };

  return (
    <div className="faq-container lg:w-2/4 mx-auto w-60">
      {Object.entries(faqData).map(([key, value], index) => (
        <div key={key} className="faq-item border rounded-lg border-blue-600 mb-4 last:mb-0 w-full overflow-hidden">
          <div className={`faq-question ${expanded === index ? "active border-blue-500" : "border-gray-300"} cursor-pointer p-4 rounded-lg`} onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-center overflow-hidden">
              <span>{value.question}</span>
              <img
                src={arrowImage}
                alt="arrow"
                className={`overflow-hidden faq-arrow transition-transform duration-200 ${expanded === index ? "rotate" : ""}`}
                style={{ width: '20px', height: '20px' }}
              />
            </div>
          </div>
          {expanded === index && (
            <div className="faq-answer p-4 bg-gray-100 border border-t-0 border-gray-300 overflow-hidden">
              {value.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
