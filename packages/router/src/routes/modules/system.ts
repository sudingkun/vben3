import { LAYOUT } from '../basic'
import { t } from "@vben/locale";

const system: RouteRecordItem = {
  path: '/system',
  name: 'SystemManager',
  component: LAYOUT,
  redirect: '/system/user',
  meta: {
    root: true,
    icon: 'uil:setting',
    title: t('routes.demo.system.moduleName'),
    orderNo: 99,
  },
  children: [
    {
      path: 'menus',
      name: 'Menus',
      component: () => import('@/pages/demo/system/menu/index.vue'),
      meta: {
        icon: 'majesticons:menu',
        title: t('routes.demo.system.menu'),
        affix: true
      }
    }
  ],
}

export default system
