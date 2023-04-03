import { useState, useEffect } from 'react';
import TeamList from './components/TeamList';
import Form from './components/Form';

function App() {
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6')
      .then((response) => response.json())
      .then((data) => setTeamList(data.team));
  }, []);

  const handleAddTeamMember = (name) => {
    const newTeamMember = name;
    setTeamList([...teamList, newTeamMember]);
  };

  return (
    <div className='flex vh-100 items-center'>
      <TeamList teamList={teamList} />
      <Form handleAddTeamMember={handleAddTeamMember} />
    </div>
  );
}

export default App;
