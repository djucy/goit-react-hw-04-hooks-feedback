import { ButtonList, Button } from './Style/Style.styled';
import { memo} from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onClick }) => {
    return (
        <ButtonList>
                <li><Button name="good" onClick={onClick}>Good</Button></li>
                <li><Button name="neutral" onClick={onClick}>Neutral</Button></li>
                <li><Button name="bad" onClick={onClick}>Bad</Button></li>
            </ButtonList>
) 
}
FeedbackOptions.propTypes = {
onClick:PropTypes.func.isRequired,   
}
export default memo(FeedbackOptions);
