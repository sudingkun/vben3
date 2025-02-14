import { DefineAppConfigOptions } from '@vben/types'
import {
  CacheTypeEnum,
  ContentLayoutEnum,
  MenuModeEnum,
  MixSidebarTriggerEnum,
  NavBarModeEnum,
  PermissionModeEnum,
  RouterTransitionEnum,
  SessionTimeoutProcessingEnum,
  SettingButtonPositionEnum,
  ThemeEnum,
  TriggerEnum,
} from '@vben/constants'

import {
  HEADER_PRESET_BG_COLOR_LIST,
  primaryColor,
  SIDE_BAR_BG_COLOR_LIST,
} from './design'

// ! You need to clear the browser cache after the change
export const projectSetting: DefineAppConfigOptions = {
  theme: ThemeEnum.LIGHT,
  navBarMode: NavBarModeEnum.SIDEBAR,
  themeColor: primaryColor,
  showThemeModeToggle: true,
  openKeepAlive: true,
  useOpenBackTop: true,
  closeMessageOnSwitch: false,
  removeAllHttpPending: true,
  permissionCacheType: CacheTypeEnum.LOCAL,
  settingButtonPosition: SettingButtonPositionEnum.AUTO,
  permissionMode: PermissionModeEnum.ROUTE_MAPPING,
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,
  grayMode: false,
  colorWeak: false,
  lockTime: 0,
  useLockPage: false,
  canEmbedIFramePage: true,
  closeMixSidebarOnChange: false,
  openSettingDrawer: false,
  sidebar: {
    theme: ThemeEnum.LIGHT,
    show: true,
    visible: true,
    bgColor: SIDE_BAR_BG_COLOR_LIST[0],
    fixed: false,
    width: 210,
    mixSidebarWidth: 80,
    collapsedWidth: 48,
    collapsed: false,
    trigger: TriggerEnum.CENTER,
  },
  menu: {
    show: true,
    canDrag: false,
    split: false,
    mode: MenuModeEnum.VERTICAL,
    accordion: false,
    collapsedShowTitle: false,
    mixSideTrigger: MixSidebarTriggerEnum.CLICK,
    mixSideFixed: false,
    topMenuAlign: 'start',
    dropdownPlacement: 'top-start',
    subMenuWidth: 0,
  },
  header: {
    theme: ThemeEnum.LIGHT,
    show: true,
    visible: true,
    bgColor: HEADER_PRESET_BG_COLOR_LIST[0],
    fixed: false,
    height: 48,
    showDoc: true,
    showBreadCrumb: true,
    showBreadCrumbIcon: true,
    showFullScreen: true,
    showNotice: true,
    showSearch: true,
    showLocalePicker: true,
    showSetting: true,
  },
  logo: {
    show: true,
    visible: true,
    showTitle: true,
  },
  tabTar: {
    show: true,
    visible: true,
    height: 36,
    cache: true,
    canDrag: false,
    showFold: true,
    showQuick: true,
    showRedo: true,
  },
  content: {
    fullScreen: false,
    mode: ContentLayoutEnum.FULL,
  },
  footer: {
    height: 60,
    show: false,
    visible: false,
  },
  transition: {
    enable: true,
    basicTransition: RouterTransitionEnum.FADE_SIDE,
    openPageLoading: true,
    openNProgress: false,
  },
}
