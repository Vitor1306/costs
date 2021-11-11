import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.modules.css'


function Footer() {
  return (
    <footer className="footer">
      <ul className="list">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p>
        <span>Costs</span>
      </p>
    </footer>
  )
}

export default Footer
