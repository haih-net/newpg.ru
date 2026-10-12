import { styled } from '@linaria/react'
import headerBackground from './assets/diz/images/header_bg.jpg'
import headerLine from './assets/diz/images/line_top_short.jpg'
import menuLeft from './assets/diz/images/l_corner.png'
import menuBackground from './assets/diz/images/button_bg.png'
import menuRight from './assets/diz/images/r_corner.png'
import footerBackground from './assets/diz/images/footer_line2.png'
import footerRule from './assets/diz/images/footer_hr.png'
import separator from './assets/diz/images/header_razdelitel.png'
import columnRule from './assets/diz/images/ful2_li.gif'

export const ArchiveHtml = styled.html`
  body {
    padding: 0;
    margin: 0;
    background: #fff;
  }
`

export const ArchiveShell = styled.div`
  position: relative;
  min-height: 100vh;
  color: #303030;
  font:
    12px Tahoma,
    Arial,
    Verdana,
    sans-serif;
  background: #fff url(${headerBackground}) repeat-x top;
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #4fb013;
  }
  a:hover {
    color: #737373;
  }
  a:focus-visible,
  button:focus-visible {
    outline: 2px solid #4fb013;
    outline-offset: 3px;
  }
  h1[tabindex='-1']:focus {
    outline: none;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }
  img {
    border: 0;
    max-width: 100%;
    height: auto;
  }
  .clear {
    clear: both;
    width: 0;
    height: 0;
    font-size: 0;
  }
  .body,
  .footer_content {
    max-width: 1200px;
    margin: 0 auto;
  }
  .body {
    position: relative;
  }
  .header {
    background: url(${headerLine}) repeat-x bottom;
  }
  .contacts {
    padding: 5px 16px 0;
    text-align: right;
  }
  .contacts img {
    padding-top: 5px;
  }
  .main_menu {
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
    padding: 25px 10px 20px;
  }
  .main_menu .menu ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .main_menu .menu li {
    display: flex;
    height: 23px;
  }
  .main_menu .menu a {
    display: inline-block;
    text-decoration: none;
  }
  .main_menu .menu .l_corner {
    width: 9px;
    height: 23px;
  }
  .main_menu .menu .row {
    height: 23px;
    line-height: 23px;
  }
  .main_menu .menu .r_corner {
    width: 9px;
    height: 23px;
    margin-right: 10px;
  }
  .main_menu .menu img {
    padding-top: 6px;
    max-width: none;
  }
  .main_menu .menu img.black {
    display: inline-block;
  }
  .main_menu .menu img.white {
    display: none;
  }
  .main_menu .menu li:hover img.black,
  .main_menu .menu li:focus-within img.black {
    display: none;
  }
  .main_menu .menu li:hover img.white,
  .main_menu .menu li:focus-within img.white {
    display: inline-block;
  }
  .main_menu .menu li:hover .l_corner,
  .main_menu .menu li:focus-within .l_corner {
    background: url(${menuLeft}) no-repeat right;
  }
  .main_menu .menu li:hover .row,
  .main_menu .menu li:focus-within .row {
    background: url(${menuBackground}) repeat-x center;
  }
  .main_menu .menu li:hover .r_corner,
  .main_menu .menu li:focus-within .r_corner {
    background: url(${menuRight}) no-repeat right;
  }
  .main_menu > .clear,
  .footer_contacts > .clear {
    display: none;
  }
  .logo {
    align-self: flex-end;
  }
  .logo img {
    display: block;
  }
  main {
    min-height: 340px;
  }
  .justifyfull {
    text-align: justify;
  }
  .justifyright {
    text-align: right;
  }
  .green {
    color: #6db015;
  }
  .image-placeholder {
    display: inline-block;
    padding: 7px 10px;
    border: 1px dashed #ccc;
    background: #fafafa;
    color: inherit;
  }
  .left_block {
    padding: 20px 16px;
  }
  .left_block ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .left_block li {
    margin: 0 0 7px;
  }
  .left_block li ul {
    padding: 8px 0 0 15px;
  }
  .left_block li.self > a {
    font-weight: bold;
  }
  .center_block {
    padding: 0 16px 32px;
  }
  .breadcrumbs {
    padding: 20px 0;
  }
  .breadcrumbs h1 {
    display: inline;
    font-size: 16px;
  }
  #content {
    max-width: 800px;
    line-height: 18px;
    overflow-wrap: anywhere;
  }
  #content p {
    margin: 5px 0;
    line-height: 17px;
  }
  #content h1 {
    font-size: 17px;
  }
  #content h2 {
    font-size: 16px;
  }
  #content h3 {
    font-size: 15px;
  }
  #content h4 {
    font-size: 14px;
  }
  #content table,
  #content input {
    max-width: 100%;
  }
  #content td {
    vertical-align: top;
  }
  #content pre,
  #content .cod {
    overflow: auto;
    max-width: 100%;
  }
  .footer {
    margin-top: 30px;
    padding-top: 40px;
    background: #4b4b4b;
    color: #fff;
    font-size: 11px;
  }
  .footer a {
    color: #fff;
  }
  .footer a:hover {
    text-decoration: none;
  }
  .footer_wrapper {
    position: relative;
    padding: 0 20px 10px;
  }
  div.footer_menu {
    padding-top: 5px;
  }
  ul.footer_menu {
    display: flex;
    flex-wrap: wrap;
    gap: 12px 0;
    margin: 0;
    padding: 5px 0;
    list-style: none;
  }
  ul.footer_menu li {
    padding: 0 20px;
    background: url(${separator}) no-repeat left center;
  }
  ul.footer_menu li.first {
    padding-left: 0;
    background: none;
  }
  ul.footer_menu li.active a {
    color: #a5a5a5;
    text-decoration: none;
  }
  .hr {
    height: 30px;
    background: url(${footerRule}) repeat-x center;
  }
  ul.bottom_menu {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  ul.bottom_menu ul {
    margin: 0;
    padding: 10px 0;
    list-style: none;
  }
  ul.bottom_menu li.level2 {
    margin-bottom: 3px;
  }
  .footer_contacts {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;
    margin-top: 20px;
  }
  .footer_contacts .copy p {
    line-height: 14px;
  }
  .footer_contacts .phone img {
    display: block;
  }
  #statistics {
    display: flex;
    gap: 12px;
  }
  .archive-unavailable {
    padding: 45px 20px;
  }
  .archive-unavailable p {
    margin: 12px 0;
  }
  .archive-unavailable code {
    overflow-wrap: anywhere;
  }
  @media (min-width: 980px) {
    .contacts {
      position: absolute;
      top: 5px;
      right: 53px;
      margin-right: 10px;
      padding: 0;
    }
    .main_menu {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0;
      padding: 50px 10px 20px;
    }
    .main_menu .menu {
      margin: 20px 0 0 20px;
    }
    .main_menu .menu ul {
      padding-top: 12px;
      flex-wrap: nowrap;
    }
    .logo {
      align-self: auto;
    }
    .left_block {
      float: left;
      width: 250px;
      padding: 20px 30px;
    }
    .center_block {
      margin-left: 250px;
      padding-right: 30px;
    }
    .footer {
      background: url(${footerBackground}) repeat-x bottom;
    }
    .footer_wrapper {
      margin: 0 40px 0 30px;
      padding: 0;
      height: 262px;
    }
    ul.footer_menu {
      gap: 0;
    }
    ul.footer_menu li {
      padding: 0 30px 0 35px;
    }
    ul.footer_menu li.first {
      padding: 0 30px 0 0;
    }
    ul.bottom_menu {
      gap: 0;
    }
    ul.bottom_menu > li {
      padding: 0 3%;
      background: url(${columnRule}) repeat-y right;
    }
    ul.bottom_menu > li.first {
      padding-left: 0;
    }
    ul.bottom_menu > li.last {
      padding-right: 0;
      background: none;
    }
    ul.bottom_menu ul {
      min-height: 97px;
    }
    .footer_contacts {
      position: absolute;
      bottom: 10px;
      width: 100%;
      margin: 0;
    }
    .footer_contacts .phone {
      margin-right: 40px;
    }
    #statistics {
      position: absolute;
      right: 200px;
    }
  }
`
