import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import { Box } from './Box';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const handlerChange = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return Math.round((good / totalFeedback()) * 100);
  };

  return (
    <Box
      backgroundColor="primary"
      height="100vh"
      fontSize={14}
      pt="80px"
      as="main"
    >
      <h1
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          fontSize: '64px',
          color: '#1C4931',
        }}
      >
        Cafe Expresso
      </h1>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handlerChange}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {totalFeedback() === 0 ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positivePercentage()}
          />
        )}
      </Section>
    </Box>
  );
};
