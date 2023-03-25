type HeaderProps = {
  title: string;
};

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => (
  <h1 className="title">{title}</h1>
);

export { Header };
