import { styled } from '@linaria/react'

export const DocumentationWrapper = styled.div`
  #content pre {
    white-space: pre;
    overflow-x: auto;
    overflow-wrap: normal;
    margin: 12px 0;
    padding: 8px;
  }
  #content input[type='button'] {
    padding: 2px 6px;
    cursor: pointer;
  }
  #content input:disabled {
    cursor: wait;
  }
  [role='status'],
  [role='alert'] {
    padding: 10px 16px;
  }
`
