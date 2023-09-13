import { Outlet } from 'ice';
import NavMenu from './components/NavMenu';
import styles from './index.module.scss';

export default function Layout() {
    return (
      <div className={styles.container}>
        <div className={styles.left} >
          <NavMenu />
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    );
}
