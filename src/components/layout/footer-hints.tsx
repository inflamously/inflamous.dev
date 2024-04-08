const HintConcat = () => (
  <>
    <wbr />
    &middot;
  </>
)

const DateHint = () => (
  <span className="footer__hint">&copy;&nbsp;{new Date().getFullYear()}</span>
)

const InflamousHint = () => (
  <>
    <span className="footer__hint">
      Designed&nbsp;&&nbsp;Programmed&nbsp;by
    </span>
    &nbsp;<a href="https://github.com/inflamously/inflamous.dev">Inflamous</a>
  </>
)

const GatsbyHint = () => (
  <>
    <span className="footer__hint">Built&nbsp;with</span>&nbsp;
    <a href="https://www.gatsbyjs.com">Gatsby</a>
  </>
)

export const FooterHints = () => (
  <>
    <DateHint />
    <HintConcat />
    <InflamousHint />
    <HintConcat />
    <GatsbyHint />
  </>
)
