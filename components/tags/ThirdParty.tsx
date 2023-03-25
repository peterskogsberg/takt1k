import { scripts, stylesheets } from "./config";
import { ThirdPartyScripts } from "./ThirdPartyScripts";
import { ThirdPartyStyles } from "./ThirdPartyStyles";

const ThirdParty: React.FC = () => (
  <>
    <ThirdPartyScripts scripts={scripts} />
    <ThirdPartyStyles styles={stylesheets} />
  </>
);

export { ThirdParty };
