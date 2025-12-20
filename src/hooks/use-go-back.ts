import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

type TSteps = number | string;
export const useGoBack = ( steps:TSteps = 1) => {
  const navigate = useNavigate();
  const goBack = useCallback(() =>{
    navigate(-steps)
  },[navigate,steps])

  return goBack;
}