import React from 'react';
import { getInitials } from '../../utils/helper';

const ProfileInfo = ({ userInfo, onLogout }) => {
  if (!userInfo || !userInfo.fullName) {
    return (
      <div className='flex items-center gap-3'>
        <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>
          ?
        </div>
        <div>
          <p className='text-sm font-medium'>NA</p>
          <button className='text-sm text-slate-700 underline' onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  const initials = getInitials(userInfo.fullName);

  return (
    <div className='flex items-center gap-3'>
      <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>
        {initials}
      </div>
      <div>
        <p className='text-sm font-medium'>{userInfo.fullName}</p>
        <button className='text-sm text-slate-700 underline' onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
