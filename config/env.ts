/**
 * 环境变量
 */

export interface EnvConfig {
  /** api 地址 */
  apiHost: string;
}

export const envConfigs: Record<QzEnvType, EnvConfig> = {
  dev: {
    apiHost: '',
  },
  alpha: {
    apiHost: 'https://admin-ycx-alpha.demo.qizhit.com/',
  },
  beta: {
    apiHost: 'https://admin-ycx-beta.demo.qizhit.com/',
  },
  prod: {
    apiHost: '',
  },
};
