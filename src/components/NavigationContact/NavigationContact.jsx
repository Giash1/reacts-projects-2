// importing style
import styles from './NavigationContact.module.css'
import 'font-awesome/css/font-awesome.min.css'


const NavigationContact = () => {
    return (
        //  styles.navigation is a JavaScript variable or constant that holds a CSS class name.
        // By using ${ } inside the template literal, you can inject the
        // value of styles.navigation into the className attribute
        // container is a another global variable that consist css
        <nav className={`${styles.navigation} container`}>
            <div className={`${styles['nav-logo']}`}>
                <img
                    className={`${styles.pic1}`}
                    src="/images/pic1.avif"
                    alt="pic1"
                />
            </div>

            <ul>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">Favorite</a>
                </li>
            </ul>

            <div className={`${styles.container1}`}>
                <input type="text" placeholder="Search" />
                <a href="#">
                    <i className={`${styles.search} fas fa-search`}></i>
                </a>
            </div>
        </nav>
    )
}

export default NavigationContact;
