import { createGlobalStyle } from 'styled-components';

export const GlobalStyleFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1592890679014'); /* IE9 */
  src: url('iconfont.eot?t=1592890679014#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1592890679014') format('woff'),
  url('iconfont.ttf?t=1592890679014') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1592890679014#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
