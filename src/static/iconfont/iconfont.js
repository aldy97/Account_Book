import { createGlobalStyle } from 'styled-components';

export const GlobalStyleFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1592882932407'); /* IE9 */
  src: url('iconfont.eot?t=1592882932407#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1592882932407') format('woff'),
  url('iconfont.ttf?t=1592882932407') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1592882932407#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
