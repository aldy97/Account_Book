import { createGlobalStyle } from 'styled-components';

export const GlobalStyleFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1592923498056'); /* IE9 */
  src: url('iconfont.eot?t=1592923498056#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1592923498056') format('woff'),
  url('iconfont.ttf?t=1592923498056') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1592923498056#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-xiezi:before {
  content: "\e612";
}

.icon-red-packet_icon:before {
  content: "\e667";
}

.icon-jiantoushang:before {
  content: "\e62e";
}

.icon-zhanghu:before {
  content: "\e610";
}

.icon-erweima:before {
  content: "\e701";
}

.icon-liaotian:before {
  content: "\e6cb";
}

.icon-caigou:before {
  content: "\e60f";
}

.icon-mingxi:before {
  content: "\e689";
}

.icon-jiantou-copy-copy:before {
  content: "\e668";
}

.icon-gupiao:before {
  content: "\e652";
}

.icon-type:before {
  content: "\e6c0";
}

.icon-gongzi:before {
  content: "\e615";
}

.icon-shuidianmei:before {
  content: "\e631";
}

.icon-github:before {
  content: "\e691";
}

.icon-yinliao:before {
  content: "\e61c";
}

.icon-shezhi:before {
  content: "\e781";
}

.icon-shiwu-:before {
  content: "\ebc7";
}

.icon-icon-test:before {
  content: "\e62d";
}

.icon-jiaotong:before {
  content: "\e611";
}

.icon-tongji:before {
  content: "\e60a";
}

.icon-yifu:before {
  content: "\e646";
}

.icon-cha:before {
  content: "\e687";
}

.icon-huaban:before {
  content: "\e60e";
}

.icon-canyin:before {
  content: "\e68a";
}`;
