import {Dropdown, Space} from 'antd';

function Select({items, content}) {
  return(
      <>
          <Dropdown menu={{items}} className='header-selector'>
              <a onClick={(e) => e.preventDefault()}>
                  <Space>
                      {content}
                  </Space>
              </a>
          </Dropdown>
      </>
  )
}
export default Select