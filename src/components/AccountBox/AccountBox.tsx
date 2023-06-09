import { FC, useContext } from 'react';
import styles from './AccountBox.module.css';
import { AuthContext } from '../../services/AuthContext';
import { TContext } from '../../utils/types';

const AccountBox: FC = () => {
  const { state, setState } = useContext<TContext>(AuthContext);
  return state.userData !== null ? (
    //Тут будет не профиль
    <div className={styles.accountBox}>
      <img
        className={styles.profilePhoto}
        src={state.userData.profile.photo}
        alt='Фото профиля'
      />
      <p className={styles.profileName}>{state.userData.profile.name}</p>
    </div>
  ) : null;
};

export default AccountBox;
