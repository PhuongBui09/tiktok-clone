import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles)

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/42a81079b5885e152707b170d63ba2df~c5_300x300.webp?x-expires=1686146400&x-signature=9pUMxeX%2FSXr5pdjSdJu%2B7geYpv0%3D' alt='Hoaa' />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Hoaa ne</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>vanhoa</span>
        </div>
    </div>
}

export default AccountItem;