import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faEarthAsia, faCircleQuestion, faKeyboard, faUser, faCoins, faGear, faSignOut } from "@fortawesome/free-solid-svg-icons";
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
// import 'tippy.js/dist/tippy.css';

import Button from "~/components/Button";
import styles from './Header.module.scss'
import images from "~/assets/img";
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from "~/components/AccountItem";
import Menu from "~/components/Popper/Menu";
import MenuItem from "~/components/Popper/Menu/MenuItem";
import { UploadIcon } from "~/components/Icons";
import Image from "~/components/Image";

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English'
                },
                {
                    code: 'vi',
                    title: 'Tieng Viet'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
    }
]

function Header() {

    const [searchResult, setSearchResult] = useState([])
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    //Handle Logic
    const handleMenuChange = () => {
        console.log(MenuItem)
    };


    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
            title: 'View profile',
            to: '/@hoaa'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
            title: 'Get coins',
            to: '/coins'
        },
        {
            icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
            title: 'Logout',
            to: '/logout',
            separate: true,
        },
    ];

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='Tiktok'></img>
            </div>
            <HeadlessTippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-results')} tabIndex='-1' {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Account
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Search account and videos" spellCheck={false}></input>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('spinner')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>


            <div className={cx('action')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} trigger="click" content="Upload video" placement="bottom">
                            <button className={cx('action-btn')}>
                                <UploadIcon></UploadIcon>
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text>Upload</Button>
                        <Button primary>login</Button>
                    </>
                )
                }
                <Menu
                    items={currentUser ? userMenu : MENU_ITEMS}
                    onChange={handleMenuChange}
                >
                    {currentUser ? (
                        <Image 
                            className={cx('user-avatar')} 
                            alt="Nguyen Van A" 
                            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/219e56290d96b5c4dae4c7750fb94a5b~c5_100x100.jpeg?x-expires=1676296800&x-signature=ZqG1mpN04XCLCKaqjRkV4ow0MLk%3D" />
                    ) : (
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                        </button>
                    )}
                </Menu>
            </div>

        </div >
    </header >
}

export default Header;