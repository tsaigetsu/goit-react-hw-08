import React, { useEffect, useState } from 'react';
import Description from "./Description/Description";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";
import { useDispatch } from 'react-redux';
import { refreshUserThunk } from '../redux/auth/operations';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  const handleFeedbackClick = (type) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = totalFeedback > 0 
    ? (feedback.good / totalFeedback * 100).toFixed(2) 
    : 0;

  return (
    <>
      <Description />
      <Options
        onGoodClick={() => handleFeedbackClick('good')}
        onNeutralClick={() => handleFeedbackClick('neutral')}
        onBadClick={() => handleFeedbackClick('bad')}
        onResetClick={handleReset}
        hasFeedback={totalFeedback > 0}
      />
      {totalFeedback > 0 ? (
        <Feedback 
          feedback={feedback} 
          totalFeedback={totalFeedback} 
          positivePercentage={positivePercentage} 
        />
      ) : (
        <Notification message="Any Feedback yet" />
      )}
    </>
  );
}

export default App;
