import type { ILogo } from "../components/interfaces";
import LogoBase from "../components/Logo";

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  const AbstractLogo: ILogo = LogoBase;

  return <AbstractLogo size="m" className={className} />;
};

export default Logo;
