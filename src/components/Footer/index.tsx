import { DefaultFooter } from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const copyright = new Date().getFullYear() + '';

  return <DefaultFooter copyright={copyright} />;
};

export default Footer;
