import { useState } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import { Container } from './Style/Style.styled';




export default function StatisticsFeedback() {
    
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    const countFeedback = (e) => {
        switch (e.target.name) {
            case 'good':
                setGood(state => state + 1);
                break;
            case 'neutral':
                setNeutral(state => state + 1);
                break;
            case 'bad':
                setBad(state => state + 1);
                break;
            default: return;

        }
    }

    
   
    
  
    
        const countTotalFeedback = good + neutral + bad;
        const countPositiveFeedbackPercentage = Math.round(good / countTotalFeedback * 100);
        return (
            <Container>
                <Section title="Please leave feedback" children={<FeedbackOptions onClick={countFeedback }      
     />}>
                    
                </Section>
            
                <Section title="Statistics" children={countTotalFeedback===0 ? <Notification message="There is no feedback"></Notification> :
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback}
                        positivePercentage={countTotalFeedback === 0 ? 0:countPositiveFeedbackPercentage} />
                 } ></Section>

            </Container>
        )
     }
