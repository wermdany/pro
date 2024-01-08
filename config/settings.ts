import { Settings as LayoutSettings } from '@ant-design/pro-components';

export interface AppSetting extends LayoutSettings {
  pwa: boolean;
}

const appSetting: AppSetting = {
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false,
  title: 'Ant Design Pro',
  pwa: false,
};

export default appSetting;
