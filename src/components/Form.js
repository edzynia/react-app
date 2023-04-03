import { useState } from 'react';

const Form = ({ handleAddTeamMember }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [terms, setTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !terms) {
      window.alert('Fill in all the information');
      return;
    }
    handleAddTeamMember(name);
    setName('');
    setEmail('');
    setTerms(false);
  };

  return (
    <form className='pl-5 max-w-6xl' onSubmit={handleSubmit}>
      <h2 className='text-navy text-3xl mt-0 mb-5'>Register</h2>
      <h3 className='text-navy text-2xl'>
        Team player - Be positive - Beat yesterday
      </h3>
      <p className='text-black-60 leading-relaxed text-sm mb-5'>
        Together we re-define the experience of online gaming through
        gamification and novel technical solutions.
      </p>
      <input
        type='text'
        placeholder='name'
        value={name}
        onChange={(event) => setName(event.target.value)}
        className='block h-10 w-full border rounded-md pl-2 border-black-30 mb-2'
      />
      <input
        type='text'
        placeholder='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className='block h-10 w-full border rounded-md pl-2 border-black-30 mb-2'
      />
      <div className='my-3'>
        <input
          type='checkbox'
          name='terms'
          checked={terms}
          onChange={() => setTerms(!terms)}
        />
        <label htmlFor='terms' className='pl-2'>
          I agree to the terms{' '}
          <span className='text-black text-xs'>
            (and I'll bring nice fika every friday ;)
          </span>
        </label>
      </div>
      <button
        type='submit'
        className='bg-[#357edd] hover:bg-[#8fb9f0] text-white rounded-md py-2 px-4 border-0 mt-3 cursor-pointer'
      >
        I'm in, sign me up!
      </button>
    </form>
  );
};

export default Form;
