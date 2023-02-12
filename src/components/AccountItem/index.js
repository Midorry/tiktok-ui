import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import Image from "../Image";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8c5b0dfc85ba3eaa6db178505c5e22c1~c5_100x100.jpeg?x-expires=1675609200&x-signature=Gyhk1CfYJ%2BdpfeVncdcm2EIDxI8%3D" alt="Hoaa"></Image>
            <h4 className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </h4>
        </div>
    );
}

export default AccountItem;