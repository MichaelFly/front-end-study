import { Link } from 'ice';
import {FormattedMessage,FormattedRelativeTime} from "react-intl";

const MS_IN_DAY = 1e3 * 3600 * 24

export default function BlogA() {
    const date:any = new Date(1459913574887)
    return (
        <>
            <h2>blog a</h2>
            <div>
                <FormattedMessage id="buttonText" />
            </div>
            <div>
                <FormattedMessage
                    id="whatever"
                    description="hello world"
                    defaultMessage="Hello {placeholder}"
                    values={{ placeholder: "world" }}
                />
            </div>
            <div>
                <FormattedRelativeTime value={(Date.now() - date)/MS_IN_DAY} unit="day"/>
            </div>
            <ul>
                <li><Link to="/">Index</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </>
    );
}
