import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2>Logo</h2>
                <h2>Search</h2>
                <h2>Icon</h2>
            </div>
        </header>
    );
}

export default Header;
