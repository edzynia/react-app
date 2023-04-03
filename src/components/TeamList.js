import '../App.css';

const TeamList = ({ teamList }) => {
  return (
    <div className='bg-cogs text-white p-6 h-screen '>
      <h1 className='text-4xl font-bold'>Join the team</h1>
      {/* this is super bad practice, just used it as we do not have a
            unique id */}
      <ul className='p-5 list-disc'>
        {teamList?.map((teamMember, id) => (
          <li key={id} className='items-center p-2'>
            {' '}
            <p className='text-base'>{teamMember}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;
