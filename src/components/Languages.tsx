import './Languages.css'

function Languages() {
    return (
        <section className="languages">
            <div className="content-width">
                <h2>Languages</h2>
                <ul>
                    <li>
                        <span className="lang-flag">🇧🇬</span>
                        <span className="lang-name">Bulgarian</span>
                        <span className="lang-level">Native</span>
                    </li>
                    <li>
                        <span className="lang-flag">🇬🇧</span>
                        <span className="lang-name">English</span>
                        <span className="lang-level">C2 — Proficient</span>
                    </li>
                    <li>
                        <span className="lang-flag">🇯🇵</span>
                        <span className="lang-name">Japanese</span>
                        <span className="lang-level">B2 — Independent</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Languages
