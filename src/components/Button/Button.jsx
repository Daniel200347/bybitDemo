import React, {useState, useEffect} from 'react';
import * as platform from 'platform';
import classes from "./Button.module.css";
import classNames from "classnames";

const Button = ({className, buttonSize, btnText, forceActive}) => {
    const [isWindows, setIsWindows] = useState(false);
    const [osName, setOsName] = useState('');

    useEffect(() => {
        if (forceActive !== undefined) {
            setIsWindows(forceActive);
        } else {
            const os = platform.os.family;
            setOsName(os);
            setIsWindows(os.includes('Windows'));
        }
    }, [forceActive]);

    const handleDownload = () => {
        if (isWindows) {
            window.HANDLE_DOWNLOAD?.();
        }
    };

    return (
        <div className={className}>
            <button
                className={classNames({
                    [buttonSize]: true,
                    [classes.buttonActive]: isWindows,
                    [classes.buttonInActive]: !isWindows
                })}
                disabled={!isWindows}
                onClick={handleDownload}
            >
                Claim
            </button>
        </div>
    );
};

export default Button;
