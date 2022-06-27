import { Typography } from '@/components/';
import React from 'react';
import { StyledStatus } from './Status.style';

type emailStatus = 'Scheduled' | 'Sent' | 'Archived' | 'Draft';

type taskStatus = 'Completed' | 'Ended' | 'Active';

type contactStatus = 'New' | 'Top rated' | 'Fired';

type dealStatus = 'Low' | 'High' | 'Urgent';

export type allStatus = emailStatus | taskStatus | contactStatus | dealStatus;

export interface StatusComponentProps {
  type: allStatus;
  iconsConfig?: { [key in allStatus]?: JSX.Element };
}

export const Status = ({ type, iconsConfig }: StatusComponentProps) => {
  return (
    <StyledStatus type={type}>
      <div style={{ padding: '1px 10px', display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '5px' }}> {iconsConfig && iconsConfig[type]}</div>
        <Typography size={11} color="white" weight="medium">
          {type}
        </Typography>
      </div>
    </StyledStatus>
  );
};
