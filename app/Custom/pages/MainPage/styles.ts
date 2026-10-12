import { styled } from '@linaria/react'

export const MainPageStyled = styled.div`
  .block {
    margin: 20px 0 30px;
    padding: 0 16px 10px;
    border-bottom: 1px solid #efefef;
  }
  .l_block {
    margin-bottom: 20px;
  }
  .block_img {
    display: block;
  }
  ul.block_menu {
    padding: 20px 0 0;
    margin: 0;
    list-style: none;
  }
  ul.block_menu li {
    margin: 0 0 10px;
  }
  .block_preview {
    min-width: 0;
  }
  .block_preview h1 {
    font-size: 24px;
    line-height: normal;
  }
  .block_preview h1 img {
    vertical-align: baseline;
  }
  .block_preview h1 a {
    text-decoration: none;
  }
  .title {
    font-size: 12px;
    color: #303030;
  }
  .support-illustration {
    display: block;
  }
  @media (min-width: 980px) {
    .block {
      padding: 0 0 10px 20px;
    }
    .l_block {
      float: left;
      width: 230px;
      margin-bottom: 0;
    }
    .block_preview {
      margin-left: 260px;
      padding-right: 20px;
    }
  }
`
