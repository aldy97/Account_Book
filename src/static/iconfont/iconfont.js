import { createGlobalStyle } from 'styled-components';

export const GlobalStyleFont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1592842938187'); /* IE9 */
  src: url('iconfont.eot?t=1592842938187#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1592842938187') format('woff'),
  url('iconfont.ttf?t=1592842938187') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1592842938187#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
