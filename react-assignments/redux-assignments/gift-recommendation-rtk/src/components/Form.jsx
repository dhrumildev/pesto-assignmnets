
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAge, setGender, setInterests } from '../features/preferenceSlice';
import { fetchRecommendations } from '../features/giftsSlice';

const Form = () => {
  const dispatch = useDispatch();
  const { age, gender, interests } = useSelector((state) => state.preferences);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchRecommendations({ age, gender, interests }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Age:
        <input type="text" value={age} onChange={(e) => dispatch(setAge(e.target.value))} />
      </label>
      <label>
        Gender:
        <input type="text" value={gender} onChange={(e) => dispatch(setGender(e.target.value))} />
      </label>
      <label>
        Interests:
        <input type="text" value={interests} onChange={(e) => dispatch(setInterests(e.target.value))} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
