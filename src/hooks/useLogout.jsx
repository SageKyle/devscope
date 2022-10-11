import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectAuth, projectFirestore } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch, user } = useAuthContext();
  const navigate = useNavigate();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    // log user out
    try {
      // update user's online status
      const { uid } = user;
      await projectFirestore
        .collection('users')
        .doc(uid)
        .update({ online: false });

      await projectAuth.signOut();

      // dispatch logout action
      dispatch({ type: 'LOGOUT' });

      setTimeout(() => {
        // TODO add a modal here for redirect
        navigate('/login');
      }, 1000);

      //   update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { logout, error, isPending };
};
