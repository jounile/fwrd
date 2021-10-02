import { h } from 'preact';
import Styles from './styles.module.scss';

function Nav() {
  return (
    <nav className={Styles.nav}>
      <a className={Styles.link} href="/portfolio">
        Portfolio
      </a>

      <a className={Styles.link} href="/about">
        About
      </a>
      
    </nav>
  );
}
export default Nav;